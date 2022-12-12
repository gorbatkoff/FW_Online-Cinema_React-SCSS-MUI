import React from 'react';

import { Container, Divider, Typography } from '@mui/material';

import CardComponent from '../Card/CardComponent';

import styles from './IndexContent.module.scss';
import Prealoder from '../Preloader/Prealoder';

function IndexContent({ films }) {

  function renderFilms(films) {
    return films.map((film) => {
      console.log(film)
      return <CardComponent film={film}/>
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