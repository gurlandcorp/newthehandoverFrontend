import { Copyright } from '@mui/icons-material'
import { Button, Checkbox, CssBaseline, FormControlLabel, Grid, TextField, Box, FormControl, FormLabel, RadioGroup, Radio, Typography, Link as MUILink } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Base_URL } from '../config/constants'
import Cookies from "js-cookie"
import Image from 'next/image';
import Logo from "../public/logohandover.png"


const Form = styled(Box)(() => ({
    width: '450px',
    marginTop: '-3rem',
    backgroundColor: '#fff',
    borderRadius: '10px',
    marginBottom: '2rem'
}))

const SignUpButton = styled(Button)(() => ({
    background: 'linear-gradient(45deg, #00c194 30%, rgb(35 179 145), #00c194 90%)',
    border: 0,
    borderRadius: 100,
    color: 'white',
}))

const SingUp = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#00c194'
            },
        },               
    });

    const initialUserState = {
		name: "",
		email: "",
		password: "",
		phone: "",
	}
    const [user, setUser] = useState(initialUserState)
    const [userType, setUserType] = useState(false);
    const [error, setError] = useState(initialUserState);
	const [email, setEmail] = useState("");
    const [submiting, setSubmiting] = useState(false)

    const handleInputs = (e: any) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};
    const route = useRouter()
    const handleSubmit = async (e: any) => {
        e.preventDefault();
		setSubmiting(true)
		setEmail("");
		const { phone, name, email, password } = user;
		try {
			if(name.length >= 3 && email.length >= 7 && password.length >= 8)
			{
                let data = {
					email: email,
					password: password,
					phone: phone,
					name: name,
					userType: userType,
				}
				const res = await fetch(`${Base_URL}/api/sign-up`,{
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(response => response.json());
                console.log(res)
                if (res.status == 200)
                {
                    Cookies.set('user',JSON.stringify(res?.data?.SavedUser))
                    route.push('/sign-in')
                }
                else if(res.status == 0)
                {
                    setError({...error, email: res.message});
                }
				// if (res.status === 200) {
				// 	// localStorage.setItem("payload", JSON.stringify(res?.data?.SavedUser));
                //     Cookies.set('user',JSON.stringify(res?.data?.SavedUser))
				// 	const res2 = await fetch(`${Base_URL}/api/sign-up/verifyemail`, {
                //         method: "POST",
                //         body: JSON.stringify({
				// 		    code: res?.data?.SavedUser?.code,
				// 	    }),
                //         headers: {
                //             "Content-Type": "application/json"
                //         }
                //     });
				// 	localStorage.setItem(
				// 		"code",
				// 		JSON.stringify(res?.data?.SavedUser?.code)
				// 	);
				// 	route.push('/sign-in')
				// }
			}
			else
			{
				let errorList: any = {}
				if(name.length == 0)
				{
					errorList.name = 'Name is required!'
				}
				else if(name.length < 3)
				{
					errorList.name = 'Name is not valid!'
				}
				errorList.email = email.length == 0 ? 'Email is required!' : email.length < 7 ? 'Email is not valid!' : ''
				errorList.password = password.length == 0 ? 'Password is required!' : password.length < 8 ? 'Password is not valid!' : ''
				setError(errorList)
			}

		} catch (error: any) {
			if (error?.response?.data?.message === "Email Already Taken.") {
				setEmail("Email Already Taken");
			}
		}
		setSubmiting(false)
    }
    return (
        <ThemeProvider theme={theme}>
            <Grid container className="d-flex flex-wrap justify-content-center" component="main" sx={{ width: '100%', height: '100%', minHeight: '100vh' }}>
                <CssBaseline />
                <Grid item xs={12} className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor: 'rgb(25 135 84 / 20%)', padding: '5rem'}}>
                    <Image src={Logo} width={'350px'} height={'40px'} />
                    <h4 className="mt-4">Register yourselft in The Handover</h4>
                </Grid>
                <Grid className="d-flex flex-wrap justify-content-center w-100">
                <Form className={`shadow px-4 py-4`} component="form" onSubmit={(e: any)=>handleSubmit(e)}>
                    <Box className="text-center">
                        <Typography component="h1" variant="h5">
                        Sign Up
                        </Typography>
                    </Box>
                    <Box className="my-3">
                        <TextField fullWidth type="text" id="name" name="name" label="Name" variant="filled" value={user.name} onChange={(e)=>handleInputs(e)} required />
                        {error.name!='' ? <small style={{ color: "red", fontSize: '11px' }}>{error.name}</small> : ""}
                    </Box>
                    <Box className="my-3">
                        <TextField fullWidth type="email" id="email" name="email" label="Email" variant="filled" value={user.email} onChange={(e)=>handleInputs(e)} required />
                        {error.email!='' ? <small style={{ color: "red", fontSize: '11px' }}>{error.email}</small> : ""}
                    </Box>
                    <Box className="my-3">
                        <TextField fullWidth type="password" id="password" name="password" label="Password" variant="filled" value={user.password} onChange={(e)=>handleInputs(e)} />
                        {error.password!='' ? <small style={{ color: "red", fontSize: '11px' }}>{error.password}</small> : ""}
                    </Box>

                    <Box className="my-3">
                        <TextField fullWidth type="tel" id="phone" name="phone" label="Phone" variant="filled" value={user.phone} onChange={(e)=>handleInputs(e)} />
                    </Box>

                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Select Designation</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="Buyer" control={<Radio sx={{ '&.Mui-checked': { color: '#00c194', }, }} />} label="Buyer" onChange={(e: any) => setUserType(e.target.value)} />
                            <FormControlLabel value="Seller" control={<Radio sx={{ '&.Mui-checked': { color: '#00c194', }, }} />} label="Seller" onChange={(e: any) => setUserType(e.target.value)} />
                        </RadioGroup>
                    </FormControl>
                    <Box className="my-3">
                        <FormControlLabel
                            control={<Checkbox sx={{
                                '&.Mui-checked': {
                                    color: '#00c194',
                                },
                                }}/>}
                            label="I agree the Term and Conditions"
                        />
                    </Box>
                    <SignUpButton
                        type={`${submiting==true ? 'button' : 'submit'}`}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 2, p: 1, fontSize: 16 }} 
                        color="primary"
                    >
                        Sign Up
                        {
                            submiting==true && (
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 128 128" xmlSpace="preserve" style={{marginLeft: '1rem'}}><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#116c57" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1200ms" repeatCount="indefinite" /></g></svg>
                            )
                        }
                    </SignUpButton>
                    <Grid container className="text-center">
                        <Grid item xs={12}>
                            <Link href="/sign-in">
                                <MUILink variant='body2'>{"Alerady have an account? Sign In"}</MUILink>
                            </Link>
                        </Grid>
                    </Grid>
                </Form>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default SingUp