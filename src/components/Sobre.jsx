import React from 'react';
import { Grid, Typography } from '@mui/material';

function SeuComponente() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>

        <Typography variant="body1">
          
        <h3>Desafio: Criar o "Jogo da Cobrinha" no Scratch.</h3>

<h5>Atividades: Programar movimento da cobrinha, crescimento ao comer objetos, e detecção de colisões.</h5>

<h5>Recursos Extras: Animações, sons e níveis variáveis de dificuldade.</h5>

<h5>Habilidades: Lógica de programação, manipulação de eventos e design de interface.</h5>

        




        </Typography>
      </Grid>
      <Grid item xs={6}>

        <Typography variant="body1">
        <h3>A avaliação dos critérios:</h3>
        <h5> (Movimento,	Crescimento/Colecionáveis,	Colisão, 	Pontuação, 	Interface de Usuário, 	Animações/Sons, 	Restart, 	Dificuldade/Velocidade,	Game Over, 	Cenario)</h5>
        
        
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SeuComponente;