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
  const [data, setData] = useState(null); 
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    setChecked(true);

 
    fetch('https://api.github.com/gists/ad98f88cd7dff2855868c54065b5ccbe')
      .then(response => response.json())
      .then(gist => {
        const file = gist.files[Object.keys(gist.files)[0]];
        const data = JSON.parse(file.content);
        setData(data);
      })  
      .catch(error => console.error('Error:', error));
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
        <Grid item xs={12} md={6}>
  <Box elevation={2} sx={{ 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    pt: 0
  }}>
    {isMobile && <PesquisarO />}
  </Box>
</Grid>
        <Grid item xs={12} sx={{ minHeight:'90vh',maxWidth: isSmallScreen ? '90vw' : 'auto' }}>
          {isSmallScreen ? null : <Tabela />}
        </Grid>
      
    </Box>
    </Fade>
  );
};

export default Aluno;