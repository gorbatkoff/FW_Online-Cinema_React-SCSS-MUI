import { React, useState, useEffect, useContext, useCallback } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import IndexContent from "./components/IndexContent/IndexContent";

import './App.scss';
import WatchPage from "./components/VideoBlock/WatchPage";
import RoomPage from "./components/RoomPage/RoomPage";

import axios from 'axios';
import MoviePage from "./components/MoviePage/MoviePage.tsx";
import Footer from "./components/Footer/Footer.tsx";

export default function App() {

  const [films, setFilms] = useState([])

  const api = axios.create({
    baseURL: 'https://api.kinopoisk.dev/'
  });

  const getData = useCallback(async () =>{
    try {

      const response =  await api.get('movie?token=KNPB2YP-RW0MH46-H4RVRAZ-CCFGZVF&search=381&field=id&search=382&field=id&search=383&field=id&search=384&field=id&search=385&field=id');

      setFilms(response.data);

    }

    catch (error) {
      alert('Error: ' + error.message);
    }

  }, [])


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
      <Footer />
    </div>
  );
}

