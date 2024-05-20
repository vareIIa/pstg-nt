// Essa aplicação foi feita com o intuito de armazenar todas as notas dos alunos e mostrar os resultados de cada aluno.
//As notas e todos os alunos você vai encontrar no db.json

// Importações necessárias para o funcionamento da aplicação.
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BuscarEmail from "./components/BuscarEmail/BuscaEmail";
import Login from "./components/Login/Login";
import Validacao from "./components/Login/Validacao";
import Fade from "@mui/material/Fade";
import { CardContent, createTheme, ThemeProvider, useMediaQuery } from "@mui/material";

const theme = createTheme({
  // o theme é para personalizar o tema da aplicação.

  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#000000",
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
    fontSize: 14,
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
                marginTop: "12vh",
                marginBottom: "2vh",
                display: "flex",
                justifyContent: "center",
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
                <Box sx={{ width: isMobile ? "100%" : "60%", marginTop:"5vh" }}>
                  {/* Esse é o box principal */}
                  <Card style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', backgroundColor:"WhiteSmoke" }}>
                    <CardContent>
                    <Box>
                    <Button color="secondary" variant="outlined" style={{ position: 'absolute', top: '10px', right: '10px' }}>ALTERAR NOTAS</Button>
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
