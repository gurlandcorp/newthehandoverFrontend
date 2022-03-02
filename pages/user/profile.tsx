import { Box, Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import CustomPaper from '../../components/Shares/Components/CustomPaper'
import BreadCrumb from '../../components/Shares/Components/user/BreadCrumb'
import Avatar from '@mui/material/Avatar'
import { parseCookies } from "nookies"
import { API_LINK, Base_URL } from '../../config/constants'

function stringToColor(string: string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
}  

function stringAvatar(name: string) {
    return {
        sx: {
            width: "100px",
            height: "100px",
            bgcolor: stringToColor(name),
        },
        children: name.split(' ').length > 1 ? `${ name.split(' ')[0][0]}${name.split(' ')[1][0]}` : `${ name.split(' ')[0][0]}`,
    };
}

const Profile: NextPage = (props: any) => {

    return (
        <>
            <BreadCrumb>
               <Link href={'/'}>
                    <a> Home </a>
               </Link>
               <Typography> Profile </Typography>
            </BreadCrumb>

            <CustomPaper>
                <Grid container className="p-4">
                    <Grid item xs={12} md={3}>
                        <Avatar {...stringAvatar(props.user.name)} />
                        {props.user.name}
                    </Grid>
                    <Grid item xs={12} md={9} className="border"></Grid>
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