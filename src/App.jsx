// Essa aplicação foi feita com o intuito de armazenar todas as notas dos alunos e mostrar os resultados de cada aluno.
//As notas e todos os alunos você vai encontrar no db.json

// Importações necessárias para o funcionamento da aplicação.
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NavbarResponsivo from "./components/NavResponsivo/NavresponsivoMAIN";

// Importações das telas de resultados.
import AlunoCOB from "./screens/site-nota/resultadoCOB";
import AlunoPAC from "./screens/site-nota/resultadoPAC";
import AlunoWEB from "./screens/site-nota/resultadoWEB";

import Fade from "@mui/material/Fade";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import Logo from "./components/PDLOGO/PDLOGO";

// Importação do JSON para armazenar os dados dos alunos.
import Dados from "../db.json";

const theme = createTheme({
  // o theme é para personalizar o tema da aplicação.

  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
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
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App() {
  // o useState é para armazenar o valor digitado no TextField.
  const [email, setemail] = useState("");
  // o useMediaQuery é para verificar se a tela é mobile ou desktop.
  const isMobile = useMediaQuery("(max-width:800px)");
  // o useState é para armazenar o aluno encontrado.
  const [alunoEncontrado, setAlunoEncontrado] = useState(null);

  // essa função é para redirecionar para a página do aluno
  const history = useHistory();

  // essa função é para redirecionar para a página do "alunoPAC"
  const handleButtonClick = () => {
    if (alunoEncontrado) {
      history.push(`/aluno/${alunoEncontrado.login}`);
    }
  };

  // essa função é para redirecionar para a página do "alunoCOB"
  const handleButtonClick2 = () => {
    if (alunoEncontrado) {
      console.log(alunoEncontrado.login);
      history.push("/AlunoCOB");
    } else {
      console.log("Aluno não encontrado");
    }
  };

  // essa função é para redirecionar para a página do "alunoWEB"
  const handleButtonClick3 = () => {
    if (alunoEncontrado) {
      console.log(alunoEncontrado.login);
      history.push("/AlunoWEB");
    } else {
      console.log("Aluno não encontrado");
    }
  };

  // essa função é para buscar os dados do aluno pelo email via Textfield, usando o JSON para armazenar os dados.
  const buscarDadosPorEMAIL = () => {
    const aluno = Dados.alunos.find((aluno) => aluno.login === email);
    if (aluno) {
      // se o aluno for encontrado, irá mostrar o nome e a nota do aluno no Console da página
      console.log("Nota do aluno:", aluno.nota);
      setAlunoEncontrado(aluno);
      history.push(`/aluno/${aluno.login}`);
    } else {
      console.log("Aluno não encontrado.");
      // se o aluno não for encontrado, irá mostrar "Aluno não encontrado" no Console da página
      setAlunoEncontrado(null);
    }
  };

  return (
    // o themeProvider é para aplicar o mesmo tema em toda a aplicação.
    <ThemeProvider theme={theme}>
      {/* o Router e o Switch são utilizados para transitar entre as 3 telas. */}
      <Router>
        <Switch>
          {/* a rota "/" é a rota principal, onde o usuário irá informar o email para ver os resultados.*/}
          <Route exact path="/">
            <Navbar />

            <Box
              sx={{
                marginTop: "18vh",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <NavbarResponsivo />

              {/* // o NavbarResponsivo é para mostrar o menu responsivo. */}
            </Box>

            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                minHeight: "100vh",
                paddingBottom: "5vh",
              }}
            >
              <Fade in={true}>
                <Box sx={{ width: isMobile ? "100%" : "80%" }}>
                  {/* Esse é o box principal */}
                  <Card
                    elevation={10}
                    sx={{
                      fontFamily: "Rajdhani",
                      marginTop: "2vh",
                      display: "flex",
                      justifyContent: "center",
                      minHeight: "76vh",
                    }}
                  >
                    {/* Card principal e CardContent principal */}
                    <CardContent sx={{ fontFamily: "Rajdhani" }}>
                      <Box sx={{ marginTop: 5 }}>
                        <Box
                          sx={{
                            marginTop: 5,
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Logo />
                          {/* Uso a logo em componente */}
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              marginTop: 5,
                            }}
                          >
                            {/* o TextField é onde o usuário irá informar o email para ver os resultados. */}
                            <p>
                              Informe seu <strong>E-MAIL</strong> para ver todos
                              seus resultados!
                            </p>
                            <TextField
                              id="email"
                              label=""
                              variant="outlined"
                              value={email}
                              // o onChange é para capturar o valor digitado no TextField.
                              onChange={(e) => setemail(e.target.value)}
                              style={{
                                marginRight: 5,
                                minWidth: "300px",
                                padding: 15,
                              }}
                            />

                            {/* // o Link é para redirecionar para a página de ajuda. */}
                            <a
                              style={{ marginTop: 10, marginBottom: 20 }}
                              target="_blank"
                              href="https://ajuda-projetodesenvolve.freshdesk.com/support/login"
                            >
                              Precisa de ajuda ver os resultados?
                            </a>

                            {/* // o Button é para chamar a função buscarDadosPorEMAIL. */}
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() => {
                                buscarDadosPorEMAIL();
                              }}
                              style={{ padding: 15 }}
                            >
                              Procurar
                            </Button>
                          </Box>
                        </Box>

                        <Box>
                          {/* // se o aluno for encontrado, irá mostrar os resultados. */}
                          {alunoEncontrado && (
                            // o Fade é para fazer uma animação de fade in.
                            <Fade in={true}>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  padding: 2,
                                }}
                              >
                                <p>
                                  {/* // se o aluno for encontrado, irá mostrar "Resultados encontrados:". */}
                                  <strong>Resultados encontrados:</strong>
                                </p>
                              </Box>
                            </Fade>
                          )}
                          {/* Abaixo iremos encontrar todos os resultados disponiveis */}
                          {alunoEncontrado && (
                            <Fade in={true}>
                              <Box
                                sx={{
                                  display: "flex",
                                  direction: "row",
                                  minWidth: "500px",

                                  // isMobile eu usei pelo código pra formatar a tela no mobile.
                                  flexDirection: isMobile ? "column" : "auto",
                                  // O Primeiro valor é para o mobile e o segundo para o desktop.
                                  marginLeft: isMobile ? "26%" : "auto",
                                }}
                              >
                                <>
                                  <Card
                                    elevation={10}
                                    sx={{
                                      width: 220,
                                      padding: "2vh",
                                      marginBottom: 2,
                                      marginRight: 3,
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Box sx={{ marginTop: "20px" }}>
                                      {/* // o Card é para mostrar os resultados. */}
                                      <p>
                                        DESAFIO DO<strong> WEB SITE</strong>
                                      </p>
                                      <p>Nome: {alunoEncontrado.nome}</p>
                                      <p>
                                        Nota:{" "}
                                        {/* // se a nota for diferente de 0 e diferente de null, irá mostrar a nota. */}
                                        {alunoEncontrado.notaWEB !== 0 &&
                                        alunoEncontrado.notaWEB ? (
                                          alunoEncontrado.notaWEB
                                        ) : (
                                          // Aqui vamos puxar os dados do nosso arquivo JSON, O db.json

                                          // se a nota for 0 ou não encontrada, irá mostrar "Não encontrada".
                                          <strong>Não encontrada</strong>
                                        )}
                                      </p>

                                      {/* // o Link é para redirecionar para a página do aluno. */}
                                      <Link
                                        to={`/aluno3/${alunoEncontrado.login}`}
                                        style={{ textDecoration: "none" }}
                                      >
                                        {/* // o Button é para chamar a função handleButtonClick3. */}

                                        <Button
                                          variant="contained"
                                          color="primary"
                                          onClick={handleButtonClick3}
                                        >
                                          DETALHES DESAFIO
                                        </Button>

                                        {/* // o Link é para redirecionar para a página do desafio selecionado.*/}
                                      </Link>
                                      <Link
                                        to={`/aluno3/${alunoEncontrado.login}`}
                                        style={{ textDecoration: "none" }}
                                      ></Link>
                                    </Box>
                                  </Card>

                                  <Card
                                    elevation={10}
                                    sx={{
                                      width: 220,
                                      padding: "2vh",
                                      marginBottom: 2,
                                      marginRight: 3,
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Box sx={{ marginTop: "20px" }}>
                                      <p>
                                        DESAFIO DO<strong> PAC MAN</strong>
                                      </p>
                                      <p>Nome: {alunoEncontrado.nome}</p>
                                      <p>
                                        {/* // se a nota for diferente de 0 e diferente de null, irá mostrar a nota. */}
                                        Nota:{" "}
                                        {alunoEncontrado.notaPAC !== 0 &&
                                        alunoEncontrado.notaPAC ? (
                                          alunoEncontrado.notaPAC
                                        ) : (
                                          // se a nota for 0 ou não encontrada, irá mostrar "Não encontrada".

                                          <strong>Não encontrada</strong>
                                        )}
                                      </p>
                                      <Link
                                        // o Link é para redirecionar para a página do aluno.
                                        to={`/aluno/${alunoEncontrado.login}`}
                                        style={{ textDecoration: "none" }}
                                      >
                                        {/* // o Button é para chamar a função handleButtonClick. */}
                                        <Button
                                          variant="contained"
                                          color="primary"
                                          onClick={handleButtonClick}
                                        >
                                          DETALHES DESAFIO
                                        </Button>
                                      </Link>
                                      <Link
                                        to={`/aluno2/${alunoEncontrado.login}`}
                                        style={{ textDecoration: "none" }}
                                      ></Link>
                                      {/* // o Link é para redirecionar para a página do desafio selecionado. */}
                                    </Box>
                                  </Card>

                                  <Card
                                    elevation={10}
                                    sx={{
                                      width: 220,
                                      padding: "2vh",
                                      marginBottom: 2,
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Box sx={{ marginTop: "20px" }}>
                                      <p>
                                        DESAFIO DA <strong>COBRINHA</strong>
                                      </p>
                                      <p>Nome: {alunoEncontrado.nome}</p>
                                      <p>
                                        Nota:{" "}
                                        {/* // se a nota for diferente de 0 e diferente de null, irá mostrar a nota. */}
                                        {alunoEncontrado.notaCOB !== 0 &&
                                        alunoEncontrado.notaCOB ? (
                                          alunoEncontrado.notaCOB
                                        ) : (
                                          <strong>Não encontrada</strong>
                                          // se a nota for 0 ou não encontrada, irá mostrar "Não encontrada".
                                        )}
                                      </p>
                                      <Link
                                        to={`/aluno2/${alunoEncontrado.login}`}
                                        style={{ textDecoration: "none" }}
                                      >
                                        {/* // o Link é para redirecionar para a página do aluno. */}
                                        <Button
                                          variant="contained"
                                          color="primary"
                                          onClick={handleButtonClick2}
                                        >
                                          {/* // o Button é para chamar a função handleButtonClick2. */}
                                          DETALHES DESAFIO
                                        </Button>
                                      </Link>
                                      <Link
                                        to={`/aluno2/${alunoEncontrado.login}`}
                                        style={{ textDecoration: "none" }}
                                      ></Link>
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
          {/* // a rota "/aluno/:email" é a rota para mostrar os resultados do aluno. */}
          <Route path="/aluno/:email" component={AlunoPAC} />
          <Route path="/aluno2/:email" component={AlunoCOB} />
          <Route path="/aluno3/:email" component={AlunoWEB} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
