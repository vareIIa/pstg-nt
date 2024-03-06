import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Aluno2 from './screens/site-nota/resultadoCOB';
import Aluno from './screens/site-nota/resultadoPAC';
import Selecionar from './screens/site-nota/selecionar';
import background from '../src/assets/img/capa.svg';
import PDLOGO from '../src/components/PDLOGO';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Navresponsivo from '../src/components/Navresponsivo';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';



import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Rajdhani',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App() {
  
  const [checked, setChecked] = useState(false);
  const [telaSelecionada, setTelaSelecionada] = useState(null);
  const [loading, setLoading] = useState(false);

  const isMobile = useMediaQuery('(max-width:600px)'); 

  const handleSelecionarAluno = (tela) => {
    setLoading(true);
    setTimeout(() => {
      setTelaSelecionada(tela);
      setLoading(false);
    }, 1000);
  };

  const handleVoltarSelecao = () => {
    setLoading(true);
    setTimeout(() => {
      setTelaSelecionada(null);
      setLoading(false);
    }, 1000);
  };
  const [isLoading, setIsLoading] = useState(false);
  return (
    
    <ThemeProvider theme={theme}>
         {loading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
          }}
        >
          <CircularProgress size={100} />
        </Box>
      )}
       
      <div style={{ paddingBottom: '5vh', backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'top', minHeight: '93vh' }}>

        <Navbar />
        <Box style={{ paddingBottom: '3vh', display: 'flex', justifyContent: 'center' }}> <Navresponsivo /></Box>


        <div style={{ display: 'flex', justifyContent: 'center' }}>

        {!isLoading && (
         <Fade in={true}>
  <Box sx={{ width: isMobile ? '100%' : '80%'}}>
    <Card elevation={10} sx={{ display: 'flex', justifyContent: 'center', minHeight: '70vh' }}>
              <CardContent>
                  
                {telaSelecionada === null ? (
                  <>
                    <Selecionar onSelectAluno={() => handleSelecionarAluno('Aluno')} onSelectAluno2={() => handleSelecionarAluno('Aluno2')} />

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop:'5vh' }}><PDLOGO /></div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5vh' }}>

                    <Button  variant="contained" 
                    target="_blank" 
                    onClick={() => handleSelecionarAluno('Aluno')} 
                    style={{ fontFamily: 'Rajdhani', }}>
                                            
                     Ver resultado PAC-MAN
                     </Button>
                      <Button variant="contained" target="_blank" onClick={() => handleSelecionarAluno('Aluno2')} style={{ fontFamily: 'Rajdhani',marginLeft: '10px' }}>
                        Ver resultado COBRINHA
                      </Button>
                    </div>
                    <div style={{ fontFamily: 'Rajdhani',display: 'flex', justifyContent: 'center', marginTop: '4vh' }}>Selecione o desáfio, qualquer dúvida  </div>
                    <div style={{ fontFamily: 'Rajdhani',display: 'flex', justifyContent: 'center'}}><a target="_blank" href='https://ajuda-projetodesenvolve.freshdesk.com/support/login'>clique aqui</a>.</div>
                  </>
                ) : (
                  <>
                    {telaSelecionada === 'Aluno' ? (
                      <Aluno />
                    ) : (
                      <Aluno2 />
                    )}
                    <div style={{ fontFamily: 'Rajdhani',display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                      <Button variant="contained" href='https://avaliacoespd.vercel.app/' >
                        Voltar para a seleção de desáfios
                      </Button>
                    </div>

                  </>
                )}
                
              </CardContent>
              
            </Card>


          </Box>
          </Fade>
          )}            
        </div>

      </div>
      <Footer />
    </ThemeProvider>
    
  );
}

export default App;
