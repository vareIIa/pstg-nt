import React from 'react'
import Aluno from './screens/site-nota' 
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontFamily: [
      'Rajdhani',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});

const dadosAluno = {
  nome: 'Bernardo Amaral',
  cargo: 'Time de Desenvolvimento Interno',
  email: 'bernardoamaral@projetodesenvolve.com.br',
  foto: 'https://i.pravatar.cc/300'
}

function App() {

  return (
    <ThemeProvider theme={theme}> 
      <Aluno {...dadosAluno}/>
    </ThemeProvider>
  )
}

export default App
