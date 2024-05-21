import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BuscarEmail from "../BuscarEmail/BuscaEmail";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Fade from "@mui/material/Fade";
import { padding } from "@mui/system";
const App = () => {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [grade, setGrade] = useState("");
  const [email, setEmail] = useState("");
  const [challenge, setChallenge] = useState("");
  const [comentario, setComentario] = useState("");
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [buttonText, setButtonText] = useState("Buscar");

  const clearFields = () => {
    setGrade("");
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
      console.log(data);

      setSearchResult(data);
      setSnackbarMessage("Aluno encontrado!");
      setSnackbarSeverity("success");
      setOpen(true);
    } catch (error) {

      console.error(error);
      setSnackbarMessage("Aluno não encontrado!");
      setSnackbarSeverity("error");
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
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

  const handleSubmitGrade = async () => {
    try {
      const challengeEnum = challengeMap[challenge];

      const response = await fetch("https://api-hml.pdcloud.dev/challenge/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-KEY": "Rm9ybUFwaUZlaXRhUGVsb0plYW5QaWVycmVQYXJhYURlc2Vudm9sdmU=",
        },
        body: JSON.stringify({
          enrolledId: searchResult.id,
          challenge: challengeEnum,
          grade: parseFloat(grade),
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar a nota: ${response.status}`);
      }

      // Se a nota for enviada com sucesso, abra o Snackbar de sucesso
      setOpenSuccess(true);
      clearFields();
    } catch (error) {
      // Se ocorrer um erro, abra o Snackbar de erro
      setOpenError(true);
    }
  };

  const handleChangeGrade = async () => {
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
      console.log(data);

      setSearchResult(data);
      setSnackbarMessage("Aluno encontrado!");
      setSnackbarSeverity("success");
      setOpen(true);
    } catch (error) {

      console.error(error);
      setSnackbarMessage("Aluno não encontrado!");
      setSnackbarSeverity("error");
      setOpen(true);
    }
  };


  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TextField
          color="secondary"
          label="Email"
          focused
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
          <div style={{ fontSize: "15px", marginTop: 10 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TextField
                color="secondary"
                focused
                label="Nota"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              />
              <Box style={{ display: "flex", flexDirection: "row" }}>
                <Button
                  style={{ maxWidth: 10, fontSize: 12, maxHeight: 55 }}
                  color="terciary"
                  variant="contained"
                  onClick={handleSubmitGrade}
                >
                  Enviar
                </Button>

                <Button
                  style={{ maxWidth: 10, fontSize: 12, maxHeight: 55, marginLeft: 5 }}
                  color="secondary"
                  variant="contained"
                  onClick={handleChangeGrade}
                >
                  Editar
                </Button>
              </Box>
            </Box>
            <Box sx={{ minWidth: 120, marginTop: 2 }}>
              <FormControl focused fullWidth>
                <InputLabel id="demo-simple-select-label">Disciplina</InputLabel>
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


              <Box>
                <TextField
                  label="Comentários do desafio (não obrigatório)"
                  focused
                  color="secondary"
                  multiline
                  rows={3}
                  value={comentario}
                  sx={{ marginTop: 2, width: 350 }}

                />
              </Box>


            </Box>
          </div>
        </Fade>
      )}
      <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleClose}>
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
        <Alert onClose={handleClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

    </Box>

  );
};

export default App;
