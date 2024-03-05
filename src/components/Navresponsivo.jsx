import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

export default function IconBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">

      <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href="https://avaliacoespd.vercel.app/"
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
