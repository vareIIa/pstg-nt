import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery, useTheme, Grid, Zoom } from '@mui/material';
import Tabela from '../../components/Tabela';
import PesquisarO from '../../components/PesquisarO';
import Sobre from '../../components/Sobre';
import Fade from '@mui/material/Fade';
import PDLOGO from '../../components/PDLOGO3';
import Navbar from '../../components/Navbar';

const Aluno = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
 

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Fade in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
      <Box
        sx={{
          maxWidth: isSmallScreen ? '100%' : 'auto',
          overflow: 'hidden',
          elevation: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: theme.spacing(2),
          fontSize: isSmallScreen ? '10px' : '10px',
        }}
      >
        <Navbar />
        <Fade>
        <PDLOGO/>
        </Fade>
        <Sobre />
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box elevation={2} sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            pt: 0
          }}>
            <PesquisarO />
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ maxWidth: isSmallScreen ? '90vw' : 'auto' }}>
          {isSmallScreen ? null : <Tabela />}
        </Grid>
      </Grid>
    </Box>
    </Fade>
  );
};

export default Aluno;