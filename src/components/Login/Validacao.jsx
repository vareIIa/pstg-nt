import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import Card from "@mui/material/Card";
import Logo from "../PDLOGO/LOGOcities";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";
import { useMediaQuery } from "@mui/material";
import Backbutton from "../Login/Button.png";

const App = () => {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [finalGrade, setfinalGrade] = useState("");
  const [email, setEmail] = useState("");
  const [challenge, setChallenge] = useState("");
  const [presence, setPresence] = useState("");
  const [notas, setNotas] = useState([]);
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [buttonText, setButtonText] = useState("Buscar");
  const [enrolledId, setEnrolledId] = useState(null);
  const [comentario, setComentario] = useState("");
  const isMobile = useMediaQuery("(max-width:800px)");
  const [fade, setFade] = useState({});
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [status, setStatus] = useState("");

  const clearFields = () => {
    setChallenge("");
    setComentario("");
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://form.pdinfinita.com.br/enrolled/email/${email}`,
        {
          headers: {
            "API-KEY":
              "Rm9ybUFwaUZlaXRhUGVsb0plYW5QaWVycmVQYXJhYURlc2Vudm9sdmU=",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Deu erro :( código do erro: ${response.status}`);
      }

      const data = await response.json();
      setNomeCompleto(data.nomeCompleto);
      setStatus(data.status);
      setEnrolledId(data.enrolledId);

      console.log(data);

      setSearchResult(data);
      setSnackbarMessage("Aluno encontrado!");
      setSeverity("success");
      setOpen(true);
    } catch (error) {
      console.error(error);
      setSnackbarMessage("Aluno não encontrado!");
      setSeverity("error");
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
    setOpenError(false);
    setOpen(false);
    setButtonText("Nova busca");
  };

  const challengeMap = {
    1: "Python",
    2: "Linux",
    3: "IntroWeb",
    4: "NoCode",
    5: "Scratch",
    6: "ElementosDeInterface",
    7: "Projetos",
  };

  const handleChange = (event) => {
    setChallenge(event.target.value);
  };

  const handleSubmitGrade = async (event) => {
    event.preventDefault();

    let operationSuccessful = false;

    try {
      if (!searchResult || !searchResult.id) {
        console.error("searchResult or searchResult.id is undefined");
        return;
      }

      const enrolledId = searchResult.id;
      const challengeEnum = challengeMap[challenge];

      const response = await fetch("https://form.pdinfinita.com.br/grade/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-KEY": "Rm9ybUFwaUZlaXRhUGVsb0plYW5QaWVycmVQYXJhYURlc2Vudm9sdmU=",
        },
        body: JSON.stringify({
          gradeOf: challengeEnum,
          enrolledId: enrolledId,
          finalGrade: parseFloat(finalGrade),
          presence: parseFloat(presence),
          comment: comment || null,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar a nota: ${response.status}`);
      }

      const data = await response.json();

      if (data && data.id) {
        setEnrolledId(data.id);
      } else {
        console.error("data or data.id is undefined");
      }

      setComment("");
      setfinalGrade("");
      setChallenge("");
      setPresence("");
      clearFields("");
      setSnackbarMessage("Nota enviada com sucesso!");
      setOpen(true);

      operationSuccessful = true;
    } catch (error) {
      console.error(error);
    } finally {
      setSeverity(operationSuccessful ? "success" : "error");
      setOpen(true);
    }
  };

  async function handleDelete(id) {
    try {
      setFade((prevFade) => ({ ...prevFade, [id]: false }));

      setTimeout(async () => {
        const response = await fetch(
          `https://form.pdinfinita.com.br/grade/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "API-KEY":
                "Rm9ybUFwaUZlaXRhUGVsb0plYW5QaWVycmVQYXJhYURlc2Vudm9sdmU=",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Erro ao excluir a nota: " + response.status);
        }

        setNotas((prevNotas) => prevNotas.filter((nota) => nota.id !== id));

        setSnackbarMessage("Nota excluída com sucesso!");
        setSeverity("success");
        setOpen(true);
      }, 500);
    } catch (error) {
      console.error(error);
      setSnackbarMessage("Erro ao excluir a nota!");
      setSeverity("error");
      setOpen(true);
    }
  }
  async function handleEdit() {
    try {


      const enrolledId = searchResult.id;
      const challengeEnum = challengeMap[challenge];


      setTimeout(async () => {
        const response = await fetch(
          `https://form.pdinfinita.com.br/grade/enrolled/${enrolledId}?grade=${challengeEnum}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "API-KEY":
                "Rm9ybUFwaUZlaXRhUGVsb0plYW5QaWVycmVQYXJhYURlc2Vudm9sdmU=",
            },
            body: JSON.stringify({
              finalGrade: parseFloat(finalGrade),
              presence: parseFloat(presence),
              comment: comment || null,
            })
          }
        );

        if (!response.ok) {
          throw new Error("Erro ao editar a nota: " + response.status);
        }



        setSnackbarMessage("Nota editada com sucesso!");
        setSeverity("success");
        setOpen(true);
      }, 500);

    } catch (error) {

      console.error(error);
      setSnackbarMessage("Erro ao editar a nota!");
      setSeverity("error");
      setOpen(true);
    }
  }


  const buscarNota = async () => {
    try {
      const enrolledId = searchResult.id;

      const response = await fetch(
        `https://form.pdinfinita.com.br/grade/enrolled/${enrolledId}`,
        {
          headers: {
            "API-KEY":
              "Rm9ybUFwaUZlaXRhUGVsb0plYW5QaWVycmVQYXJhYURlc2Vudm9sdmU=",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Erro ao buscar as notas: ${response.status}`);
      }

      const data = await response.json();
      console.log("Notas do aluno:", data);
      setNotas(data);
    } catch (error) {
      console.error("Erro ao buscar as notas:", error);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 5,
          gap: 1,
        }}
      >
        <TextField
          color="secondary"
          label="E-mail"
          focused
          style={{ minWidth: "20vw" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          color="secondary"
          variant="contained"
          style={{
            fontSize: 14,
            maxHeight: 30,
            border: "1px solid #ccc",
            borderRadius: "30px",
            fontFamily: "Rajdhani",
            fontWeight: "bold",
            boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
            backgroundImage: `url(${Backbutton})`,
          }}
          onClick={() => handleSearch(email)}
        >
          {buttonText}
        </Button>
      </Box>

      {searchResult && (
        <Fade in={searchResult}>
          <Box style={{ fontSize: "15px", marginTop: 10 }}>
            <Box
              style={{
                boxShadow: "0 1px 3px 2px rgba(0, 0, 0, .3)",
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                border: "1px solid #ccc",
                borderRadius: "30px",
                width: isMobile ? "90vw" : "50vw",
              }}
            >
              <Box
                style={{
                  margin: 20,
                  fontFamily: "Rajdhani",
                  fontSize: 12,
                  marginTop: "3vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Logo />
                Postagem notas <strong>Projeto Desenvolve (ALL CITIES)</strong>
              </Box>

              <Box
                style={{
                  margin: 10,
                  fontFamily: "Rajdhani",
                  fontSize: 20,
                  marginTop: "3vh",
                  flexDirection: "column",
                }}
              >
                {nomeCompleto && (
                  <div>
                    <strong>Aluno:</strong> {nomeCompleto}
                  </div>
                )}
                {status && (
                  <div>
                    <strong>Status:</strong>{" "}
                    <span
                      style={{
                        color:
                          status === "Ativo"
                            ? "lime"
                            : status === "Suspenso" || status === "Inativo"
                              ? "red"
                              : "black",
                      }}
                    >
                      {status}
                    </span>
                  </div>
                )}{" "}
              </Box>


              <Box>
                <FormControl focused fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Disciplina
                  </InputLabel>
                  <Select
                    sx={{
                      width: isMobile ? "70vw" : "30vw",
                      backgroundColor: "white",
                      boxShadow: "0 1px 3px 2px rgba(0, 0, 0, .1)",
                    }}
                    color="secondary"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={challenge}
                    label="Disciplina"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Python </MenuItem>
                    <MenuItem value={2}>Linux </MenuItem>
                    <MenuItem value={3}>Introdução Web </MenuItem>
                    <MenuItem value={4}>No Code </MenuItem>
                    <MenuItem value={5}>Scratch </MenuItem>
                    <MenuItem value={6}>Elementos De Interface </MenuItem>
                    <MenuItem value={7}>Projetos </MenuItem>
                  </Select>
                </FormControl>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    label="Observação"
                    focused
                    color="secondary"
                    multiline
                    rows={3}
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    sx={{
                      marginTop: 2,
                      width: isMobile ? "70vw" : "30vw",
                      backgroundColor: "white",
                      boxShadow: "0 1px 3px 2px rgba(0, 0, 0, .1)",
                    }}
                  />
                </Box>


                <Box style={{ display: "flex", gap: "2vw", alingItems: "center", justifyContent: "center", marginTop: "2vh" }}>
                  <Box>
                    <Tooltip title="Insira a % de presença do aluno (não precisa colocar o %, apenas o número)">
                      <TextField
                        sx={{
                          width: isMobile ? "25vw" : "10vw",
                          backgroundColor: "white",
                          boxShadow: "0 1px 3px 2px rgba(0, 0, 0, .1)",
                        }}
                        color="secondary"
                        focused
                        label="Presença"
                        value={presence}
                        onChange={(e) => setPresence(e.target.value)} // Atualize presence quando o valor do TextField mudar
                      />
                    </Tooltip>
                  </Box>
                  <Box>
                    <Tooltip title="Insira a nota final do aluno">
                      <TextField
                        sx={{
                          width: isMobile ? "25vw" : "10vw",
                          backgroundColor: "white",
                          boxShadow: "0 1px 3px 2px rgba(0, 0, 0, .1)",
                        }}
                        color="secondary"
                        focused
                        label="Nota"
                        value={finalGrade}
                        onChange={(e) => setfinalGrade(e.target.value)}
                      />
                    </Tooltip>
                  </Box>
                </Box>





                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    gap: 5,
                  }}
                >

                  <Tooltip title="Enviar notas">
                    <Button
                      style={{
                        maxWidth: 30,
                        fontSize: 12,
                        maxHeight: 30,
                        backgroundColor: "green",
                        color: "white",
                        border: "1px solid #ccc",
                        borderRadius: "30px",
                        fontFamily: "Rajdhani",
                        fontWeight: "bold",
                        boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
                      }}
                      variant="contained"
                      onClick={handleSubmitGrade}
                    >
                      Enviar
                    </Button>
                  </Tooltip>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 10,
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 10,
                    }}
                  >
                    <Tooltip title="Fetch nas notas / Excluir notas">
                      <Button
                        style={{
                          maxWidth: 30,
                          fontSize: 12,
                          maxHeight: 30,
                          border: "1px solid #ccc",
                          borderRadius: "30px",
                          fontFamily: "Rajdhani",
                          fontWeight: "bold",
                          boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
                          backgroundImage: `url(${Backbutton})`,
                        }}
                        variant="contained"
                        onClick={buscarNota}
                      >
                        BUSCAR
                      </Button>
                    </Tooltip>


                  </Box>
                  <Button
                    style={{
                      maxWidth: 30,
                      fontSize: 12,
                      maxHeight: 30,
                      border: "1px solid #ccc",
                      borderRadius: "30px",
                      fontFamily: "Rajdhani",
                      fontWeight: "bold",
                      boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)"
                    }}
                    variant="contained"
                    color="primary"
                    onClick={handleEdit}
                  >
                    Editar
                  </Button>
                </Box>
              </Box>

              {notas.length > 0 && (
                <Box
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 20,
                    display: "flex",
                    flexWrap: "wrap",
                    marginBottom: 30,
                  }}
                >
                  {notas.map((nota) => (
                    <Fade
                      in={fade[nota.id] !== false}
                      timeout={500}
                      key={nota.id}
                    >
                      <Box>
                        <Card
                          key={nota.id}
                          style={{
                            padding: 10,
                            marginBottom: 10,
                            fontFamily: "Rajdhani",
                            width: isMobile ? "50vw" : "20vw",
                            maxHeight: isMobile ? "50vh" : "300px",
                            minHeight: isMobile ? "50vh" : "300px"
                          }}
                        >
                          <Box
                            style={{
                              backgroundColor:
                                nota.finalGrade < 60 || nota.presence < 100
                                  ? "red"
                                  : "green",
                              color: "white",
                              padding: "10px",
                              marginTop: "10px",
                            }}
                          >
                            {nota.finalGrade >= 60 && nota.presence === 100
                              ? "Aprovado"
                              : "Dependência"}
                          </Box>
                          <p>
                            <strong>Disciplina:</strong> {nota.gradeOf}
                          </p>
                          <p>
                            <strong>Nota:</strong> {nota.finalGrade}{" "}
                          </p>
                          <p>
                            <strong>Presença: </strong>
                            {nota.presence}{" "}
                          </p>
                          <p>
                            <strong>Observação: </strong>
                            {nota.comment}
                          </p>
                          <p>
                            <strong>ID: </strong>
                            {nota.id}
                          </p>
                          <Box>
                            <Button
                              style={{ marginRight: 5 }}
                              variant="contained"
                              color="error"
                              onClick={() => handleDelete(nota.id)}
                            >
                              Excluir
                            </Button>


                          </Box>

                        </Card>
                      </Box>
                    </Fade>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </Fade>
      )}
      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" variant="filled">
          Nota enviada com sucesso!
        </Alert>
      </Snackbar>

      <Snackbar open={openError} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" variant="filled">
          Erro ao enviar a nota!
        </Alert>
      </Snackbar>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {severity === "success"
            ? "Operação concluida com sucesso!"
            : "Erro, tente novamente   :("}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default App;
