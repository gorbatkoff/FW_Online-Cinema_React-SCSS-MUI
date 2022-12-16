import React, {useState, useEffect} from 'react';

import { Container, Divider, Typography } from '@mui/material';

import CardComponent from '../Card/CardComponent';

import styles from './IndexContent.module.scss';
import Prealoder from '../Preloader/Prealoder';

import axios from 'axios';

function IndexContent() {

  
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


  function renderFilms(films) {
    return films.map((film) => {
      return <CardComponent key={film.id}film={film}/>
    })
  }

  return (
    <Container className={styles['index-container']}>
      <h1>Новости</h1>

      <h2>Будь всегда в курсе событий!</h2>

      <div className={styles.titles}>
        {films ? renderFilms(films) : <Prealoder />}
      </div>
    </Container>
  )
}

export default IndexContent