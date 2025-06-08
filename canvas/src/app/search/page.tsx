"use client"

// Search page with autocomplete and filters using Material UI
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import styles from '../styles/library.module.css';

export default function SearchPage() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <Box className={styles['library-search-container']} sx={{ bgcolor: '#fff', minHeight: '100vh', p: 0, m: 0 }}>
      <Box className={styles['library-search-box']} sx={{ bgcolor: '#fff', maxWidth: 700, mx: 'auto', mt: 2, borderRadius: 2, boxShadow: 2 }}>
        <Box className={styles['library-search-bar']} sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 2, px: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for books, authors, etc."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={() => setFilterOpen(true)} aria-label="open filters">
                    <FilterListIcon />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: { borderRadius: 4, bgcolor: '#fff' }
            }}
          />
        </Box>
        <Paper className={styles['library-autocomplete-paper']} sx={{ mt: 0, mx: 3, p: 4, bgcolor: '#eaeaea', minHeight: 180, borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 400 }}>
            Auto complete Suggestion section
          </Typography>
        </Paper>
      </Box>
      {/* Side Drawer for Filters */}
      <Drawer
        anchor="left"
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        PaperProps={{
          className: styles['library-drawer'],
          sx: {
            width: { xs: '100vw', sm: '33vw', md: '28vw', lg: '22vw' },
            maxWidth: 350,
            bgcolor: '#fff',
            p: 3,
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
          }
        }}
      >
        <Typography variant="h6" gutterBottom>Filters</Typography>
        <TextField label="Genre" fullWidth margin="normal" />
        <TextField label="Year" fullWidth margin="normal" />
        <TextField label="Author" fullWidth margin="normal" />
        <TextField label="Type" fullWidth margin="normal" />
        <Button variant="contained" color="success" sx={{ mt: 3, width: '100%' }} onClick={() => setFilterOpen(false)}>
          Apply Filters
        </Button>
      </Drawer>
    </Box>
  );
}
