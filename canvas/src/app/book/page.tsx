// Book details page layout using Material UI
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import styles from '../styles/book.module.css';

export default function BookDetails() {
  return (
    <Box className={styles['book-details-container']} sx={{ p: 4 }}>
      <Typography variant="h3" className={styles['book-title']} align="center" gutterBottom>Book Title</Typography>
      <Typography variant="h5" className={styles['book-author']} align="center">Author</Typography>
      <Typography variant="subtitle1" className={styles['book-rating']} align="center" gutterBottom>Rating</Typography>
      <Grid container spacing={4} className={styles['book-details-grid']} sx={{ mt: 2 }}>
        <Box className={styles['book-image-box']} sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' }, minWidth: 0 }}>
          <Box sx={{ bgcolor: '#eee', height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography>IMAGE OF THE BOOK</Typography>
          </Box>
        </Box>
        <Box className={styles['book-description-box']} sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' }, minWidth: 0 }}>
          <Box sx={{ bgcolor: '#eee', height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography fontWeight="bold">DESCRIPTION OF THE BOOK</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid container spacing={2} className={styles['book-actions-grid']} sx={{ mt: 4 }} justifyContent="center">
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
        <Box className={styles['book-community-btn-box']} sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="outlined" className={styles['book-community-btn']} sx={{ borderRadius: 4, px: 6 }}>View Community</Button>
        </Box>
      </Grid>
    </Box>
  );
}
