"use client";

import React from 'react';

// material-ui components
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const cards = [
  { id: 1, text: 'Content Card 1' },
  { id: 2, text: 'Content Card 2' },
  { id: 3, text: 'Content Card 3' },
];

export default function NexusPicksCarousel() {
  const [index, setIndex] = React.useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  // Responsive number of visible cards
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1200) return 4;
      if (window.innerWidth >= 900) return 3;
      if (window.innerWidth >= 600) return 2;
    }
    return 1;
  };

  const [visibleCards, setVisibleCards] = React.useState(getVisibleCards());

  // Prevent hydration error: only render after mount
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fix card size flicker: memoize the card size based on current screen size
  const cardSize = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1200) return 320;
      if (window.innerWidth >= 900) return 260;
      if (window.innerWidth >= 600) return 220;
    }
    return 220;
  }, [visibleCards]);

  if (!mounted) return null;

  // Calculate which cards to show
  const displayedCards = [];
  for (let i = 0; i < visibleCards; i++) {
    const cardIndex = (index + i) % cards.length;
    // Use a unique key for each rendered card (card.id + position)
    displayedCards.push({ ...cards[cardIndex], renderKey: `${cards[cardIndex].id}-${i}` });
  }

  return (
    <Box sx={{ py: 4, px: 2, borderRadius: 2, mt: 4, display: 'flex', justifyContent: 'center', bgcolor: 'white' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: 1200, position: 'relative' }}>
        <IconButton onClick={handlePrev} sx={{ background: 'white', mr: 2, zIndex: 1 }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Box sx={{ display: 'flex', gap: 4, flex: 1, overflow: 'hidden' }}>
          {displayedCards.map((card) => (
            <Paper key={card.renderKey} elevation={2} sx={{ width: cardSize, height: cardSize, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5', transition: 'width 0.2s, height 0.2s' }}>
              <Typography variant="h5">{card.text}</Typography>
            </Paper>
          ))}
        </Box>
        <IconButton onClick={handleNext} sx={{ background: 'white', ml: 2, zIndex: 1, position: 'relative' }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
