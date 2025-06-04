// Book details page layout using Material UI
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function BookDetails() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>Book Title</Typography>
      <Typography variant="h5" align="center">Author</Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>Rating</Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' }, minWidth: 0 }}>
          <Box sx={{ bgcolor: '#eee', height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography>IMAGE OF THE BOOK</Typography>
          </Box>
        </Box>
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' }, minWidth: 0 }}>
          <Box sx={{ bgcolor: '#eee', height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography fontWeight="bold">DESCRIPTION OF THE BOOK</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 4 }} justifyContent="center">
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
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="outlined" sx={{ borderRadius: 4, px: 6 }}>View Community</Button>
        </Box>
      </Grid>
    </Box>
  );
}
