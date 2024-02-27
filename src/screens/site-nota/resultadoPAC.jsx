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
        maxWidth: 'auto',
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
          maxWidth: '180vh',
          display: 'flex',
          padding: '2vw',
          marginBottom: '5vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'white',
          
        }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >

            
              <PDLOGO />
              <Box sx={{ paddingTop:'0vh', paddingBottom: '0vh',   marginTop: '5vh' }}>
                <Sobre />
              </Box>
              
              
            

          <Grid item xs={12} md={6}>
  <Box elevation={2} sx={{margintop:'',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <Box>

      <PesquisarO />
    </Box>
  </Box>
</Grid>
          <Grid item xs={12} sx={{ maxWidth: '95vw', marginBottom: '5vh', marginTop: '0vh' }}>
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
