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
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App() {
  const [telaSelecionada, setTelaSelecionada] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)'); 

  const handleSelecionarAluno = (tela) => {
    setTelaSelecionada(tela);
  };

  const handleVoltarSelecao = () => {
    setTelaSelecionada(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ paddingBottom: '5vh', backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'bottom', minHeight: '93vh' }}>

        <Navbar />
        <Box style={{ paddingBottom: '3vh', display: 'flex', justifyContent: 'center' }}> <Navresponsivo /></Box>


        <div style={{ display: 'flex', justifyContent: 'center' }}>

          <Box sx={{ width: isMobile ? '100%' : 1400}}>
            <Card elevation={10} sx={{ display: 'flex', justifyContent: 'center', minHeight: '60vh' }}>
              <CardContent>
                  
                {telaSelecionada === null ? (
                  <>
                    <Selecionar onSelectAluno={() => handleSelecionarAluno('Aluno')} onSelectAluno2={() => handleSelecionarAluno('Aluno2')} />

                    <div style={{ display: 'flex', justifyContent: 'center' }}><PDLOGO /></div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>

                      <Button variant="contained" target="_blank" onClick={() => handleSelecionarAluno('Aluno')}>
                        Ver resultado PAC-MAN
                      </Button>
                      <Button variant="contained" target="_blank" onClick={() => handleSelecionarAluno('Aluno2')} style={{ marginLeft: '10px' }}>
                        Ver resultado COBRINHA
                      </Button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4vh' }}>Selecione o desáfio, qualquer dúvida  </div>
                    <div style={{ display: 'flex', justifyContent: 'center'}}><a target="_blank" href='https://ajuda-projetodesenvolve.freshdesk.com/support/login'>clique aqui</a>.</div>
                  </>
                ) : (
                  <>
                    {telaSelecionada === 'Aluno' ? (
                      <Aluno />
                    ) : (
                      <Aluno2 />
                    )}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                      <Button variant="contained" target="_blank" onClick={handleVoltarSelecao} >
                        Voltar para a seleção de desáfios
                      </Button>
                    </div>

                  </>
                )}
              </CardContent>
            </Card>

          </Box>

        </div>

      </div>
      <Footer />
    </ThemeProvider>

  );
}

export default App;
