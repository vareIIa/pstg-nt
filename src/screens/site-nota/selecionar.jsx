import React from 'react';
import { Box, Card, Grid, Button } from '@mui/material';
import background from '../../assets/img/capa.svg';
import PDLOGO from '../../components/PDLOGO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'



const Aluno = () => {


  return (
    <Box
      sx={{
        overflow: 'hidden',
        elevation: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        
      }}
    >

      
    </Box>
    
  );
};

export default Aluno;
