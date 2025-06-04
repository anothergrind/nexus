// Login page placeholder
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function LoginPage() {
  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <Button variant="contained" color="primary">Login with Google</Button>
    </Box>
  );
}
