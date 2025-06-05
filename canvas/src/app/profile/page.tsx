import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from '../styles/profile.module.css';

export default function ProfilePage() {
  return (
    <Box className={styles['profile-container']} sx={{ width: '100%', minHeight: '100vh', bgcolor: 'background.default', p: 0, m: 0 }}>
      {/* Profile Banner */}
      <Box sx={{
        bgcolor: '#C8F7C5', // light green
        borderRadius: 2,
        mt: 4,
        mx: 'auto',
        width: { xs: '96%', md: '80%' },
        minHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        boxShadow: 2,
      }}>
        <Avatar className={styles['profile-avatar']} sx={{ width: 110, height: 110, bgcolor: '#fff', color: '#222', border: '2.5px solid #222', mb: 1, mt: 2 }} />
        <Typography className={styles['profile-name']} sx={{ fontWeight: 500, fontSize: 18, mb: 2 }}>Username: <span style={{ fontWeight: 400 }}>JohnJohn</span></Typography>
      </Box>

      {/* Icon Button Card */}
      <Box sx={{
        width: { xs: '96%', md: '80%' },
        mx: 'auto',
        mt: -3,
        mb: 4,
        bgcolor: '#fff',
        borderRadius: 2,
        boxShadow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        py: 1.5,
        border: '1px solid #e0e0e0',
        position: 'relative',
        zIndex: 1,
      }}>
        <IconButton color="primary" aria-label="email" sx={{ bgcolor: '#222', color: '#fff', '&:hover': { bgcolor: '#388e3c' } }}>
          <EmailIcon />
        </IconButton>
        <IconButton color="primary" aria-label="phone" sx={{ bgcolor: '#222', color: '#fff', '&:hover': { bgcolor: '#388e3c' } }}>
          <PhoneIcon />
        </IconButton>
        <IconButton color="primary" aria-label="settings" sx={{ bgcolor: '#222', color: '#fff', '&:hover': { bgcolor: '#388e3c' } }}>
          <SettingsIcon />
        </IconButton>
      </Box>

      {/* Works Section */}
      <Box className={styles['profile-section']} sx={{ mt: 4, px: 0, width: { xs: '96%', md: '80%' }, mx: 'auto' }}>
        <Typography className={styles['profile-section-title']} variant="h4" sx={{ fontWeight: 400, mb: 2 }}>Works</Typography>
        <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', mb: 2 }}>
          {[1, 2, 3].map((i) => (
            <Box key={i} sx={{ width: 160, height: 200, border: '1.5px solid #bbb', borderRadius: 2, bgcolor: '#fff', boxShadow: 1 }} />
          ))}
        </Box>
      </Box>

      {/* Likes Section */}
      <Box className={styles['profile-section']} sx={{ mt: 4, px: 0, width: { xs: '96%', md: '80%' }, mx: 'auto', mb: 8 }}>
        <Typography className={styles['profile-section-title']} variant="h4" sx={{ fontWeight: 400, mb: 2 }}>Likes</Typography>
        <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {[1, 2, 3].map((i) => (
            <Box key={i} sx={{ width: 160, height: 200, border: '1.5px solid #bbb', borderRadius: 2, bgcolor: '#fff', boxShadow: 1 }} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}