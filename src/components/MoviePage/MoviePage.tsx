import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import ShareIcon from '@mui/icons-material/Share';

import styles from './MoviePage.module.scss';

import axios from 'axios';

type Props = {}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 400,
  color: 'black',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  transition: '0.3s',
  p: 4,
};

const MoviePage = (props: Props) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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
    rating: {
      kp: number,
    }
    poster: {
      _id: string,
      url: string,
      previewUrl: string
    },
  }

  const [movie, setMovie] = useState<Movie | null>(null);

  const rating = Number(movie?.rating?.kp.toFixed(1));

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
  async function addToFavorite() {

    if(localStorage.getItem('movies')){
      let arr = JSON.parse(localStorage.getItem('movies') || '{}'); //array

      if(!arr.includes(id)){
        arr.push(id);
        alert('Фильм добавлен в избранное')
      }

      else{
        alert('Фильм уже в избранном')
      }
    }

    const array = [id];

    localStorage.setItem('movies', JSON.stringify(array));
  }
  async function addToPlayNext() {
    alert('hello world')
  }
  async function shareFilm() {
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
          <div className={styles['movie-year']}>
            <div>
              {movie?.countries[0]?.name} {movie?.year}
            </div>
          </div>

          <p className={styles.description}>
            {movie?.description}
          </p>

          <div>
            {movie?.genres.map((genre) => {
              return <span className={styles.genre}>{genre?.name.toUpperCase()}</span>;
            })}
          </div>


          <div>
            <Button variant="contained" sx={{ background: "linear-gradient(155deg, rgba(255,183,0,1) 0%, rgba(187,0,130,1) 100%)", marginTop: "3em" }} size="large" className={styles['create-room-button']}
              onClick={handleOpen}
            >
              Создать комнату
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                  <center>
                    <span className={styles['create-room-title']}>Создать комнату</span>
                  </center>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal>
          </div>

          <div className={styles.favorite}>
            <TurnedInIcon fontSize="large" onClick={addToFavorite} />
            <QueuePlayNextIcon fontSize="large" onClick={addToPlayNext} />
            <ShareIcon fontSize="large" onClick={shareFilm} />
          </div>
        </div>

          <img style={{boxShadow: `0px 0px 85px #fff`}} className={styles['movie-poster']} src={movie?.poster?.url} alt="Movie Poster" height="800" width="auto" />
      </div>
    </div>
  )
}

export default MoviePage;