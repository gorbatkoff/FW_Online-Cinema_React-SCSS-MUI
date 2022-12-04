import { React, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import IndexContent from "./components/IndexContent/IndexContent";

import './App.scss';
import WatchPage from "./components/VideoBlock/WatchPage";

export default function App() {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={[<IndexContent />]} />
        <Route path="/video" element={[<WatchPage />]} />
      </Routes>


    </div>
  );
}

