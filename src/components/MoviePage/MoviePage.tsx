import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Button, Container } from '@mui/material';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import ShareIcon from '@mui/icons-material/Share';

import styles from './MoviePage.module.scss';

import axios from 'axios';

type Props = {}

const MoviePage = (props: Props) => {

  const id = useParams().id;

  type Movie = {
    name: string,
    genres: Array<{
      name: string,
    }>,
    countries: Array<{
      name: string,
    }>,
    persons: Array<Object>,
    id: number,
    year: number,
    description: string,
    rating: number,
    poster: {
      _id: string,
      url: string,
      previewUrl: string
    },
  }

  const [movie, setMovie] = useState<Movie | null>(null);

  async function getMovieInfo() {
    try {
      const response = await axios.get(`https://api.kinopoisk.dev/movie?token=KNPB2YP-RW0MH46-H4RVRAZ-CCFGZVF&search=${id}&field=id`)

      setMovie(response.data);

      console.log(response.data);
    }
    catch (error) {
      alert("Error" + error.message)
    }
  }

  async function createRoom() {
    alert('hello world')
  }

  async function addToFavorite(){
    alert('hello world')
  }
  async function addToPlayNext(){
    alert('hello world')
  }
  async function shareFilm(){
    alert('hello world')
  }


  useEffect(() => {
    getMovieInfo();
  }, [])

  return (
    <div className={styles['movie-page']}>
      <div className={styles['movie-information']}>

        <div>
          <h1>{movie?.name}</h1>
          <p className={styles['movie-year']}>
            {movie?.countries[0]?.name} {movie?.year}
          </p>

          <p className={styles.description}>
            {movie?.description}
          </p>

          <div>
            {movie?.genres.map((genre) => {
              return <span className={styles.genre}>{genre?.name.toUpperCase()}</span>;
            })}
          </div>

          <Button variant="contained" sx={{ background: "linear-gradient(155deg, rgba(255,183,0,1) 0%, rgba(187,0,130,1) 100%)", marginTop: "3em" }} size="large" className={styles['create-room-button']}
            onClick={createRoom}
          >
            Создать комнату
          </Button>

          <div className={styles.favorite}>
            <TurnedInIcon fontSize="large" onClick={addToFavorite}/>
            <QueuePlayNextIcon fontSize="large" onClick={addToPlayNext}/>
            <ShareIcon fontSize="large" onClick={shareFilm}/>
          </div>
        </div>

        <div className={styles['movie-poster']}>
          <img src={movie?.poster?.url} alt="" height="800" width="auto" />
        </div>

      </div>
    </div>
  )
}

export default MoviePage;