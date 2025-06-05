"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from '../styles/navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Login', href: '/login' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Reference', href: '/reference' },
  { label: 'Settings', href: '/settings' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={styles['navbar-container']}>
      <AppBar position="static" color="inherit" elevation={0} className={styles['navbar-appbar']}>
        <Toolbar className={styles['navbar-toolbar']}>
          {/* Left: Logo and Brand */}
          <Box className={styles['navbar-brand']}>
            <Image src="/next.svg" alt="Logo" width={40} height={40} style={{ marginRight: 12 }} />
            <Typography variant="h6" component="div" className={styles['navbar-title']}>
              Nexus
            </Typography>
          </Box>

          {/* Center: Nav Links (hide on mobile) */}
          <Box className={styles['navbar-links']}>
            <Button color="inherit" href="/library" className={styles['navbar-link-btn']}>Library</Button>
            <Button color="inherit" href="/about" className={styles['navbar-link-btn']}>About</Button>
            <Button color="inherit" href="/login" className={styles['navbar-link-btn']}>Login</Button>
          </Box>

          {/* Right: Search and Profile */}
          <Box className={styles['navbar-actions']}>
            <IconButton color="inherit" href="/search" sx={{ color: 'black' }}>
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit" onClick={handleMenu} sx={{ color: 'black' }}>
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem component={Link} href="/profile" onClick={handleClose}>Profile</MenuItem>
              <MenuItem component={Link} href="/settings" onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
        {/* Mobile Nav: show links below on xs/sm */}
        <Box className={styles['navbar-mobile-links']}>
          <Button color="inherit" href="/library" className={styles['navbar-link-btn']}>Library</Button>
          <Button color="inherit" href="/about" className={styles['navbar-link-btn']}>About</Button>
          <Button color="inherit" href="/login" className={styles['navbar-link-btn']}>Login</Button>
        </Box>
      </AppBar>
    </Box>
  );
}
