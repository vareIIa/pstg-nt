import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

export default function IconBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href="https://projetodesenvolve.edusense.app/#/platform/home"
        target="_blank" // Adicionado para abrir em nova aba
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Início
      </Link>
      <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href="https://avaliacoespd.vercel.app/"
        target="_blank"
      >
        <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Seleção resultado
      </Link>
      <Typography
        sx={{ display: 'flex', alignItems: 'center' }}
        color="text.primary"
      >
        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Resultados
      </Typography>
    </Breadcrumbs>
  );
}
