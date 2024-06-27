import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React from "react";

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

      // Se a chamada de API for bem-sucedida e os dados forem retornados, imprima a mensagem no console
      if (data) {
        console.log("O email foi encontrado");
      }

      setSearchResult(data);

      // Buscar as notas do aluno

      handleFetchGrades(data.id);
    } catch (error) {
      console.error("Erro ao buscar e-mails:", error);
    }
  };

  const handleFetchGrades = async (enrolledId) => {
    try {
      const response = await fetch(
        `https://api-hml.pdcloud.dev/challenge/enrolled/${enrolledId}`,
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
      setGrades(data);
      console.log("Notas do aluno:", data);
    } catch (error) {
      console.error("Erro ao buscar as notas:", error);
    }
  };




const Excluir = () => {
    return (



        <Box
        >


        <Button
        sx={{backgroundColor: '#DC143C'}}
        focused
        style={{
            maxWidth: 10,
            fontSize: 12,
            maxHeight: 33,
            marginLeft: 5,
          }}
          color="secondary"
          variant="contained"
          onClick={handleFetchGrades}
        >Excluir</Button>
        </Box>

    );

};

export default Excluir;

