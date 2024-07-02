// Essa aplicação foi feita com o intuito de armazenar todas as notas dos alunos e mostrar os resultados de cada aluno.
//As notas e todos os alunos você vai encontrar no db.json

// Importações necessárias para o funcionamento da aplicação.
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BuscarEmail from "./components/BuscarEmail/BuscaEmail";
import Login from "./components/Login/Login";
import Validacao from "./components/Login/Validacao";
import Fade from "@mui/material/Fade";
import Skeleton from '@mui/material/Skeleton';
import { CardContent, createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import Logo from "./components/PDLOGO/PDLOGO";
const theme = createTheme({
  // o theme é para personalizar o tema da aplicação.

  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#a77fd9",
    },
    terciary: {
      main: "	#B0E0E6",
    },
    quart: {
      main: "	#00FF7F",
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Rajdhani",
    fontSize: 15,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});


function App() {
  // o useMediaQuery é para verificar se a tela é mobile ou desktop.
  const isMobile = useMediaQuery("(max-width:800px)");

  return (
    // o themeProvider é para aplicar o mesmo tema em toda a aplicação.
    <ThemeProvider theme={theme}>
      {/* o Router e o Switch são utilizados para transitar entre as 3 telas. */}

            <Navbar />

            <Box
              sx={{
                marginTop: "15vh",
                marginBottom: "2vh",
                display: "flex",
                justifyContent: "center",
                minHeight: "5vh",
              }}
            >

            </Box>

            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "10vh",
              }}
            >
              <Fade in={true}>
                <Box sx={{ minWidth: isMobile ? "100%" : "40vw" }}>
                  <Card elevation={20} style={{ position: 'relative', display: 'flex', justifyContent: 'center', height: 'auto', marginBottom: 80, minWidth: '80vw', backgroundColor: 'white' }}>
                    <CardContent>
                    
                    <Box style={{display: "flex", flexDirection: "column", alignItems: 'center' }}>
                    <Logo/>
                    <Box sx={{marginTop: 3}}>
                    <p style={{fontFamily: "Rajdhani"}}>Busque o <strong>E-MAIL</strong> do aluno para postar e editar notas.</p>
                    </Box>
                   
                    
                    
                    </Box>

                    <Box sx={{marginTop: 0.5, marginBottom: 4}}>

                    <Validacao /> 


                    </Box>


                    </CardContent>
                  </Card>
                </Box>
              </Fade>
            </Box>

            <Footer />

    </ThemeProvider>
  );
}

export default App;
