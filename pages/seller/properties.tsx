import React from 'react'
import { Grid, Paper } from '@mui/material'
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
import { Base_URL } from '../../config/constants';
import { NextResponse } from 'next/server';
import { parseCookies } from 'nookies'
import Cookies from "js-cookie"


const Seller = (props: any) => {

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
    return (
        <Grid container>
            <Grid item py={2} width={'100%'} className={`d-flex flex-wrap justify-content-between`}>
                <h4 className="mb-0">Properties</h4>
                <AddItemButton href="/seller/property/add">Add new property</AddItemButton>
            </Grid>
            <Paper className="my-4 w-100 p-2">
                <Grid item width={'100%'} py={2}>
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
                                    <TableSortLabel>Title</TableSortLabel>
                                </TableCell>
                                <TableCell align={'left'} padding={'normal'} sortDirection={false} >
                                    <TableSortLabel >Area</TableSortLabel>
                                </TableCell>
                                <TableCell align={'left'} padding={'normal'} >
                                    <TableSortLabel>
                                    Bedrooms
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align={'left'} padding={'normal'} >
                                    <TableSortLabel>Bathrooms</TableSortLabel>
                                </TableCell>
                                <TableCell align={'left'} padding={'normal'} >
                                    <TableSortLabel>Type</TableSortLabel>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.data.properties.map((property: any) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} >
                                            {/* <TableCell padding="checkbox">
                                                <Checkbox color="primary" />
                                            </TableCell> */}
                                            <TableCell component="th" scope="row" padding="none" > {property.propertyTitle} </TableCell>
                                            <TableCell align="left">{property.area}</TableCell>
                                            <TableCell align="left">{property.bedrooms}</TableCell>
                                            <TableCell align="left">{property.bathrooms}</TableCell>
                                            <TableCell align="left">{property.propertyType}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </Grid>
            </Paper>
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

    return { 
        props: { 
            data: {
                properties
            }
        }
    }
}