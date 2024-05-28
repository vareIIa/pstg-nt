import React, { useState } from "react";
import {
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  Snackbar,
  Tooltip,
  Alert,
  Fade,
} from "@mui/material";
import Criterios from "/./criterios.json"; // Certifique-se de que o caminho para criterios.json está correto

const App = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [grade, setGrade] = useState("");
  const [email, setEmail] = useState("");
  const [challenge, setChallenge] = useState("");
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [buttonText, setButtonText] = useState("Buscar");
  const [enrolledId, setEnrolledId] = useState(null);
  const [grades, setGrades] = useState({});

  const clearFields = () => {
    setGrade("");
    setChallenge("");
    setComment("");
    setGrades({});
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api-hml.pdcloud.dev/enrolled/email/${email}`,
        {
          headers: {
            "API-KEY": "Rm9ybUFwaUZlaXRhUGVsb0plYW5QaWVycmVQYXJhYURlc2Vudm9sdmU=",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Deu erro :( código do erro: ${response.status}`);
      }

      const data = await response.json();
      setEnrolledId(data.enrolledId);
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

  const handleChange = (event) => {
    setChallenge(event.target.value);
    setGrades({});
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

      operationSuccessful = true;

      const response = await fetch("https://api-hml.pdcloud.dev/challenge/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-KEY": "Rm9ybUFwaUZlaXRhUGVsb0plYW5QaWVycmVQYXJhYURlc2Vudm9sdmU=",
        },
        body: JSON.stringify({
          enrolledId: enrolledId,
          challenge: challenge,
          comment: comment || null,
          grade: parseFloat(grade),
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
      setGrade("");
      setChallenge("");
      clearFields("");
      setSeverity("success");
      setOpen(true);
    } catch (error) {
      console.error(error);
    } finally {
      setSeverity(operationSuccessful ? "success" : "error");
      setOpen(true);
    }
  };

  const handleGradeChange = (criterion, event) => {
    setGrades((prevGrades) => ({
      ...prevGrades,
      [criterion]: event.target.value,
    }));
  };

  const selectedDesafio = Criterios.desafios.find((d) => d.id === challenge);

  const criterios = selectedDesafio
    ? selectedDesafio.criteriosCOB ||
      selectedDesafio.criteriosPAC ||
      selectedDesafio.criterios
    : [];

  return (
    <Box
      sx={{
        minWidth: 600,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 1, minWidth: 450 }}
      >
        <TextField
          style={{ minWidth: 310 }}
          color="secondary"
          label="E-mail"
          focused
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          color="secondary"
          variant="contained"
          style={{ minWidth: 130 }}
          onClick={() => handleSearch(email)}
        >
          {buttonText}
        </Button>
      </Box>

      <Box>
        {searchResult && (
          <Fade in={true}>
            <Box style={{ fontSize: "15px", marginTop: 10 }}>
              <Box sx={{ width: 450, marginTop: 2 }}>
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
                    {Criterios.desafios.map((desafio) => (
                      <MenuItem key={desafio.id} value={desafio.id}>
                        {desafio.desafio}
                      </MenuItem>
                    ))}
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
                    sx={{ marginTop: 2, width: 450 }}
                  />

                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h2 style={{ fontFamily: "Rajdhani" }}>Critérios</h2>
                  </Box>
                  {Object.keys(criterios).map((key, index) => (
                    <TextField
                      key={index}
                      label={criterios[key]}
                      value={grades[criterios[key]] || ""}
                      onChange={(event) =>
                        handleGradeChange(criterios[key], event)
                      }
                      sx={{ marginTop: 2, width: 450 }}
                    />
                  ))}

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  ></Box>

                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    <Button
                      style={{ maxWidth: 30, fontSize: 15, maxHeight: 55 }}
                      color="terciary"
                      variant="contained"
                      onClick={handleSubmitGrade}
                    >
                      Enviar
                    </Button>

                    <Button
                      style={{
                        maxWidth: 10,
                        fontSize: 12,
                        maxHeight: 55,
                        marginLeft: 5,
                      }}
                      color="secondary"
                      variant="contained"
                      onClick={handleChangeGrade}
                    >
                      Editar
                    </Button>
                  </Box>
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

        <Snackbar
          open={openError}
          autoHideDuration={3000}
          onClose={handleClose}
        >
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
    </Box>
  );
};

export default App;
