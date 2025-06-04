// Search page with autocomplete and filters using Material UI
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function SearchPage() {
  return (
    <Grid container spacing={4} sx={{ p: 4 }}>
      <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 66%' }, minWidth: 0 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for books, authors, etc."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: { borderRadius: 4 }
          }}
        />
        <Paper sx={{ mt: 2, p: 4, bgcolor: '#eee', minHeight: 200 }}>
          <Typography variant="h5">Auto complete Suggestion section</Typography>
        </Paper>
      </Box>
      <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 33%' }, minWidth: 0 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>Filters</Typography>
          <TextField label="Genre" fullWidth margin="normal" />
          <TextField label="Year" fullWidth margin="normal" />
          <TextField label="Author" fullWidth margin="normal" />
          <TextField label="Type" fullWidth margin="normal" />
        </Paper>
      </Box>
    </Grid>
  );
}
