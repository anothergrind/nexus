// About page with multi-section layout
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import styles from '../styles/about.module.css';

const team = [
  { name: 'Daniel Mekuria', position: 'Co-founder & CEO', avatar: '' },
  { name: 'Kamsi Ozorji', position: 'Co-founder & CTO', avatar: '' },
  { name: 'Carol Lee', position: 'UI/UX Designer', avatar: '' },
  { name: 'David Kim', position: 'Product Manager', avatar: '' },
];

export default function AboutPage() {
  return (
    <Box className={styles['about-container']}>
      {/* Section 1: Who we are */}
      <Box className={styles['about-section-1']}>
        <Box className={styles['about-leaf-img']}>
          <img src="/leaf.svg" alt="Leaves" style={{ width: '100%', height: '100%' }} />
        </Box>
        <Box style={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: 400, fontSize: { xs: 28, sm: 36, md: 44, lg: 52 } }}>
            Who we are
          </Typography>
          <Typography sx={{ mt: 2, fontSize: { xs: 16, md: 20 }, color: 'text.secondary', maxWidth: 600 }}>
            Intro statement of the Website<br />Blah Blah Blah
          </Typography>
        </Box>
      </Box>

      {/* Section 2: What we aim to do */}
      <Box className={styles['about-section-2']}>
        <Typography variant="h5" sx={{ fontWeight: 400, fontSize: { xs: 20, md: 28 } }}>What we aim to do</Typography>
        <Typography sx={{ mt: 2, fontSize: 16, color: '#eee', maxWidth: 600 }}>
          Mission statement of the Website<br />Blah Blah Blah
        </Typography>
      </Box>

      {/* Section 3: Minds Behind NexusRead */}
      <Box className={styles['about-section-3']}>
        <Typography variant="h5" sx={{ fontWeight: 400, fontSize: { xs: 18, md: 24 }, mb: 4 }}>Minds Behind Nexus</Typography>
        <Box className={styles['about-team-list']}>
          {team.map((member, i) => (
            <Box key={i} className={styles['about-team-member']}>
              <Avatar src={member.avatar} sx={{ width: 64, height: 64, mx: 'auto', mb: 1, bgcolor: 'grey.200', color: 'grey.700' }} />
              <Typography sx={{ fontWeight: 500, fontSize: 15 }}>{member.name}</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: 13 }}>{member.position}</Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
          <Chip label="See More" sx={{ bgcolor: '#e0d6e6', color: '#222', fontWeight: 500, fontSize: 14, height: 36 }} />
        </Box>
      </Box>

      {/* Section 4: Let's Begin */}
      <Box className={styles['about-section-4']}>
        <Typography variant="h5" sx={{ fontWeight: 400, fontSize: { xs: 22, md: 32 }, mb: 4 }}>Let’s Begin</Typography>
        <Button variant="contained" sx={{ bgcolor: '#6b8e4e', color: '#fff', fontWeight: 600, fontSize: 16, px: 4, py: 1.5, borderRadius: 2, boxShadow: 1, '&:hover': { bgcolor: '#55723c' } }}>
          Create a Nexus
        </Button>
      </Box>

      {/* Footer is included as a shared component, do not duplicate here */}
    </Box>
  );
}
