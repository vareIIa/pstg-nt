import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import PDLOGO from './components/PDLOGO/LOGO';
import Logo from './components/PDLOGO/PDLOGO';

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
  

  const [loading, setLoading] = useState(false);
  const [cpf, setCpf] = useState('');
  const isMobile = useMediaQuery('(max-width:800px)'); 
  const [isLoading] = useState(false);

  return (

    <Box sx={{backgroundColor:'white', border:'none'}}>

    <ThemeProvider theme={theme}>
         {loading && (
        <Box
          sx={{
            fontFamily: "Rajdhani",
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
       
      

        <Navbar />


        <Box style={{ display: 'flex', justifyContent: 'center', marginTop:'15vh' }}>

         {!isLoading && (
         <Fade in={true}>
         <Box sx={{ width: isMobile ? '100%' : '80%'}}>
   
          <Card elevation={10} sx={{ border: 'none', marginBottom:'8vh',marginTop:'2vh',display: 'flex', justifyContent: 'center', minHeight: '70vh' }}>
              
              <CardContent sx={{fontFamily:'Rajdhani'}}>
                <Box sx={{maxWidth: 350}}>


                <Box sx={{marginBottom:'5vh', marginTop:'5vh'}}>
                <Logo />
                </Box>

              <p>Informe seu CPF para encontrar seus resultados</p>
              <Box sx={{display: 'flex', justifyContent: 'center'}}>
    
              <TextField
            id="cpf"
            label="CPF"
            variant="outlined"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            style={{ marginRight: '10px', minWidth: '220px'}}
        />
        <Button
            variant="contained"
            color="primary"
            onClick={() => {
                console.log('Procurando CPF:', cpf);
            }}
        >
            Procurar
        </Button>
        </Box>
        </Box>
              </CardContent>
              
            </Card>


          </Box>
          </Fade>
          )}            
        

      </Box>
     
      <Footer /> 
    </ThemeProvider>

    </Box>
  );
}

export default App;
