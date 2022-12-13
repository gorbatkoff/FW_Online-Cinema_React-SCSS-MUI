import { React, useEffect } from 'react';

import styles from './CardComponent.module.scss';

import axios from 'axios';
import { Link } from 'react-router-dom';

function CardComponent({ film }) {

    const rating = Number(film.rating.kp.toFixed(1));
    const poster = film?.poster?.previewUrl || "https://play-lh.googleusercontent.com/5czw6iycA8YhjI653GQdwnnmu8NNzEMXV32gZKoVCYZV6PQUAv_YV0uJ2PU1E-Jm9PE";

    return (
        <div className={styles.poster}>
            <a href={"/about-film/" + film.id}>
                <div className={styles['movie-image']}>
                    <img src={poster} alt="" />
                </div>

                <div className={styles['movie-title']}>
                    {film.name}
                </div>

                <div className={styles['movie-rating']}>
                    Рейтинг: <span className={rating >= 8 ? 'gold' : rating > 6.5 ? 'green' : 'red'}>{rating}</span>
                </div>
            </a>
        </div>
    )
}

export default CardComponent