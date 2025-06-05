"use client"
// material-ui components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import DiamondIcon from '@mui/icons-material/Diamond';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#fff', borderTop: 1, borderColor: 'grey.300', mt: 4, pt: 4, pb: 2 }}>
      {/* Social header and icons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: { xs: 2, md: 8 }, pb: 2, borderBottom: 1, borderColor: 'grey.200' }}>
        <Typography sx={{ fontSize: 18, fontWeight: 400 }}>
          Get connected with us on social networks:
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={{ color: '#222', fontSize: 28 }} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ color: '#222', fontSize: 28 }} />
          </a>
        </Box>
      </Box>
      {/* Main footer content */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, px: { xs: 2, md: 8 }, py: 4, gap: { xs: 4, md: 0 } }}>
        {/* Brand/Description */}
        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 1 }}>
            <DiamondIcon sx={{ mr: 1 }} /> Nexus
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 340, mx: { xs: 'auto', md: 0 } }}>
            Nexus is your gateway to discovering, sharing, and reviewing the best books and resources for your learning journey.
          </Typography>
        </Box>
        {/* Navigation */}
        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>Navigation</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Home</Typography>
            </Link>
            <Link href="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Login</Typography>
            </Link>
            <Link href="/library" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Library</Typography>
            </Link>
            <Link href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>About</Typography>
            </Link>
          </Box>
        </Box>
        {/* Contact */}
        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>Contact</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, alignItems: { xs: 'center', md: 'flex-start' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <HomeIcon sx={{ fontSize: 20 }} /> Austin, TX, US
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon sx={{ fontSize: 20 }} /> contact@nexus.com
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PhoneIcon sx={{ fontSize: 20 }} /> +1 555 123 4567
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
