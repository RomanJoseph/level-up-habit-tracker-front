import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import logo from '../../common/assets/level.png'
import styled from 'styled-components';


export default function LoginPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <AppBox>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <LogoImage src={logo} alt="logo" />
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            sx={{ bgcolor: 'white', borderRadius: 2 }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            sx={{ bgcolor: 'white', borderRadius: 2 }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Link to="/register">
                            {"Ainda não tem uma conta ? Crie agora !"}
                        </Link>
                    </Box>
                </Box>
            </Container>
        </AppBox>
    );
}

const LogoImage = styled.img`
    width: 480px;
`;

const AppBox = styled.div`
  border-radius: 20px;
  background-color: #FFFFFF;
  padding-bottom: 15%;

  a{
    all: unset;
    display: flex;
    justify-content: center;
    cursor:pointer;
  }
`