import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
        Title: {book.title}
      </Typography>
      <Typography variant="h5" className={styles['book-author']}>
        Author: {book.author}
      </Typography>
      <Typography variant="subtitle1" className={styles['book-rating']} gutterBottom>
        Rating: {book.rating}
      </Typography>
      <Box className={styles['book-details-grid']}>
        <Box className={styles['book-image-box']}>
          {book.cover_image ? (
            <img
              src={book.cover_image}
              alt={book.title}
              style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 12 }}
            />
          ) : (
            <Typography>IMAGE OF THE BOOK</Typography>
          )}
        </Box>
        <Box className={styles['book-description-box']}>
          <Typography>{book.description}</Typography>
        </Box>
      </Box>
      <Box className={styles['book-actions-grid']}>
        <Button variant="outlined">VIEW SAMPLE OF {book.title.toUpperCase()}</Button>
        <Button variant="outlined">VIEW PUBLISHED VERSION OF {book.title.toUpperCase()}</Button>
        <Button variant="outlined">VIEW REVIEWS OF {book.title.toUpperCase()}</Button>
        <Button variant="outlined">SHARE {book.title.toUpperCase()}</Button>
      </Box>
      <Box className={styles['book-community-btn-box']}>
        <Button variant="outlined" className={styles['book-community-btn']}>
          VIEW COMMUNITY
        </Button>
      </Box>
    </Box>
  );
}
