import React, { useState } from 'react';
import Aluno from './screens/site-nota';
import Login from './screens/site-nota/Login';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontFamily: ['Rajdhani', 'Arial', 'sans-serif'].join(','),
  },
});

const dadosAluno = {};

function App() {
  const [mostrarAluno, setMostrarAluno] = useState(true);

  const toggleTela = () => {
    setMostrarAluno((prev) => !prev);
  };

  const telaAtual = mostrarAluno ? <Aluno {...dadosAluno} /> : <Login />;

  return (
    <ThemeProvider theme={theme}>
      {telaAtual}
      <button onClick={toggleTela}>Trocar de Tela</button>
    </ThemeProvider>
  );
}

export default App;
