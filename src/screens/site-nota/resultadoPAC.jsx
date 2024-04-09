import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery, useTheme, Grid, Fade, CircularProgress, Typography, Card, CardContent } from '@mui/material';
import Tabela from '../../components/Tabela/Tabela';
import PesquisarO from '../../components/Pesquisar/PesquisarO';
import Sobre from '../../components/Sobre/Sobre';
import PDLOGO from '../../components/PDLOGO/PDLOGO3';
import Navbar from '../../components/Navbar/Navbar';
import NavResponsivo from '../../components/NavResponsivo/Navresponsivo';
import Footer from '../../components/Footer/Footer';

const Aluno = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery('(max-width:600px)');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

  }, []);

  return (
    
    <><Card elevation={10}>
      <CardContent>
        <Fade in={true} style={{ transitionDelay: '500ms' }}>
          <Box
            sx={{
              marginTop: theme.spacing(13),
              maxWidth: isSmallScreen ? '100%' : 'auto',
              overflow: 'hidden',
              elevation: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: isSmallScreen ? '10px' : '10px',
            }}
          >
            <Navbar />
            <NavResponsivo />
            <Fade>

              <PDLOGO />
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
                {/* Verifica se é tela móvel para renderizar ou não o componente PesquisarO */}
                {isMobile && <PesquisarO />}
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ minHeight: '5vh', maxWidth: isSmallScreen ? '90vw' : 'auto' }}>
              {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center">
                  <CircularProgress />
                </Box>
              ) : error ? (
                <Typography variant="body1" color="error">{error}</Typography>
              ) : (
                <Box>
                  {/* Verifica se é tela móvel para renderizar ou não a tabela */}
                  {!isMobile && <Tabela data={data} />}
                </Box>
              )}
            </Grid>
          </Box>
        </Fade>
      </CardContent>

    </Card>
    
    <Footer/>
    
    </>
  );
};

export default Aluno;
