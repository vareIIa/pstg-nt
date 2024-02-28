import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Logo from '../assets/img/logo-hori.png';

export default function PDLOGO() {
  return (
    
      <CardMedia
      sx={{ 

        width: 'auto',
        padding: '5vh',
        height: '25vh',
    }}
       
        component="img"
        alt="Imagem de Exemplo"
        
        image={Logo}
      />
    
  );
}
