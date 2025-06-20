import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import styles from '../styles/book.module.css';

export default function BookDetails() {
  return (
    <Box className={styles['book-details-container']}>
      <Typography variant="h3" className={styles['book-title']} gutterBottom>
        Book Title
      </Typography>
      <Typography variant="h5" className={styles['book-author']}>
        Author
      </Typography>
      <Typography variant="subtitle1" className={styles['book-rating']} gutterBottom>
        Rating
      </Typography>
      <Grid container spacing={4} className={styles['book-details-grid']}>
        <Box className={styles['book-image-box']}>
          <Typography>IMAGE OF THE BOOK</Typography>
        </Box>
        <Box className={styles['book-description-box']}>
          <Typography fontWeight="bold">DESCRIPTION OF THE BOOK</Typography>
        </Box>
      </Grid>
      <Grid container spacing={2} className={styles['book-actions-grid']} justifyContent="center">
        <Box>
          <Button variant="outlined">View Sample of {'{book name}'}</Button>
        </Box>
        <Box>
          <Button variant="outlined">View Published version of {'{book name}'}</Button>
        </Box>
        <Box>
          <Button variant="outlined">View Reviews of {'{book name}'}</Button>
        </Box>
        <Box>
          <Button variant="outlined">Share {'{book name}'}</Button>
        </Box>
        <Box className={styles['book-community-btn-box']}>
          <Button variant="outlined" className={styles['book-community-btn']}>
            View Community
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}