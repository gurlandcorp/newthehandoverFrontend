import React, { useState } from 'react'
import type { NextPage } from 'next';
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
import Logo from "../public/logo.png"

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

const SignIn: NextPage = ({redirect_to}: any) => {

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
    const [forgetPassword, setForgetPassword] = useState(false)
    const [forgetEmail, setForgetEmail] = useState('')
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
                    if(redirect_to)
                    {
                        router.push(redirect_to)
                    }
                    else
                    {
                        if(res.data.payload.userType=='Seller')
                        {
                            router.push('/seller');
                        }
                        else
                        {
                            router.push('/buyer');
                        }
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

    const handleSubmitForget = async (e: any) => {
        e.preventDefault()
        setSubmiting(true)
        try {
            const res = await fetch(`${Base_URL}/api/authenticate/forget-password`, {
                method: "POST",
                body: JSON.stringify({
                    email: forgetEmail
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => response.json());
            if(res.status==1)
            {
                setForgetEmail('')
                setForgetPassword(false)
            }
        } catch (error: any) {
            console.log('error', error)
        }
        setSubmiting(false)
    }

    return (
        <>
            <div className="bg-gray-100 h-screen">
                <div className="width mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-2 bg-white h-screen overflow-hidden">
                            <ul className="flex flex-wrap justify-center p-2">
                                <li>
                                    <NextLink href={'/'}>
                                        <a className="inline-block px-4">Home</a>
                                    </NextLink>
                                </li>
                                <li>
                                    <NextLink href={'/opportunities'}>
                                        <a className="inline-block px-4">Opportunities</a>
                                    </NextLink>
                                </li>
                                <li>
                                    <NextLink href={'/about'}>
                                        <a className="inline-block px-4">About</a>
                                    </NextLink>
                                </li>
                                <li>
                                    <NextLink href={'/contact'}>
                                        <a className="inline-block px-4">Contact us</a>
                                    </NextLink>
                                </li>
                            </ul>
                            <div className="flex flex-wrap justify-center items-center">
                                <div>
                                    <div className="flex flex-col items-center justify-center text-center pt-10">
                                        <div className="w-2/5">
                                            <Image src={Logo.src} width={Logo.width} height={Logo.height} alt="site-logo" className="w-6/12 pb-5" />
                                        </div>
                                        <h3 className="text-2xl font-medium text-blue-900">Sign In</h3>
                                    </div>
                                    <div className="md:mx-16 mx-1 py-10">
                                        {
                                            forgetPassword == true ? (
                                                <form onSubmit={(e: any)=>handleSubmitForget(e)}>
                                                    <div className="pb-5">
                                                        <label htmlFor="" className="w-full">Email</label>
                                                        <input type="email" className="border p-2 px-4 rounded-3xl text-sm w-full" name="email" id="email" placeholder="Email address" value={forgetEmail} onChange={(e)=>setForgetEmail(e.target.value)} required />
                                                    </div>
                                                    <div>
                                                        <button type={`${submiting==true ? 'button' : 'submit'}`} className={`${submiting==true ? 'bg-blue-100 text-blue-700' : 'bg-blue-700 text-white'} w-full rounded-3xl p-2 flex flex-wrap justify-center transition-all duration-300`}>Send email {
                                                                submiting==true && (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 128 128" xmlSpace="preserve" style={{marginLeft: '1rem'}}><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#252153" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1200ms" repeatCount="indefinite" /></g></svg>
                                                                )
                                                            }
                                                        </button>
                                                    </div>
                                                </form>
                                            ) : (
                                                <form onSubmit={(e: any)=>handleSubmit(e)}>
                                                    <div className="pb-5">
                                                        <label htmlFor="" className="w-full">Email</label>
                                                        <input type="email" className="border theme-border-color p-2 px-4 rounded-3xl text-sm w-full" name="email" id="email" placeholder="Email address" value={user.email} onChange={(e)=>handleInputs(e)} required />
                                                        {emailError ? <div className="bg-red-100 mt-2 px-2 rounded-3xl text-red-500 w-full capitalize" style={{ fontSize: '11px' }}>{emailError}</div> : ""}
                                                    </div>
                                                    <div className="pb-5">
                                                        <label htmlFor="" className="w-full">Password</label>
                                                        <input type="password" className="border theme-border-color p-2 px-4 rounded-3xl text-sm w-full" name="password" id="password" placeholder="Password" value={user.password} onChange={(e)=>handleInputs(e)} required />
                                                    </div>
                                                    <div className="text-right pb-5">
                                                        <a onClick={()=>setForgetPassword(true)} className="cursor-pointer text-sm text-blue-500">Forget password</a>
                                                    </div>
                                                    <div>
                                                        <button type={`${submiting==true ? 'button' : 'submit'}`} className={`${submiting==true ? 'bg-blue-100 text-blue-700' : 'bg-theme-color text-white'} w-full rounded-3xl p-2 flex flex-wrap justify-center transition-all duration-300`}>Sign In {
                                                                submiting==true && (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 128 128" xmlSpace="preserve" style={{marginLeft: '1rem'}}><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#252153" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1200ms" repeatCount="indefinite" /></g></svg>
                                                                )
                                                            }
                                                        </button>
                                                    </div>
                                                </form>
                                            )
                                        }
                                        
                                        <div className="bg-white p-5 w-full rounded-xl shadow mt-5 lg:hidden">
                                            <p>If you don&apos;t have any account then click <a className="cursor-pointer text-blue-500">here</a> to register yourself</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ background: 'linear-gradient(309deg, #2b6cb0e0, #282452c7), url(/real-estate-background-vector-194501.jpg)', height: '100vh', backgroundPosition: 'center' }} className="hidden lg:block">
                            <div className="flex flex-wrap justify-center items-center h-full">
                                <div className="bg-white p-5 w-4/5 rounded-xl shadow">
                                    <p>If you don&apos;t have any account then click <NextLink href={'/sign-up'}><a className="cursor-pointer text-blue-500">here</a></NextLink> to register yourself</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <ThemeProvider theme={theme}>
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
                            {forgetPassword == false ? 'Sign in' : 'Send forget password email'}
                            </Typography>
                            {
                                forgetPassword == true ? (
                                    <Box component="form" onSubmit={(e: any)=>handleSubmitForget(e)}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            autoFocus
                                            variant="standard"
                                            value={forgetEmail}
                                            onChange={(e)=>setForgetEmail(e.target.value)}
                                        />
                                        <LoginButton
                                            type={`${submiting==true ? 'button' : 'submit'}`}
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2, p: 1, fontSize: 16 }} 
                                            color="primary" >
                                            Send email
                                            {
                                                submiting==true && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 128 128" xmlSpace="preserve" style={{marginLeft: '1rem'}}><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#116c57" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1200ms" repeatCount="indefinite" /></g></svg>
                                                )
                                            }
                                        </LoginButton>
                                        <Grid container>
                                            <Grid item xs>
                                                <Link variant="body2">
                                                    <NextLink href={'/'}><a onClick={()=>setForgetPassword(false)}>Back</a></NextLink>
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                ) : (
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
                                            variant="standard"
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
                                            variant="standard"
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
                                                <Link variant="body2">
                                                    <a onClick={()=>setForgetPassword(true)}>Forgot password?</a>
                                                </Link>
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
                                )
                            }
                        </Box>
                    </LoginForm>
                </LoginGrid>
            </Grid>
            </ThemeProvider> */}
        </>
    )
}

export default SignIn

export async function getServerSideProps(context: any) {
    let link = context.query.redirect_to != undefined ? context.query.redirect_to : ""
    return {
        props: {
            redirect_to: link
        }
    }
}