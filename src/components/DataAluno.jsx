import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid, TextField, Typography, CircularProgress } from '@mui/material';
import Tabela from '../components/Tabela';

const Aluno = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://gist.githubusercontent.com/vareIIa/ad98f88cd7dff2855868c54065b5ccbe/raw/adf5e3881f0aa884730df4d9cb013e34204444bf/Tabela');
        setData(response.data);
        setFilteredData(response.data ? response.data.alunos : null);
      } catch (error) {
        setError('Erro ao carregar os dados. Tente novamente mais tarde.');
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const filtered = data.alunos.filter(aluno => aluno.nome.toLowerCase().includes(searchText.toLowerCase()));
      setFilteredData(filtered);
    }
  }, [searchText, data]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField 
            label="Pesquisar Nome"
            variant="outlined"
            value={searchText}
            onChange={handleSearchChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          {loading && <CircularProgress />} {/* Indicador de carregamento */}
          {error && <Typography variant="body1" color="error">{error}</Typography>} {/* Mensagem de erro */}
          {!loading && !error && filteredData && <Tabela data={filteredData} />} {/* Tabela de resultados */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Aluno;
