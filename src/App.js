import { React, useState, useEffect, useContext, useCallback } from "react";

import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import IndexContent from "./components/IndexContent/IndexContent";

import './App.scss';
import WatchPage from "./components/VideoBlock/WatchPage";
import RoomPage from "./components/RoomPage/RoomPage";

import MoviePage from "./components/MoviePage/MoviePage.jsx";
import Footer from "./components/Footer/Footer.tsx";

import axios from 'axios';
import PageNotFound from "./components/PageNotFound/PageNotFound";

const addIdToUser = () => {
  if (!localStorage.getItem('userId')) {
    localStorage.setItem('userId', (Math.random() * 1000000).toFixed().toString());
  }
}

export default function App() {

  const [isShowSnow, setIsShowSnow] = useState(false);

  useEffect(() => {
    addIdToUser()
  }, [])

  return (
    <div>
      <Header setIsShowSnow={setIsShowSnow} isShowSnow={isShowSnow}/>
      <Routes>
        <Route path="/" element={[<IndexContent />]} />
        <Route path="/room" element={[<WatchPage />]} />
        <Route path="/watch-room::id" element={[<WatchPage />]} />
        <Route path="/about-film/:id" element={[<MoviePage />]} />
        <Route path="*" element={[<PageNotFound />]} />
      </Routes>
      <Footer />
      

      
    </div>
  );
}

