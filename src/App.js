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
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true)

  const api = axios.create({
    baseURL: 'https://api.kinopoisk.dev/'
  });

  const getData = async () => {

    console.log('fetching data')

    try {

      if (fetching) {
        const response = await api.get(`movie?field=rating.kp&search=6-10&field=year&search=2017-2022&field=typeNumber&search=2&sortField=year&token=KNPB2YP-RW0MH46-H4RVRAZ-CCFGZVF&limit=20&page=${currentPage}`);

        console.log(response.data.docs)

        setFilms([...films, ...response.data.docs]);

        setCurrentPage(prevState => prevState + 1);
      }

    }
    catch (error) {
      alert('Error: ' + error.message);
    }

    finally{
      setFetching(false);
    }
  }

  const scrollHandler = (e) => {

    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
      setFetching(true);
    }

  }


  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, [])

  useEffect(() => {
    getData();
  }, [fetching])

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={[<IndexContent films={films} />]} />
        <Route path="/video" element={[<WatchPage />]} />
        <Route path="/room" element={[<RoomPage />]} />
        <Route path="/about-film/:id" element={[<MoviePage />]} />
      </Routes>
      <Footer />
    </div>
  );
}

