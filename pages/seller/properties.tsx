import React, { useState } from 'react'
import type { NextPage } from 'next';
import { Card, CardContent, CardMedia, Grid, Paper } from '@mui/material'
import { ButtonProps } from "@mui/material/Button"
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/system';
import AddItemButton from '../../components/Shares/Dashboard/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { API_LINK, Base_URL } from '../../config/constants';
import { parseCookies } from 'nookies'
import Cookies from "js-cookie"
import { Delete } from '@mui/icons-material';
import CustomPaper from '../../components/Shares/Components/CustomPaper';

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

    const delProperty = async (id: any) => {
        let res = await fetch(`${Base_URL}/api/seller/properties/delete`, {
            method: "POST",
            body: JSON.stringify({
                _id: id
            })
        }).then(response => response.json())
        if(res.status!=0)
        {
            console.log(res)
        }
    }
    const styles = useStyles()
    return (
        <Grid container>
            <Grid item py={2} width={'100%'} className={`d-flex flex-wrap justify-content-between`}>
                <h4 className="mb-0">Properties</h4>
                <AddItemButton href="/seller/property/add">Add new property</AddItemButton>
            </Grid>
            <CustomPaper>
                <Grid item className="my-4 w-100 py-2 px-4" width={'100%'} py={2}>
                    <Table sx={{ minWidth: '100%' }} aria-labelledby="tableTitle" size={'medium'} >
                        <TableHead>
                            <TableRow>
                                {/* <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                    inputProps={{
                                    'aria-label': 'select all desserts',
                                    }}
                                />
                                </TableCell> */}
                                <TableCell align={'left'} padding={'none'} sortDirection={false} >
                                Title
                                </TableCell>
                                <TableCell align={'left'} padding={'normal'} sortDirection={false} >
                                Area
                                </TableCell>
                                <TableCell align={'left'} padding={'normal'} >
                                Bedrooms
                                </TableCell>
                                <TableCell align={'left'} padding={'normal'} >
                                Type
                                </TableCell>
                                <TableCell align={'left'} padding={'normal'} >
                                Type
                                </TableCell>
                                <TableCell align={'left'} padding={'normal'} >
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                properties?.map((property: any, index: any) => {
                                    return (
                                        <TableRow key={index} hover role="checkbox" tabIndex={-1} >
                                            {/* <TableCell padding="checkbox">
                                                <Checkbox color="primary" />
                                            </TableCell> */}
                                            <TableCell component="th" scope="row" padding="none" > {property.propertyTitle} </TableCell>
                                            <TableCell align="left">{property.area}</TableCell>
                                            <TableCell align="left">{property.bedrooms}</TableCell>
                                            <TableCell align="left">{property.bathrooms}</TableCell>
                                            <TableCell align="left">{property.propertyType}</TableCell>
                                            <TableCell align="left">
                                                <Delete color="error" onClick={()=>delProperty(property._id)} />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </Grid>
            </CustomPaper>
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