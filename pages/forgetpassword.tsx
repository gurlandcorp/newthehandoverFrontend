import React, { useState } from 'react'
import type { NextPage } from 'next';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bgImage from "../public/assets/img/sign-in/bg.jpg";
import { useRouter } from 'next/router';
import { Base_URL } from '../config/constants';
import { styled } from '@mui/system';
import NextLink from 'next/link';
import Image from 'next/image';
import Logo from "../public/logo.png"

const LoginGrid = styled(Grid)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center !important',
}))

const LoginForm = styled(Grid)(() => ({
    maxWidth: '400px !important',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 5px 10px 0px #0b544359'
}))

const LoginButton = styled(Button)(() => ({
    background: 'linear-gradient(45deg, #00c194 30%, rgb(35 179 145), #00c194 90%)',
    border: 0,
    borderRadius: 100,
    color: 'white',
}))

const ForgetPassword: NextPage = ({code}: any) => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#00c194'
            },
        },               
    });

    const initialState = {
		email: "",
		password: "",
	}

    const [user, setUser] = useState(initialState)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
	const [submiting, setSubmiting] = useState(false)

    const handleInputs = (e: any) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

    const router = useRouter()

    const handleSubmitForget = async (e: any) => {
        e.preventDefault()
        setSubmiting(true)
        try {
            if(password == confirmPassword)
            {
                const res = await fetch(`${Base_URL}/api/authenticate/reset-password`, {
                    method: "POST",
                    body: JSON.stringify({
                        code: code,
                        password: password
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(response => response.json());
                console.log(res)
                if(res.data == 'no data found')
                {
                    setError('Credentials are not valid!')
                }
                else
                {
                    setError('')
                    router.push('/sign-in')
                }
            }
            else
            {
                setError('New password and confirm password must matched!')
            }
        } catch (error: any) {
            console.log('error', error)
        }
        setSubmiting(false)
    }

    return (
        <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <LoginGrid
            item
            xs={false}
            sm={12}
            sx={{
                p: 2,
                backgroundImage: `url(${bgImage.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t: any) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%'
            }}
            >
                <LoginForm item xs={12} sm={8} md={4}>
                    <Box
                        className='p-4'
                        sx={{
                        my: 4,
                        mx: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#00c194' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Image src={Logo} width={'200px'} height={'23px'} alt='The Handover' />
                        <Typography component="h1" variant="h5" className="mt-4">
                            {'Reset Password'}
                        </Typography>
                        <Box component="form" onSubmit={(e: any)=>handleSubmitForget(e)}>
                            {
                                error ? <div style={{ color: "red", fontSize: '11px' }} className="bg-danger bg-opacity-10 px-2 rounded-3">{error}</div> : ""
                            }
                            <TextField type="password"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="New Password"
                                name="new_password"
                                autoComplete="off"
                                autoFocus
                                variant="standard"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                            <TextField type="password"
                                margin="normal"
                                required
                                fullWidth
                                id="confirm_password"
                                label="Confirm New Password"
                                name="confirm_password"
                                autoComplete="off"
                                autoFocus
                                variant="standard"
                                value={confirmPassword}
                                onChange={(e)=>setConfirmPassword(e.target.value)}
                            />
                            <LoginButton
                                type={`${submiting==true ? 'button' : 'submit'}`}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, p: 1, fontSize: 16 }} 
                                color="primary" >
                                Reset password
                                {
                                    submiting==true && (
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 128 128" xmlSpace="preserve" style={{marginLeft: '1rem'}}><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#116c57" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1200ms" repeatCount="indefinite" /></g></svg>
                                    )
                                }
                            </LoginButton>
                        </Box>
                    </Box>
                </LoginForm>
            </LoginGrid>
        </Grid>
        </ThemeProvider>
    )
}

export default ForgetPassword

export async function getServerSideProps(context: any) {
    let code = context.query.code != undefined ? context.query.code : ""
    return {
        props: {
            code: code
        }
    }
}