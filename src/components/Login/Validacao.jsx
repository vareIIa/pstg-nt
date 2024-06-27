import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Excluir from "./Excluir";

import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";
import Background from "./Button.png"
import { minWidth } from "@mui/system";

const App = () => {


  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [grade, setGrade] = useState("");
  const [email, setEmail] = useState("");
  const [challenge, setChallenge] = useState("");
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [buttonText, setButtonText] = useState("Buscar");
  const [enrolledId, setEnrolledId] = useState(null); // ou outro valor padrão
  const [comentario, setComentario] = useState('');

  
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

      const response = await fetch("https://api-hml.pdcloud.dev/challenge/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-KEY": "Rm9ybUFwaUZlaXRhUGVsb0plYW5QaWVycmVQYXJhYURlc2Vudm9sdmU=",
        },
        body: JSON.stringify({
          enrolledId: enrolledId,
          challenge: challengeEnum,
          comment: comment || null,
          grade: parseFloat(grade),
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
      setGrade("");
      setChallenge("");

      clearFields("");
      setSeverity("success");
      setOpen(true);
      operationSuccessful = true;
    } catch (error) {
      console.error(error);
    } finally {
      setSeverity(operationSuccessful ? "success" : "error");
      setOpen(true);
    }
  };









  const handleChangeGrade = async () => {
    console.log(enrolledId);

    let operationSuccessful = false;




    if (!enrolledId) {
      console.error("enrolledId is undefined");
      return;
    }
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
        throw new Error(`Erro ao buscar os dados do aluno: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
  
      // Pegando o enrolledId do primeiro fetch
      const enrolledId = data.id;
      const challengeEnum = challengeMap[challenge];
  
      const responseEDIT = await fetch(
        `https://api-hml.pdcloud.dev/challenge/enrolled/${enrolledId}?challenge=${challengeEnum}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "API-KEY": "Rm9ybUFwaUZlaXRhUGVsb0plYW5QaWVycmVQYXJhYURlc2Vudm9sdmU=",
          },
          body: JSON.stringify({
            grade: parseFloat(grade),
            comment: comment || null,
          }),
        }
      );
  
      if (!responseEDIT.ok) {
        throw new Error(`Erro ao atualizar a nota: código do erro: ${responseEDIT.status}`);
      }
  
      const data2 = await responseEDIT.json();
      console.log(data2);
  
      setSearchResult(data2);
      setComment("");
      setGrade("");
      setChallenge("");
      clearFields("");

      operationSuccessful = true;



    } catch (error) {

      console.error("An error occurred:", error);

    } finally {


      setSnackbarMessage(operationSuccessful ? "Operação bem-sucedida!" : "Ocorreu um erro!");
      setSeverity(operationSuccessful ? "success" : "error");
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                sx={{ width: 370 }}
                color="secondary"
                focused
                label="Nota"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              />
            </Box>
            <Box sx={{ minWidth: 120, marginTop: 2 }}>
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

                <Box
                  style={{
                    
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <Button
                    style={{ maxWidth: 30, fontSize: 12, maxHeight: 33 }}
                    color="quart"
                    variant="contained"
                    onClick={handleSubmitGrade}
                  >
                    Enviar
                  </Button>
                  
                  <Button
                    style={{
                      maxWidth: 10,
                      fontSize: 12,
                      maxHeight: 33,
                      marginLeft: 5,
                    }}
                    color="secondary"
                    variant="contained"
                    onClick={handleChangeGrade}
                  >
                    Editar
                  </Button>
                  
                  <Excluir />
                </Box>
                
              </Box>
            </Box>
          </div>
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