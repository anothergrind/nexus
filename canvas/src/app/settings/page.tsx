"use client"

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import styles from '../styles/settings.module.css';

export default function SettingsPage() {
  // Dark mode toggle state
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => setDarkMode((prev) => !prev);

  // Example states for switches and selects (not functional, just for UI)
  const [postMentions, setPostMentions] = useState(false);
  const [webTheme, setWebTheme] = useState(false);
  const [tts, setTts] = useState(false);
  const [colorblind, setColorblind] = useState(false);
  const [limitedWeb, setLimitedWeb] = useState(false);
  const [emailNewSales, setEmailNewSales] = useState(false);
  const [emailReview, setEmailReview] = useState(false);
  const [emailComment, setEmailComment] = useState(false);
  const [pushDM, setPushDM] = useState(false);
  const [pubVis, setPubVis] = useState('public');
  const [commentPerm, setCommentPerm] = useState('everyone');
  const [profileVis, setProfileVis] = useState('public');

  // Apply dark mode to body and root elements (for Navbar/Footer)
  React.useEffect(() => {
    document.body.style.background = darkMode ? '#181818' : '#fff';
    document.body.style.color = darkMode ? '#ededed' : '#171717';
    document.documentElement.style.background = darkMode ? '#181818' : '#fff';
    document.documentElement.style.color = darkMode ? '#ededed' : '#171717';
  }, [darkMode]);

  return (
    <Box className={darkMode ? `${styles['settings-container']} ${styles['settings-container-dark']}` : styles['settings-container']}>
      {/* Contact Information */}
      <Box className={`${styles['settings-section']} ${styles['settings-section-row']}`}> 
        <Box className={styles['settings-profile']}>
          <Typography variant="h5" sx={{ mb: 2 }}>Contact Information</Typography>
          <Box className={styles['settings-profile-info']}>
            <Avatar className={styles['settings-profile-avatar']} />
            <Box>
              <Typography>Name: John Doe</Typography>
              <Typography>Username: @doeJohn</Typography>
              <Typography>Password: *********</Typography>
              <Typography>Date of Birth: 11/11/1991</Typography>
              <Typography>Email: doejohn@gmail.com</Typography>
            </Box>
          </Box>
          <Button variant="contained" sx={{ bgcolor: darkMode ? '#388e3c' : '#7ed957', color: darkMode ? '#fff' : '#222', mt: 2, fontWeight: 600, boxShadow: 2, '&:hover': { bgcolor: darkMode ? '#256029' : '#6bc24a' } }}>EDIT PROFILE</Button>
        </Box>
        <Box className={styles['settings-privacy']}>
          <Box>
            <Typography variant="h6" sx={{ mb: 1 }}>Privacy</Typography>
            <Typography>Publication visibility</Typography>
            <TextField select size="small" value={pubVis} onChange={e => setPubVis(e.target.value)} sx={{ mb: 1, width: 200 }}>
              <MenuItem value="public">Public</MenuItem>
              <MenuItem value="private">Private</MenuItem>
            </TextField>
            <Typography>Comment permission</Typography>
            <TextField select size="small" value={commentPerm} onChange={e => setCommentPerm(e.target.value)} sx={{ mb: 1, width: 200 }}>
              <MenuItem value="everyone">Everyone</MenuItem>
              <MenuItem value="friends">Friends Only</MenuItem>
              <MenuItem value="none">No one</MenuItem>
            </TextField>
            <Typography>Profile Information Visibility</Typography>
            <TextField select size="small" value={profileVis} onChange={e => setProfileVis(e.target.value)} sx={{ mb: 1, width: 200 }}>
              <MenuItem value="public">Public</MenuItem>
              <MenuItem value="private">Private</MenuItem>
            </TextField>
          </Box>
          <Box>
            <Typography>Post Mentions:</Typography>
            <Switch checked={postMentions} onChange={() => setPostMentions(v => !v)} />
          </Box>
        </Box>
      </Box>

      {/* Accessibility */}
      <Box className={styles['settings-accessibility']}>
        <Typography variant="h6" sx={{ mb: 2 }}>Accessibility</Typography>
        <Box className={styles['settings-accessibility-list']}>
          <Box className={styles['settings-accessibility-row']}>
            <Typography>Web Theme:</Typography>
            <Switch checked={webTheme} onChange={() => setWebTheme(v => !v)} />
            <Button size="small" variant={darkMode ? 'contained' : 'outlined'} onClick={handleDarkMode} sx={{ ml: 2, bgcolor: darkMode ? '#388e3c' : '#fff', color: darkMode ? '#fff' : '#388e3c', borderColor: '#388e3c', '&:hover': { bgcolor: darkMode ? '#256029' : '#e8f5e9', borderColor: '#256029' } }}>
              {darkMode ? 'Dark Mode On' : 'Dark Mode Off'}
            </Button>
          </Box>
          <Box className={styles['settings-accessibility-row']}>
            <Typography>Text to Speech:</Typography>
            <Switch checked={tts} onChange={() => setTts(v => !v)} />
          </Box>
          <Box className={styles['settings-accessibility-row']}>
            <Typography>Colorblind Mode:</Typography>
            <Switch checked={colorblind} onChange={() => setColorblind(v => !v)} />
          </Box>
          <Box className={styles['settings-accessibility-row']}>
            <Typography>Limited Web Access:</Typography>
            <Switch checked={limitedWeb} onChange={() => setLimitedWeb(v => !v)} />
          </Box>
        </Box>
      </Box>

      {/* Notifications */}
      <Box className={styles['settings-notifications']}>
        <Typography variant="h6" sx={{ mb: 2 }}>Notifications</Typography>
        <Box className={styles['settings-notifications-row']}>
          <Box>
            <Typography sx={{ fontWeight: 500 }}>Email Notifications:</Typography>
            <Box className={styles['settings-notification-list']}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography>New Sales:</Typography>
                <Switch checked={emailNewSales} onChange={() => setEmailNewSales(v => !v)} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography>Review Posted:</Typography>
                <Switch checked={emailReview} onChange={() => setEmailReview(v => !v)} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography>Comment posted:</Typography>
                <Switch checked={emailComment} onChange={() => setEmailComment(v => !v)} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 500 }}>Push Notifications:</Typography>
            <Box className={styles['settings-notification-list']}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography>Direct Message Received:</Typography>
                <Switch checked={pushDM} onChange={() => setPushDM(v => !v)} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}