import { React, useEffect } from 'react';

import styles from './CardComponent.module.scss';

import axios from 'axios';
import { Link } from 'react-router-dom';

function CardComponent({ film }) {

    const rating = Number(film.rating.kp.toFixed(1));
    const poster = film.poster.previewUrl;

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
                    Рейтинг: <span className={rating > 8.5 ? 'gold' : rating > 7.5 ? 'green' : 'red'}>{rating}</span>
                </div>
            </a>
        </div>
    )
}

export default CardComponent