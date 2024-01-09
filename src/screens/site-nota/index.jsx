import React from 'react';
import { Box, Card, Paper, useMediaQuery, useTheme } from '@mui/material';
import background from '../../assets/img/background.svg';
import Navegador from '../../components/Navegador';
import Tabela from '../../components/Tabela';
import PesquisarO from '../../components/PesquisarO';
import Sobre from '../../components/Sobre';
import PDLOGO from '../../components/PDLOGO';


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
              textAlign:'center',
              
            }}
          >
            <PDLOGO />
            <Box sx={{maxWidth:'60%', marginBottom:'50px', marginTop:'20px'}}>
            <Sobre />
            </Box>


                <Paper elevation={2} sx={{ width:'500px', marginBottom:'50px',}}>
                <Box sx={{marginBottom:'80px', marginTop:'50px'}}>
                  <h4 style={{fontFamily:'sans-serif',}}>Encontre sua nota:</h4>
                <PesquisarO/>
                </Box>
                </Paper>






                <Tabela />
                <Box sx={{marginBottom:'80px'}}>
                </Box>
       
          </Paper>
        </Box>
      </Card>
    </Box>
  );
};

export default Aluno;