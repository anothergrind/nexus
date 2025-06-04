"use client"
// material-ui components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, textAlign: 'center', borderTop: 1, borderColor: 'grey.300', mt: 4 }}>
      <Typography variant="h6" fontWeight="bold">
        Footer
      </Typography>
    </Box>
  );
}
