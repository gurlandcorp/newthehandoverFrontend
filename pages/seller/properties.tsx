import React, { useState } from 'react'
import type { NextPage } from 'next';
import { Box, ButtonBase, Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import AddItemButton from '../../components/Shares/Dashboard/Button';
import { Base_URL } from '../../config/constants';
import PropertiesList from '../../components/Dashboard/Seller/Properties/PropertiesList';
import Image from "next/image"

const useStyles = makeStyles(({ breakpoints }: any) => ({
    root: {
      margin: 'auto',
      borderRadius: '16px', // 16px
      transition: '0.3s',
      boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
      position: 'relative',
      maxWidth: 500,
      marginLeft: 'auto',
      overflow: 'initial',
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '16px',
    },
    media: {
      width: '88%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '-2rem',
      height: 0,
      paddingBottom: '48%',
      borderRadius: '16px',
      backgroundColor: '#fff',
      position: 'relative',
      '&:after': {
        content: '" "',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
        borderRadius: '16px', // 16
        opacity: 0.5,
      },
    },
    content: {
      padding: 24,
    },
    cta: {
      marginTop: 24,
      textTransform: 'initial',
    },
}));  


const Seller: NextPage = (props: any) => {

    interface Data {
        calories: number;
        carbs: number;
        fat: number;
        name: string;
        protein: number;
    }

    interface HeadCell {
        disablePadding: boolean;
        id: keyof Data;
        label: string;
        numeric: boolean;
    }
    const headCells: readonly HeadCell[] = [
        {
          id: 'name',
          numeric: false,
          disablePadding: true,
          label: 'Dessert (100g serving)',
        },
        {
          id: 'calories',
          numeric: true,
          disablePadding: false,
          label: 'Calories',
        },
        {
          id: 'fat',
          numeric: true,
          disablePadding: false,
          label: 'Fat (g)',
        },
        {
          id: 'carbs',
          numeric: true,
          disablePadding: false,
          label: 'Carbs (g)',
        },
        {
          id: 'protein',
          numeric: true,
          disablePadding: false,
          label: 'Protein (g)',
        },
    ];

    const [properties, setProperties] = useState(props.data.properties)
    const [add, setAdd] = useState(false);
    const styles = useStyles()
    return (
        <Grid container>
            <Grid item py={2} width={'100%'} className={`flex flex-wrap justify-between`}>
                <h4 className="mb-0 text-xl">Properties</h4>
                <AddItemButton href="/seller/property/add">Add new property</AddItemButton>
            </Grid>
            <PropertiesList properties={properties} setProperties={setProperties} />
        </Grid>
    )
}

export default Seller


export async function getServerSideProps(context: any) {
    // Fetch data from external API
    let properties = []
    let cookies = context.req.headers.cookie.split('token=')
    let token = cookies[1].split(';')
    token = token[0]
    const res = await fetch(`${Base_URL}/api/seller/properties`,{
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        return response.json()
    })

    if(res.status!=0)
    {
        properties = await res.data
    }

    let user = JSON.parse(context.req.cookies.user)

    return { 
        props: {
            user: user,
            data: {
                properties
            }
        }
    }
}