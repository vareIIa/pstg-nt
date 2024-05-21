

import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const App = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [studentGrade, setStudentGrade] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [disciplina, setDisciplina] = React.useState('');

  const handleChange = (event) => {
    setDisciplina(event.target.value);
  };


  const handleSearch = async (email) => {
    try {
      const response = await fetch(`https://api-hml.pdcloud.dev/enrolled/email/${email}`, {
        headers: {
          'API-KEY': "Rm9ybUFwaUZlaXRhUGVsb0plYW5QaWVycmVQYXJhYURlc2Vudm9sdmU=",
        }
      });

      if (!response.ok) {
        throw new Error(`Deu erro :( código do erro: ${response.status}`);
      }

      const data = await response.json();

      setSearchResult(data);

    } catch (error) {

      console.error('Erro ao buscar e-mails:', error);
    }
  };

  const handleGradeSubmit = () => {

  };



  return (

    <Box>

      <Box display="flex" alignItems="center" style={{ marginBottom: '20px' }}>
        <TextField
          color="secondary"
          focused
          type="text"
          value={studentGrade}
          onChange={(e) => setStudentGrade(e.target.value)}
          placeholder="Digite a nota do aluno"
          inputProps={{ style: { color: 'black' } }}
        />
        <Button color="secondary" variant="outlined" style={{ marginLeft: '10px', width: '120px' }} onClick={handleGradeSubmit}>Subir Nota</Button>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl focused fullWidth>
          <InputLabel id="demo-simple-select-label">Disciplina</InputLabel>
          <Select

            color="secondary"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={disciplina}
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
      </Box>
    </Box>
  );
};

export default App;