import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Logo from '../../assets/img/logo-hori.png';

export default function PDLOGO() {
  return (
    
      <CardMedia
      sx={{ width: 'auto',
      padding: '5vh',
      maxHeight: '5vh',
      
    }}
       
        component="img"
        alt="Imagem de Exemplo"
        
        image={Logo}
      />
      
    
  );
}
