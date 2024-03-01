import React from 'react';
import { Box, Card, Paper, useMediaQuery, useTheme, Grid } from '@mui/material';
import Tabela from '../../components/TabelaCOBRA';
import PesquisarO from '../../components/Pesquisar';
import Sobre from '../../components/Sobre';
import PDLOGO from '../../components/PDLOGO3';
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
          maxWidth: '180vh',
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

            
              <PDLOGO />

                <Sobre />

              
              
            

          <Grid item xs={12} md={6}>
  <Box elevation={2} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <Box>

      <PesquisarO />
    </Box>
  </Box>
</Grid>
          <Grid item xs={12} sx={{ maxWidth: '95vw' }}>
            {isSmallScreen ? null : <Tabela />}
          </Grid>
          <Grid item xs={12} sx={{}} />
        </Grid>
      </Card>
    </Box>
  );
};

export default Aluno;
