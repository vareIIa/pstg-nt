import React from 'react';
import { Box, Card, Paper, useMediaQuery, useTheme, Grid } from '@mui/material';
import background from '../../assets/img/background.svg';
import Tabela from '../../components/Tabela';
import PesquisarO from '../../components/PesquisarO';
import Sobre from '../../components/Sobre';
import PDLOGO from '../../components/PDLOGO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'

const Aluno = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
        backgroundSize: 'top',
        backgroundPosition: 'top',
      }}
    >
      <Navbar />
      <Card
        sx={{
          display: 'flex',
          padding: '2vw',
          marginBottom: '5vw',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'white',
          width: isSmallScreen ? '90vw' : '80vw',
        }}
      >
        <Box
          sx={{
            padding: '2vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'auto',
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              backgroundSize: '30vw',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <PDLOGO />
            <Box sx={{ maxWidth: 'auto', marginBottom: '5vh', marginTop: '2vh' }}>
              <Sobre />
            </Box>
            <Paper sx={{ fontFamily: 'Arial', maxWidth: '90vw', marginBottom: '5vh' }}>
              <h4>Cada critério foi avaliado em 2 PONTOS, a soma de cada critério gerou a sua nota total.</h4>
            </Paper>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box elevation={2} sx={{ width: '50vw', marginBottom: '5vh' }}>
                  <Box>
                    <h4 style={{ fontFamily: 'Arial' }}>Encontre sua nota:</h4>
                    <PesquisarO />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ width: '30vw', marginBottom: '5vh' }}>
                  <h3 style={{ fontFamily: 'sans-serif' }}>O que é "PREMIAÇÃO"?</h3>
                  <h5 style={{ fontFamily: 'sans-serif' }}>A premiação será distribuída conforme a nota do Aluno(a), os pontos recebidos através da PREMIAÇÃO serão adicionados a sua plataforma para resgatar recompensas!</h5>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
          <Box sx={{ maxWidth: '95vw', marginBottom: '5vh', marginTop: '2vh' }}>
            {isSmallScreen ? null : <Tabela />}
          </Box>
          <Box sx={{ marginBottom: '8vh' }} />
        </Box>
      </Card>
      <Footer/>
    </Box>
  );
};

export default Aluno;
