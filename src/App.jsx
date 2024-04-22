import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory, Redirect } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NavbarResponsivo from './components/NavResponsivo/NavresponsivoMAIN';

import AlunoCOB from './screens/site-nota/resultadoCOB';
import AlunoPAC from './screens/site-nota/resultadoPAC';

import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import Logo from './components/PDLOGO/PDLOGO';
import Dados from '../db.json';

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
  const [nomeAluno, setNomeAluno] = useState('');
  const isMobile = useMediaQuery('(max-width:800px)');
  const [alunoEncontrado, setAlunoEncontrado] = useState(null); 
  
  const history = useHistory(); 
  const handleButtonClick = () => {
    if (alunoEncontrado) {
      history.push(`/aluno/${alunoEncontrado.login}`);
    }
  };
  const handleButtonClick2 = () => {
    if (alunoEncontrado) {
      console.log(alunoEncontrado.login);
      history.push('/AlunoCOB');
    } else {
      console.log('Aluno não encontrado');
    }
  };

  const buscarDadosPorCPF = () => {

    const aluno = Dados.alunos.find((aluno) => aluno.login === cpf);
    if (aluno) {
      console.log('Nota do aluno:', aluno.nota);
      setAlunoEncontrado(aluno); 
      history.push(`/aluno/${aluno.login}`); 

    } else {

      console.log('Aluno não encontrado.');
      setAlunoEncontrado(null);
    }
  };

  return (

    <ThemeProvider theme={theme}>
      <Router>
      <Switch>
          <Route exact path="/">
          {loading && (
            <Box
              sx={{
                fontFamily: 'Rajdhani',
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

          <Box sx={{marginTop:'15vh', display: 'flex', justifyContent: 'center'}}>
          <NavbarResponsivo />
          </Box>

          <Box style={{ display: 'flex', justifyContent: 'center', minHeight:'100vh' }}>
            <Fade in={true}>
              <Box sx={{ width: isMobile ? '100%' : '70%' }}>
              <Card elevation={10} sx={{ fontFamily: 'Rajdhani', marginBottom: '8vh', marginTop: '2vh', display: 'flex', justifyContent: 'center', minHeight: '90vh'}}>
                  <CardContent sx={{ fontFamily: 'Rajdhani' }}>
                    
                    <Box sx={{marginTop: 5}}>
                      
                      <Box sx={{marginTop: 5, display: 'flex', justifyContent:'center'}}>
                      <Logo/>
                      </Box>
                    

                      <Box sx={{display: 'flex',   justifyContent:'center'}} >
                        <Box sx={{display: 'flex',   justifyContent:'center'}}>
                          <p>Informe seu <strong>E-MAIL</strong> para ver todos seus resultados!</p>
                        
                      
                      <TextField
                        id="cpf"
                        label=""
                        variant="outlined"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        style={{ marginRight: 5,minWidth: '450px', paddingLeft: 50}}
                      />
                      
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          buscarDadosPorCPF();
                        }}
                        style={{ padding: 15}}
                      >
                        Procurar
                      </Button>
                      </Box>
                      </Box>
                    
                   
<Box>
  {alunoEncontrado && (

  <Fade in={true}>
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
      <p><strong>Resultados encontrados:</strong></p>
    </Box>
  </Fade>
)}

{alunoEncontrado && (


  <Fade in={true}>


    <Box sx={{ display: 'flex', direction: 'row', minWidth: '500px', paddingLeft: 5 }}>
      <>



        <Card elevation={10} sx={{ width: 220, padding: '2vh', marginBottom: 2, marginRight: 3 }}>
          <Box sx={{ marginTop: '20px' }}>
            <p>DESAFIO DO<strong> WEB SITE</strong></p>
            <p>Nome: {alunoEncontrado.nome}</p>
            <p>Nota: {alunoEncontrado.nota3 !== 0 && alunoEncontrado.nota3 ? alunoEncontrado.nota3 : <strong>Não encontrada</strong> }</p>
            <Link to={`/aluno/${alunoEncontrado.login}`} style={{ textDecoration: 'none' }}>
              <Button 
              variant="contained" 
              color="primary"
              onClick={handleButtonClick}>
                DETALHES DESAFIO
              </Button>
            </Link>
            <Link to={`/aluno2/${alunoEncontrado.login}`} style={{ textDecoration: 'none' }}>
            </Link>
          </Box>
        </Card>

        <Card elevation={10} sx={{ width: 220, padding: '2vh', marginBottom: 2, marginRight: 3 }}>
          <Box sx={{ marginTop: '20px' }}>
            <p>DESAFIO DO<strong> PAC MAN</strong></p>
            <p>Nome: {alunoEncontrado.nome}</p>
            <p>Nota: {alunoEncontrado.nota !== 0 && alunoEncontrado.nota ? alunoEncontrado.nota : <strong>Não encontrada</strong> }</p>
            <Link to={`/aluno/${alunoEncontrado.login}`} style={{ textDecoration: 'none' }}>
              <Button 
              variant="contained" 
              color="primary"
              onClick={handleButtonClick}>
                DETALHES DESAFIO
              </Button>
            </Link>
            <Link to={`/aluno2/${alunoEncontrado.login}`} style={{ textDecoration: 'none' }}>
            </Link>
          </Box>
        </Card>

        <Card elevation={10} sx={{ width: 220, padding: '2vh', marginBottom: 2 }}>
          <Box sx={{ marginTop: '20px' }}>
            <p>DESAFIO DA <strong>COBRINHA</strong></p>
            <p>Nome: {alunoEncontrado.nome}</p>
            <p>Nota: {alunoEncontrado.nota2 !== 0 && alunoEncontrado.nota2 ? alunoEncontrado.nota2 : <strong>Não encontrada</strong>}</p>
            <Link to={`/aluno2/${alunoEncontrado.login}`} style={{ textDecoration: 'none' }}>
  <Button 
    variant="contained" 
    color="primary"
    onClick={handleButtonClick2}>
    DETALHES DESAFIO
  </Button>
</Link>
            <Link to={`/aluno2/${alunoEncontrado.login}`} style={{ textDecoration: 'none' }}>
            </Link>
          </Box>
        </Card>
      </>


    </Box>
  </Fade>
)}
</Box>

                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Fade>
           
          </Box>

          <Footer />

          </Route>
          <Route path="/aluno/:cpf" component={AlunoPAC} />
          <Route path="/aluno2/:cpf" component={AlunoCOB} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
