import React from 'react';
import { Box, Card, Paper, useMediaQuery, useTheme, Grid } from '@mui/material';
import TabelaCOBRA from '../../components/TabelaCOBRA';
import Pesquisar from '../../components/Pesquisar';
import Sobre from '../../components/Sobre';
import PDLOGO from '../../components/PDLOGO';
import Navbar from '../../components/Navbar';



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

        
      }}
    >
      <Navbar />
      <Card
        sx={{
          display: 'flex',

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
          <Grid item xs={12} sx={{ width: 'auto' }}>
            <Paper
              elevation={3}
              sx={{
                width: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                minWidth:'50vw',
                backgroundSize: '30vw',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',

              }}
            >
              <PDLOGO />
              <Box sx={{ maxWidth: 'auto', marginBottom: '5vh', marginTop: '2vh' }}>
                <Sobre />
              </Box>
              
              
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
  <Box elevation={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <Box>
      <h4 style={{ fontFamily: 'Rajdhani' }}>Encontre sua nota:</h4>
      <Pesquisar />
    </Box>
  </Box>
</Grid>
          <Grid item xs={12} sx={{ maxWidth: '95vw' }}>
            {isSmallScreen ? null : <TabelaCOBRA />}
          </Grid>
          <Grid item xs={12} />
        </Grid>
      </Card>

    </Box>
  );
};

export default Aluno;