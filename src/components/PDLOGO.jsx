import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Logo from '../assets/img/logo.svg';

export default function PDLOGO() {
  return (
    
      <CardMedia
      sx={{ width: 'auto',
      padding: '5vh',
      height: '15vh',
    }}
       
        component="img"
        alt="Imagem de Exemplo"
        
        image={Logo}
      />
    
  );
}
