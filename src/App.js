import { React, useState, useEffect, useContext, useCallback } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import IndexContent from "./components/IndexContent/IndexContent";

import './App.scss';
import WatchPage from "./components/VideoBlock/WatchPage";
import RoomPage from "./components/RoomPage/RoomPage";

import axios from 'axios';
import MoviePage from "./components/MoviePage/MoviePage.tsx";

export default function App() {

  const [films, setFilms] = useState([])

  const api = axios.create({
    baseURL: 'https://api.kinopoisk.dev/'
  });

  async function getData(){
    try {

      const response = await api.get('movie?token=KNPB2YP-RW0MH46-H4RVRAZ-CCFGZVF&search=1405926&field=id&search=326&field=id&search=689&field=id&search=435&field=id&search=333&field=id');
      
      setFilms(response.data);

    } 
    
    catch (error) {
      alert('Error: ' + error.message);
    }

  }


  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={[<IndexContent films={films.docs} />]} />
        <Route path="/video" element={[<WatchPage />]} />
        <Route path="/room" element={[<RoomPage />]} />
        <Route path="/about-film/:id" element={[<MoviePage />]} />
      </Routes>
    </div>
  );
}

