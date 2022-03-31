import { Box, Button, Chip, Grid, IconButton, TextField, Typography } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import CustomPaper from '../../components/Shares/Components/CustomPaper'
import BreadCrumb from '../../components/Shares/Components/user/BreadCrumb'
import { parseCookies } from "nookies"
import Cookies from "js-cookie"
import { API_LINK, Base_URL } from '../../config/constants'
import { Edit } from '@mui/icons-material'
import AddItemButton from '../../components/Shares/Dashboard/Button'
import CancelButton from '../../components/Shares/Components/CancelButton'
import { makeStyles, ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/system'
import Alert from '../../components/Shares/Components/Alert'

const Profile: NextPage = (props: any) => {

    const [alert, setAlert] = useState(false)
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(props.user.name)
    const [email, setEmail] = useState(props.user.email)
    const [phone, setPhone] = useState(props.user.phone)

    const Cancel = async () => {
        await setName(props.user.name)
        await setEmail(props.user.email)
        await setPhone(props.user.phone)
        await setEditable(false)
    }

    const submitProfile = async (e: any) => {
        e.preventDefault()
        let user: any = Cookies.get('user')
        user = user!=undefined ? JSON.parse(user) : null
        let res = await fetch(`${Base_URL}/api/user/profile`, {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone
            })
        }).then(response => response.json())
        await setAlert(true)
        
        user.name = name;
        user.phone = phone
        user.email = email
        Cookies.set('user',JSON.stringify(user))
        setName(name)
        setEmail(email)
        setPhone(phone)
        await setEditable(false)
    }

    const theme = createTheme({
        components: {
            Typography: {
                "& .MuiTypography-h4": {
                    marginBottom: '1rem'
                }
            }
        }
    })
    
    return (
        <>
            <BreadCrumb>
               <Link href={'/'}>
                    <a> Home </a>
               </Link>
               <span> Profile </span>
            </BreadCrumb>

            <CustomPaper>
                <Grid container className="p-4 relative">
                    {
                        editable == false ? (
                            <>
                                <Grid item xs={12} className="mb-3">
                                    <Typography variant="h4" component="h4">Profile information</Typography>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    {/* <Avatar {...stringAvatar(props.user.name)} /> */}
                                    <Box>Name</Box>
                                    <Box>Email</Box>
                                    <Box>Phone</Box>
                                    <Box>Status</Box>
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Box>{name}</Box>
                                    <Box>{email}</Box>
                                    <Box>{phone}</Box>
                                    <Box> <Chip label={props.user.status} size="small" color={props.user.status=="Verified" ? "info" : "error"} /> </Box>
                                    <IconButton className="absolute" style={{right: '1rem', top: '1rem'}} onClick={()=>setEditable(true)}>
                                        <Edit color="info" />
                                    </IconButton>
                                </Grid>
                            </>
                        ) : (
                            <>
                            <Grid item component="form" xs={12} onSubmit={(e: any)=>submitProfile(e)}>
                                <Typography variant="h4" component="h4">Update profile information</Typography>
                                <Box className="my-3">
                                    <TextField fullWidth label="Name" variant="standard" value={name} onChange={(e)=>setName(e.target.value)} />
                                </Box>
                                <Box className="my-3">
                                    <TextField fullWidth label="Email" variant="standard" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                </Box>
                                <Box className="my-3">
                                    <TextField fullWidth label="Phone" variant="standard" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                                </Box>
                                <AddItemButton style={{marginRight: '1rem'}}>Update Profile</AddItemButton>
                                <Button className="bg-danger text-white px-3" style={{borderRadius: '10px',marginLeft: '1rem'}} onClick={()=>Cancel()}>Cancel</Button>
                            </Grid>
                            </>
                        )
                    }
                    
                    <Alert open={alert} setAlert={setAlert} message={'Profile updated successfully'} />
                </Grid>
            </CustomPaper>
        </>
    )
}

export default Profile

export async function getServerSideProps(context: any) {
    // Fetch data from external API
    const res: any = await fetch(`${API_LINK}/user`, {
        method: 'GET',
        headers: {
            "Content-Type" : "application/json",
            "Authorization": `Bearer ${context.req.cookies.token}`
        }
    }).then(response => response.json())

    // Pass data to the page via props
    return {
        props: {
            user: res
        }
    }
}