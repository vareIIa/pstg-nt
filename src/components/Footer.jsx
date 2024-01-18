import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import background from '../assets/img/footer.png';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100vw',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
      }}
    >
      <AppBar
        position="static"
        color="transparent" // Defina a cor do AppBar como transparente
        sx={{
// Adicione efeito de desfoque se desejar
 // Adapte conforme necessário para tornar o AppBar semi-transparente
        }}
      >
        <Toolbar>
          <Typography variant="body2" color="inherit" sx={{ flexGrow: 1 }}>
            © {new Date().getFullYear()} Projeto Desenvolve
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Instagram"
            href="https://www.instagram.com/oprojetodesenvolve/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="YouTube"
            href="https://www.youtube.com/@oProjetoDesenvolve"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
