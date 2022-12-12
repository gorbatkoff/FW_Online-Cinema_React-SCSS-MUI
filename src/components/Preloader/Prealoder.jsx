import React from 'react';

import styles from './Prealoder.module.scss';

function Prealoder() {
    return (
        <div class={styles.container}>
            <div class={styles.preloader}></div>
        </div>
    )
}

export default Prealoder