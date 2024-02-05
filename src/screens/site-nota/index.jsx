import React from 'react';
import { Box, Card, Paper, useMediaQuery, useTheme, Grid } from '@mui/material';
import background from '../../assets/img/capa.svg';
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
        backgroundSize: 'cover',
        backgroundPosition: 'botton',
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
          width: isSmallScreen ? '100vw' : '70vw',
        }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sx={{ width: 'auto' }}>
            <Paper
              elevation={3}
              sx={{
                width: '60vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundSize: '30vw',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                paddingBottom: '5vw',
                paddingTop:'1vw',
              }}
            >
              <PDLOGO />
              <Box sx={{ maxWidth: 'auto', marginBottom: '5vh', marginTop: '2vh' }}>
                <Sobre />
              </Box>
              
                <h4>Cada critério foi avaliado em 2 PONTOS, a soma de cada critério gerou a sua nota total.</h4>
              
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
  <Box elevation={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <Box>
      <h4 style={{ fontFamily: 'Rajdhani' }}>Encontre sua nota:</h4>
      <PesquisarO />
    </Box>
  </Box>
</Grid>
          <Grid item xs={12} sx={{ maxWidth: '95vw', marginBottom: '5vh', marginTop: '2vh' }}>
            {isSmallScreen ? null : <Tabela />}
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: '8vh' }} />
        </Grid>
      </Card>
      <Footer/>
    </Box>
  );
};

export default Aluno;
