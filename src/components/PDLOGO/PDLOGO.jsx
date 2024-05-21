import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Logo from '../../assets/img/logorgb.png';

export default function PDLOGO() {
  return (
    
      <CardMedia
      sx={{ maxWidth: 180, maxHeight: 180, marginTop: '3vh'
      
    }}
       
        component="img"
        image={Logo}
      />
      
    
  );
}
