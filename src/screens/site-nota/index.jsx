import React from 'react';
import { Box, Card, Paper, useMediaQuery, useTheme } from '@mui/material';
import background from '../../assets/img/background.svg';
import Navegador from '../../components/Navegador';
import Tabela from '../../components/Tabela';
import PesquisarO from '../../components/PesquisarO';
import Sobre from '../../components/Sobre';
import PDLOGO from '../../components/PDLOGO';
import LOGOCINZA from '../../assets/img/logo-cinza.png';

const Aluno = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        elevation: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'no-repeat',


      }}
    >
      <Card
        sx={{
          display: 'flex',
          padding: '10px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'white',
          width: isSmallScreen ? '120%' : 'auto',

        }}
      >
        <Navegador />
        <Box
          sx={{
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'white',
            width: '100%',
            
          }}
        >
<Paper
  elevation={3}
  sx={{

    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    backgroundSize: '300px',
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',

  }}
>
  <PDLOGO />
  <Box sx={{maxWidth:'60%', marginBottom:'50px', marginTop:'20px'}}>
    <Sobre />
  </Box>
  <Paper sx={{fontFamily:'Arial', width:'350px', marginBottom:'50px', }}>
  <h4 >Cada critério foi avaliado em 2 PONTOS, a soma de cada critério gerou a sua notal total.</h4>
  </Paper>
  <Paper elevation={2} sx={{ width:'500px', marginBottom:'50px', }}>
    <Box sx={{marginBottom:'80px', marginTop:'50px'}}>
      <h4 style={{fontFamily:'Arial',}}>Encontre sua nota:</h4>
      <PesquisarO/>
      
    </Box>
  </Paper>
  <h3 style={{fontFamily:'sans-serif',}}>O que é "PREMIAÇÃO"?</h3>
  <Paper sx={{ width:'350px', marginBottom:'50px', fontFamily:'Arial', }}>
  <h5>A premiação será ser distribuída conforme a nota do Aluno(a), os pontos recebidos através da PREMIAÇÃO serão adicionados a sua plataforma para resgatar recompensas! </h5>
  </Paper>
  {isSmallScreen ? null : <Tabela />}

  <Box sx={{marginBottom:'80px'}}>
  </Box>

</Paper>
        </Box>
      </Card>
    </Box>
  );
};

export default Aluno;