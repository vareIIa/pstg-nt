import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import Card from "@mui/material/Card";

import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";
import { display, maxWidth, width } from "@mui/system";

const App = () => {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [finalGrade, setfinalGrade] = useState("");
  const [email, setEmail] = useState("");
  const [challenge, setChallenge] = useState("");
  const [presence, setPresence] = useState("");
  const [notas, setNotas] = useState("");
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [buttonText, setButtonText] = useState("Buscar");
  const [enrolledId, setEnrolledId] = useState(null); // ou outro valor padrão
  const [comentario, setComentario] = useState("");
  const [showTextField, setShowTextField] = useState(false);

  const clearFields = () => {
    setChallenge("");
    setComentario("");
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api-hml.pdcloud.dev/enrolled/email/${email}`,
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

      const response = await fetch("https://api-hml.pdcloud.dev/grade/", {
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
        setEnrolledId(data.id); // Use setEnrolledId para atualizar enrolledId
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

  const excluirNota = async () => {
    try {
      const response = await fetch(
        `https://api-hml.pdcloud.dev/enrolled/email/${email}`,
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

      // Se a chamada de API for bem-sucedida e os dados forem retornados, imprima a mensagem no console
      if (data) {
        console.log("O email foi encontrado");
      }

      setSearchResult(data);

      // Buscar as notas do aluno
    } catch (error) {
      console.error("Erro ao buscar e-mails:", error);
    }
  };

  const buscarNota = async () => {
    try {
      const enrolledId = searchResult.id;

      const response = await fetch(
        `https://api-hml.pdcloud.dev/grade/enrolled/${enrolledId}`,
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
          gap: 1,
        }}
      >
        <TextField
          color="secondary"
          label="Email"
          focused
          style={{ minWidth: 300 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          color="secondary"
          variant="contained"
          style={{ minWidth: 133 }}
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
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                border: "1px solid #ccc",
                borderRadius: "30px",
                width: 500,
              }}
            >
              <Box style={{ display: "flex", gap: 10, marginTop: 20 }}>
                <Box>
                  <Tooltip title="Insira a % de presença do aluno (não precisa colocar o %, apenas o número)">
                    <TextField
                      sx={{ width: 100 }}
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
                      sx={{ width: 100 }}
                      color="secondary"
                      focused
                      label="Nota"
                      value={finalGrade}
                      onChange={(e) => setfinalGrade(e.target.value)}
                    />
                  </Tooltip>
                </Box>
              </Box>

              <Box sx={{ minWidth: 120 }}>
                <FormControl focused fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Disciplina
                  </InputLabel>
                  <Select
                    color="secondary"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={challenge}
                    label="Disciplina"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Python </MenuItem>
                    <MenuItem value={2}>Linux </MenuItem>
                    <MenuItem value={3}>IntroWeb </MenuItem>
                    <MenuItem value={4}>NoCode </MenuItem>
                    <MenuItem value={5}>Scratch </MenuItem>
                    <MenuItem value={6}>ElementosDeInterface </MenuItem>
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
                    label="Comentários"
                    focused
                    color="secondary"
                    multiline
                    rows={3}
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    sx={{ marginTop: 2, width: 370 }}
                  />
                </Box>

                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                    gap: 5,
                  }}
                >
                  <Button
                    style={{ maxWidth: 30, fontSize: 12, maxHeight: 30 }}
                    color="quart"
                    variant="contained"
                    onClick={handleSubmitGrade}
                  >
                    Enviar
                  </Button>

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
                    <Button
                      style={{
                        maxWidth: 30,
                        fontSize: 12,
                        maxHeight: 15,
                        border: "1px solid #ccc",
                        borderRadius: "0px",
                      }}
                      color="quart"
                      variant="contained"
                      onClick={buscarNota}
                    >
                      Fetch
                    </Button>

                    <Button
                      style={{
                        maxWidth: 30,
                        fontSize: 12,
                        maxHeight: 15,
                        border: "1px solid #ccc",
                        borderRadius: "0px",
                      }}
                      color="quart"
                      focused
                      label="Excluir"
                      variant="contained"
                      onClick={() => setShowTextField(true)}
                    >
                      Excluir
                    </Button>
                  </Box>
                </Box>

                {notas && (
                  <Box>
                    {notas.map((nota, index) => (
                      <div key={index}>
                        <Card
                          style={{
                            padding: 10,
                            marginBottom: 10,
                            fontFamily: "Rajdhani",
                          }}
                        >
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
                            <strong>Comentário: </strong>
                            {nota.comment}
                          </p>
                          <p>
                            <strong>ID: </strong>
                            {nota.id}
                          </p>

                          <Button variant="contained" color="primary" onClick={() => console.log(nota.id)}>  Excluir</Button>

                        </Card>
                      </div>
                    ))}

                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {showTextField && (
                        <Tooltip title="Insira o ID da Disciplina que deseja excluir.">
                          <Box
                            style={{
                              margin: 20,
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <TextField
                              focused
                              color="secondary"
                              label="Digite algo"
                              variant="outlined"
                            />
                            <Button
                              style={{ margin: 5 }}
                              focused
                              color="secondary"
                              variant="contained"
                            >
                              {" "}
                              deletar id{" "}
                            </Button>
                          </Box>
                        </Tooltip>
                      )}
                    </Box>
                  </Box>
                )}
              </Box>
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
            ? "Operação bem sucedida!"
            : "Ocorreu um erro!"}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default App;
