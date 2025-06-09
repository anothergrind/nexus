"use client";

import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import styles from '../styles/carousel.module.css';

export default function NexusPicksCarousel() {
  // Define a Book type matching the backend model
  type Book = {
    id: number;
    title: string;
    author: string;
    description?: string;
    published_date?: string;
    cover_image?: string;
    language?: string;
    rating?: number;
  };
  const [books, setBooks] = React.useState<Book[]>([]);
  const [index, setIndex] = React.useState(0);
  const [visibleCards, setVisibleCards] = React.useState(1);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    // Fetch books from backend API
    fetch('http://localhost:8000/api/books/')
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch(() => setBooks([]));
  }, []);

  // Responsive number of visible cards
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1200) return 4;
      if (window.innerWidth >= 900) return 3;
      if (window.innerWidth >= 600) return 2;
    }
    return 1;
  };

  React.useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    setVisibleCards(getVisibleCards());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardSize = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1200) return 320;
      if (window.innerWidth >= 900) return 260;
      if (window.innerWidth >= 600) return 220;
    }
    return 220;
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? (books.length > 0 ? books.length - 1 : 0) : prev - 1));
  };
  const handleNext = () => {
    setIndex((prev) => (books.length > 0 && prev === books.length - 1 ? 0 : prev + 1));
  };

  if (!mounted) return null;
  if (!books || books.length === 0) {
    return (
      <Box className={styles['carousel-container']} sx={{ py: 4, px: 2, borderRadius: 2, mt: 4, display: 'flex', justifyContent: 'center', bgcolor: 'white' }}>
        <Typography>No books found.</Typography>
      </Box>
    );
  }

  // Calculate which books to show
  const displayedBooks = [];
  for (let i = 0; i < visibleCards; i++) {
    const bookIndex = (index + i) % books.length;
    displayedBooks.push({ ...books[bookIndex], renderKey: `${books[bookIndex].id}-${i}` });
  }

  return (
    <Box className={styles['carousel-container']} sx={{ py: 4, px: 2, borderRadius: 2, mt: 4, display: 'flex', justifyContent: 'center', bgcolor: 'white' }}>
      <Box className={styles['carousel-inner']} sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: 1200, position: 'relative' }}>
        <IconButton onClick={handlePrev} className={styles['carousel-arrow-btn']} sx={{ background: 'white', mr: 2, zIndex: 1 }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Box className={styles['carousel-cards']} sx={{ display: 'flex', gap: 4, flex: 1, overflow: 'hidden' }}>
          {displayedBooks.map((book) => (
            <Link href={`/book/${book.id}`} key={book.renderKey} style={{ textDecoration: 'none' }}>
              <Paper elevation={2} className={styles['carousel-card']} sx={{ width: cardSize, height: cardSize, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5', transition: 'width 0.2s, height 0.2s', cursor: 'pointer', p: 2 }}>
                {book.cover_image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={book.cover_image} alt={book.title} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8, marginBottom: 12 }} />
                ) : (
                  <Box sx={{ width: '100%', height: 140, bgcolor: '#e0e0e0', borderRadius: 8, mb: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="caption">No Image</Typography>
                  </Box>
                )}
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, textAlign: 'center' }}>{book.title}</Typography>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 0.5, textAlign: 'center' }}>{book.author}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>Rating: {book.rating}</Typography>
              </Paper>
            </Link>
          ))}
        </Box>
        <IconButton onClick={handleNext} className={styles['carousel-arrow-btn']} sx={{ background: 'white', ml: 2, zIndex: 1, position: 'relative' }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
