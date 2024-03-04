import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Logo from '../assets/img/logo-hori.png';

export default function PDLOGO() {
  return (
    <CardMedia
      sx={{ 
        maxWidth: '50%',  
        paddingRight: '3vh',
        marginBottom: '5vh',
      }}
      component="img"
      alt="Imagem de Exemplo"
      image={Logo}
    />
  );
}
