import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import bgImage from "../public/assets/img/sign-in/bg.jpg";
import styles from "./styles/SignIn.module.css";
import { blue, green } from '@mui/material/colors';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Base_URL } from '../config/constants';
import cookie from 'js-cookie'
import { setCookie } from "nookies"
import { CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import NextLink from 'next/link';
import Image from 'next/image';
import Logo from "../public/logohandover.png"

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <NextLink href="/">
            <Link color="inherit" href="http://thehandover.com/">
            The handover
            </Link>
        </NextLink>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const useStyles = makeStyles({
});

const LoginGrid = styled(Grid)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center !important',
}))

const LoginForm = styled(Grid)(() => ({
    maxWidth: '400px',
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

const SignIn = () => {

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
    const [emailError, setEmailError] = useState("")
	const [passwordError, setPasswordError] = useState("")
	const [submiting, setSubmiting] = useState(false)

    const handleInputs = (e: any) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

    const router = useRouter()

    const handleSubmit = async (e: any) => {
		e.preventDefault()
		setSubmiting(true)

		setEmailError("")
		setPasswordError("")
		const { email, password } = user;
		if (email === "admin@gmail.com") {
			try {
				const res = await axios.post("/signin/admin", {
					email: email,
					password: password,
				});
				if (res.status === 200) {
					localStorage.setItem("adminAuth", email);
					localStorage.setItem("token", JSON.stringify(res.data.token));
					// window.location = "/admin/allProperties";
					router.push('/admin/allProperties')
				}
			} catch (error) {}
		} else {
			try {
				const res = await fetch(`${Base_URL}/api/sign-in`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: email,
                        password: password
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
				}).then(response => response.json());
                if(res.status==0)
                {
                    setEmailError(res.message)
                }
				else if (res.status === 1) {
                    
                    cookie.set('token',res.data.token)
                    cookie.set('user',JSON.stringify(res.data.payload))
                    if(res.data.payload.userType=='Saller')
                    {
                        router.push('/seller');
                    }
                    else
                    {
                        router.push('/buyer');
                    }
					// localStorage.setItem("token", JSON.stringify(res.data.token));
					// localStorage.setItem("userData", JSON.stringify(res.data.payload));
					// window.location = "/profile";
					
					// let redirect_link = localStorage.getItem('redirect_link')
					// if(redirect_link!=null && res.data.payload.userType==='Buyer')
					// {
					// 	route.push(redirect_link)
					// }
					// else
					// {
					// 	route.push('/profile')
					// }
				}
			} catch (error: any) {
				if (error?.response?.data?.message === "No User Exist With This Email") {
					setEmailError("No User Exist With This Email");
				}
				if (error?.response?.data?.message === "Invalid Password") {
					setPasswordError("Invalid Password");
				}
			}
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
                backgroundImage: `url(${bgImage.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t: any) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
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
                        <Image src={Logo} width={'200px'} height={'23px'} />
                        <Typography component="h1" variant="h5">
                        Sign in
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={(e: any)=>handleSubmit(e)}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                variant="filled"
                                value={user.email}
                                onChange={(e)=>handleInputs(e)}
                            />
                            {emailError ? <small style={{ color: "red", fontSize: '11px' }}>{emailError}</small> : ""}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                variant="filled"
                                value={user.password} onChange={(e)=>handleInputs(e)}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <LoginButton
                                type={`${submiting==true ? 'button' : 'submit'}`}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, p: 1, fontSize: 16 }} 
                                color="primary"
                            >
                                Sign In
                                {
                                    submiting==true && (
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 128 128" xmlSpace="preserve" style={{marginLeft: '1rem'}}><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#116c57" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1200ms" repeatCount="indefinite" /></g></svg>
                                    )
                                }
                            </LoginButton>
                            <Grid container>
                                <Grid item xs>
                                    <NextLink href="/">
                                        <Link variant="body2">
                                            Forgot password?
                                        </Link>
                                    </NextLink>
                                </Grid>
                                <Grid item>
                                    <NextLink href="/sign-up">
                                        <Link variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </NextLink>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </LoginForm>
            </LoginGrid>
        </Grid>
        </ThemeProvider>
    )
}

export default SignIn