import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery, useTheme, Grid, Fade, CircularProgress, Typography } from '@mui/material';
import TabelaAluno from '../../components/Tabela/TabelaData'; // Renomeado para evitar conflitos
import PesquisarO from '../../components/Pesquisar/PesquisarO';
import Sobre from '../../components/Sobre/Sobre';
import PDLOGO from '../../components/PDLOGO/PDLOGO3';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';

const Aluno = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery('(max-width:600px)');
  const [alunoData, setAlunoData] = useState(null); // Renomeado para evitar conflitos
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://gist.githubusercontent.com/vareIIa/ad98f88cd7dff2855868c54065b5ccbe/raw/adf5e3881f0aa884730df4d9cb013e34204444bf/Tabela');
        const textData = await response.text();
        console.log(textData); // Verifique os dados no console
        setAlunoData(textData); // Atualizado para refletir o novo nome do estado
        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar os dados.');
        setLoading(false);
        console.error('Error fetching data: ', error);
      }
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
            <Box>
              {/* Renderize a tabela aqui */}
              <TabelaAluno data={alunoData} /> {/* Atualizado para refletir o novo nome do componente */}
            </Box>
          )}
        </Grid>
      </Box>
    </Fade>
  );
};

export default Aluno;
