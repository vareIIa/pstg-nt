import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import PDLOGO2 from '../../components/PDLOGO2'

function Copyright(props) {
	return (
		
		
		<Typography>
			<PesquisarO/>
			{'Copyright © '}
			<Link color="inherit" href="https://projetodesenvolve.com.br/">
				Projeto Desenvolve
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
		
	)
	
}



const defaultTheme = createTheme()

export default function SignIn() {
	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			matricula: data.get('matricula'),
		})
	}

	return (
        <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{  minHeight:'30vh', minWidth:'30vh', bgcolor: 'transparent'  }}>
              <PDLOGO2 />
            </Avatar>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="matricula"
							label="Matrícula"
							name="matricula"
							autoComplete="matricula"
							autoFocus
						/>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Logar
						</Button>
						<Grid container>
							<Grid item xs >
								<Link href="https://ajuda-projetodesenvolve.freshdesk.com/support/login" variant="body2">
									Esqueceu sua matrícula?
								</Link>
							</Grid>

						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</ThemeProvider>
	)
}
