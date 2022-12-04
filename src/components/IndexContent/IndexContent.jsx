import React from 'react';
import { Container, Divider, Typography } from '@mui/material';

import styles from './IndexContent.module.scss';

function IndexContent() {
  return (
    <Container className={styles['index-container']}>
      <h1>Новости</h1>

      <h2>Будь всегда в курсе событий!</h2>
    </Container>
  )
}

export default IndexContent