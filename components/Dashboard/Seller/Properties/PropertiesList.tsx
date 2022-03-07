import React, { useState } from 'react'
import { Grid, IconButton } from '@mui/material'
import { ButtonProps } from "@mui/material/Button"
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Delete, Edit } from '@mui/icons-material';
import { Base_URL } from '../../../../config/constants';
import EditProperty from './EditProperty';

const PropertiesList = (props: any) => {

    const [property, setProperty] = useState(null)
    const delProperty = async (id: any) => {
        let res = await fetch(`${Base_URL}/api/seller/properties/delete`, {
            method: "POST",
            body: JSON.stringify({
                _id: id
            })
        }).then(response => response.json())
        if(res.status!=0)
        {
            props.setProperties(props.properties.filter((property: any) => property._id !== id))
        }
    }

    const editProperty = async (property_data: any) => {
        setProperty(property_data)
    }

    return (
        <Grid item className="my-4 w-100 py-2 px-4" width={'100%'} py={2}>
            {
                property == null ? (
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
                                props.properties?.map((property: any, index: any) => {
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
                                                <IconButton>
                                                    <Edit color="success" onClick={(e: any)=>editProperty(property)} />
                                                </IconButton>
                                                <IconButton>
                                                    <Delete color="error" onClick={(e: any)=>delProperty(property._id)} />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                ) : (
                    <EditProperty property={property} setProperty={setProperty} />
                )
            }
        </Grid>
    )
}

export default PropertiesList