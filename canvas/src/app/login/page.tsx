"use client";

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../styles/login.module.css';

export default function LoginPage() {
  const [showRegister, setShowRegister] = useState(false);
  // Registration form state
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  // Login form state (make controlled)
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  if (showRegister) {
    return (
      <Box className={styles['login-container']}>
        <Box className={styles['login-card']}>
          <Typography variant="h4" className={styles['login-title']}>
            Register
          </Typography>
          <Box sx={{ width: '100%'}}>
            <Typography className={styles['login-label']}>Email</Typography>
            <TextField
              fullWidth
              placeholder="youremail@gmail.com"
              variant="outlined"
              sx={{ marginBottom: 6 }}
              value={registerEmail}
              onChange={e => setRegisterEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ width: '100%'}}>
            <Typography className={styles['login-label']}>Password</Typography>
            <TextField
              fullWidth
              type="password"
              placeholder="********"
              variant="outlined"
              sx={{ marginBottom: 6 }}
              value={registerPassword}
              onChange={e => setRegisterPassword(e.target.value)}
            />
          </Box>
          <Button
            variant="contained"
            fullWidth
            className={styles['login-btn']}
            // onClick={handleRegister} // Add registration logic here
          >
            Register
          </Button>
          <Typography className={styles['login-subtext']}>
            Already have an account?
          </Typography>
          <Button onClick={() => setShowRegister(false)} className={styles['login-link']} >
            Login to your Nexus account
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box className={styles['login-container']}>
      {/* Centered Card */}
      <Box className={styles['login-card']}>
        <Typography variant="h4" className={styles['login-title']}>
          Login
        </Typography>
        <Box sx={{ width: '100%'}}>
          <Typography className={styles['login-label']}>Email</Typography>
          <TextField
            fullWidth
            placeholder="youremail@gmail.com"
            variant="outlined"
            sx={{ marginBottom: 6 }}
            value={loginEmail}
            onChange={e => setLoginEmail(e.target.value)}
          />
        </Box>
        <Box sx={{ width: '100%'}}>
          <Typography className={styles['login-label']}>Password</Typography>
          <TextField
            fullWidth
            type="password"
            placeholder="********"
            variant="outlined"
            sx={{ marginBottom: 6 }}
            value={loginPassword}
            onChange={e => setLoginPassword(e.target.value)}
          />
        </Box>
        <Button
          variant="contained"
          fullWidth
          className={styles['login-btn']}
        >
          Log In
        </Button>
        <Typography className={styles['login-subtext']}>
          New to Nexus?
        </Typography>
        <Button onClick={() => setShowRegister(true)} className={styles['login-link']} >
          Create your Nexus account
        </Button>
      </Box>
    </Box>
  );
}
