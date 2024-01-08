// MobileView.jsx
import React from 'react';
import { Box, Paper } from '@mui/material';
import PDLOGO from './PDLOGO';
import Sobre from './Sobre';
import PesquisarO from './PesquisarO';

const MobileView = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PDLOGO />
        <Sobre />
        <PesquisarO />
      </Paper>
    </Box>
  );
};

export default MobileView;
