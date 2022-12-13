import React from 'react';

import styles from './Prealoder.module.scss';

function Prealoder() {
    return (
        <div className={styles.container}>
            <div className={styles.preloader}></div>
        </div>
    )
}

export default Prealoder