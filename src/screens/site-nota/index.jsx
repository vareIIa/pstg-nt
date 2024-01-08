import React from 'react';
import { Box, Card, Paper, useMediaQuery, useTheme } from '@mui/material';
import background from '../../assets/img/background.svg';
import Navegador from '../../components/Navegador';
import Tabela from '../../components/Tabela';
import PesquisarO from '../../components/PesquisarO';
import Sobre from '../../components/Sobre';
import PDLOGO from '../../components/PDLOGO';
import Footer from '../../components/Footer';

const Aluno = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        elevation: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: '',
        overflow: 'auto',
        maxHeight: '2a50vh'


      }}
    >
      <Card
        sx={{
          display: 'flex',
          padding: '10px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'white',
          width: isSmallScreen ? '190%' : 'auto',

        }}
      >
        <Navegador />
        <Box
          sx={{
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'white',
            width: '100%',
            
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: '90%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'auto',
              maxHeight: '150vh',
              textAlign:'center',
              
            }}
          >
            <PDLOGO />
            <Sobre />

                <Box sx={{marginBottom:'80px'}}>
                <PesquisarO/>
                </Box>

                <Tabela />
                <Footer />
       
          </Paper>
        </Box>
      </Card>
    </Box>
  );
};

export default Aluno;
