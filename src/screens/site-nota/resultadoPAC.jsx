import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery, useTheme, Grid, Fade, CircularProgress, Typography } from '@mui/material';
import Tabela from '../../components/Tabela';
import PesquisarO from '../../components/PesquisarO';
import Sobre from '../../components/Sobre';
import PDLOGO from '../../components/PDLOGO3';
import Navbar from '../../components/Navbar';
import DataAlunos from '../../components/DataAluno';
import axios from 'axios';

const Aluno = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery('(max-width:600px)');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://gist.githubusercontent.com/vareIIa/ad98f88cd7dff2855868c54065b5ccbe/raw/adf5e3881f0aa884730df4d9cb013e34204444bf/Tabela');
        setData(response.data ? response.data.alunos : null);
      } catch (error) {
        setError('Erro ao carregar os dados. Tente novamente mais tarde.');
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Fade in={true} style={{ transitionDelay: '500ms' }}>
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
        <Grid item xs={12} sx={{ minHeight:'5vh',maxWidth: isSmallScreen ? '90vw' : 'auto' }}>
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress />
            </Box>
          ) : error ? (
            <Typography variant="body1" color="error">{error}</Typography>
          ) : (
            <Tabela data={data} />
          )}
        </Grid>
      </Box>
    </Fade>
  );
};

export default Aluno;
