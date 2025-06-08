import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import styles from '../../styles/book.module.css';

// Fetch book data from your backend API
async function getBook(id: string) {
  // Replace with your actual API endpoint
  const res = await fetch(`http://localhost:8000/api/books/${id}/`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch book');
  return res.json();
}

export default async function BookDetails({ params }: { params: { id: string } }) {
  const book = await getBook(params.id);
  return (
    <Box className={styles['book-details-container']}>
      <Typography variant="h3" className={styles['book-title']} gutterBottom>
        {book.title}
      </Typography>
      <Typography variant="h5" className={styles['book-author']}>
        {book.author}
      </Typography>
      <Typography variant="subtitle1" className={styles['book-rating']} gutterBottom>
        {book.rating}
      </Typography>
      <Grid container spacing={4} className={styles['book-details-grid']}>
        <Box className={styles['book-image-box']}>
          {/* Replace with actual image if available */}
          <Typography>IMAGE OF THE BOOK</Typography>
        </Box>
        <Box className={styles['book-description-box']}>
          <Typography fontWeight="bold">{book.description}</Typography>
        </Box>
      </Grid>
      <Grid container spacing={2} className={styles['book-actions-grid']} justifyContent="center">
        <Box>
          <Button variant="outlined">View Sample of {book.title}</Button>
        </Box>
        <Box>
          <Button variant="outlined">View Published version of {book.title}</Button>
        </Box>
        <Box>
          <Button variant="outlined">View Reviews of {book.title}</Button>
        </Box>
        <Box>
          <Button variant="outlined">Share {book.title}</Button>
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
