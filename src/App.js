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

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={[<IndexContent />]} />
        <Route path="/room" element={[<WatchPage />]} />
        <Route path="/roomers" element={[<WatchPage />]} />
        <Route path="/room/:id" element={[<WatchPage />]} />
        <Route path="/watch-room:id" element={[<WatchPage />]} />
        {/* <Route path="/room" element={[<RoomPage />]} /> */}
        <Route path="/about-film/:id" element={[<MoviePage />]} />
      </Routes>
      <Footer />
    </div>
  );
}

