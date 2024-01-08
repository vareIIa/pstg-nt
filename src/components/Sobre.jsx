import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: '65%',
    height: '450px',
    display: 'flex',
    flexDirection: 'column',
    padding:'20px',
    justifyContent: 'center',
    alignItems: 'center', }}>
        
      <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

          <Tab label="Como foi feita a avaliação?" {...a11yProps(1)} />
        </Tabs>
      </Box>
      
      <CustomTabPanel value={value} index={0}>
      <p style={{ color: 'black' }}>
<h3>Desafio: Criar o "Jogo da Cobrinha" no Scratch.</h3>

<h5>Atividades: Programar movimento da cobrinha, crescimento ao comer objetos, e detecção de colisões.</h5>

<h5>Recursos Extras: Animações, sons e níveis variáveis de dificuldade.</h5>

<h5>Habilidades: Lógica de programação, manipulação de eventos e design de interface.</h5>
<h3>A avaliação dos critérios:</h3>
        <h5> (Movimento,	Crescimento/Colecionáveis,	Colisão, 	Pontuação, 	Interface de Usuário, 	Animações/Sons, 	Restart, 	Dificuldade/Velocidade,	Game Over, 	Cenario)</h5>
        <h4>Cada critério foi avaliado em 2 PONTOS, a soma de cada critério gerou a sua notal total.</h4>
        




      </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <p style={{ color: 'black' }}>
        <h3>A avaliação dos critérios:</h3>
        <h5> (Movimento,	Crescimento/Colecionáveis,	Colisão, 	Pontuação, 	Interface de Usuário, 	Animações/Sons, 	Restart, 	Dificuldade/Velocidade,	Game Over, 	Cenario)</h5>
        <h4>Cada critério foi avaliado em 2 PONTOS, a soma de cada critério gerou a sua notal total.</h4>
        </p>
      </CustomTabPanel>

    </Box>
  );
}