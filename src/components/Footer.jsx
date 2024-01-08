import React, { useState, useEffect } from 'react';
import { makeStyles, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/Youtube';
import backgroundFT from '../assets/img/footer.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundImage: `url(${backgroundFT})`,
    display: 'none', // Inicia oculto
  },
  grow: {
    flexGrow: 1,
  },
  iconButton: {
    color: 'black',
  },
}));

const Footer = () => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;

      // Ajusta a visibilidade do Footer
      setIsVisible(scrollY + windowHeight >= bodyHeight);
    };

    // Adiciona o event listener ao scroll
    window.addEventListener('scroll', handleScroll);

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar position="fixed" color="light" className={classes.appBar} style={{ display: isVisible ? 'flex' : 'none' }}>
      <Toolbar>
        <Typography variant="body2" color="inherit" className={classes.grow}>
          © {new Date().getFullYear()} Projeto Desenvolve
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="Instagram"
          className={classes.iconButton}
          href="https://www.instagram.com/oprojetodesenvolve/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon style={{ color: 'black' }} />
        </IconButton>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="Youtube"
          className={classes.iconButton}
          href="https://www.youtube.com/@oProjetoDesenvolve"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon style={{ color: 'black' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
