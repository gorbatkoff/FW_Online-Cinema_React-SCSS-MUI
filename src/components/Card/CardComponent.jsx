import { React, useEffect } from 'react';

import styles from './CardComponent.module.scss';

import axios from 'axios';

function CardComponent({ film }) {

    const rating = Number(film.rating.kp.toFixed(1));

    console.log(rating);
    console.log(typeof rating);
    const poster = film.poster.previewUrl;

    // useEffect(() => {

    // }, [])

    return (
        <div className={styles.poster}>
            <div className={styles['movie-image']}>
                <img src={poster} alt="" />
            </div>

            <div className={styles['movie-title']}>
                {film.name}
            </div>

            <div className={styles['movie-genre']}>
                <span style={{ color: "#6c757d" }}>Мелодрама, Комедия, {film.year}</span>
            </div>

            <div className={styles['movie-rating']}>
                Рейтинг: <span className={rating > 8.5 ? 'gold' : rating > 7.5 ? 'green' : 'red'}>{rating}</span>
            </div>
        </div>
    )
}

export default CardComponent