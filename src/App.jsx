import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Aluno2 from './screens/site-nota/resultadoCOB';
import Aluno from './screens/site-nota/resultadoPAC';
import Selecionar from './screens/site-nota/selecionar';
import background from '../src/assets/img/capa.svg';
import PDLOGO from '../src/components/PDLOGO';
import Navbar from '../src/components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontFamily: ['Rajdhani', 'Arial', 'sans-serif'].join(','),
  },
});

function App() {
  const [telaSelecionada, setTelaSelecionada] = useState(null);

  const handleSelecionarAluno = (tela) => {
    setTelaSelecionada(tela);
  };

  const handleVoltarSelecao = () => {
    setTelaSelecionada(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />

        <div style={{ flex: 1 }}>
          {telaSelecionada === null ? (
            <>
              <Selecionar onSelectAluno={() => handleSelecionarAluno('Aluno')} onSelectAluno2={() => handleSelecionarAluno('Aluno2')} />
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button variant="contained" onClick={() => handleSelecionarAluno('Aluno')}>
                  Ver resultado PAC
                </Button>
                <Button variant="contained" onClick={() => handleSelecionarAluno('Aluno2')} style={{ marginLeft: '10px' }}>
                  Ver resultado COB
                </Button>
              </div>
            </>
          ) : (
            <>
              {telaSelecionada === 'Aluno' ? (
                <Aluno />
              ) : (
                <Aluno2 />
              )}
              <Button variant="contained" onClick={handleVoltarSelecao} style={{ marginTop: '20px' }}>
                Voltar para a seleção
              </Button>
            </>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
