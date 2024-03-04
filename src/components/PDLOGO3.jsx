import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Logo from '../assets/img/logorgb.png';

export default function PDLOGO() {
  return (
    <CardMedia
      sx={{ 
        width: 'auto',
        
        marginBottom: '5vh',

      }}
      component="img"
      alt="Imagem de Exemplo"
      image={Logo}
    />
  );
}
