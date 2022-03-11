import React, { useState } from 'react'
import { Box, Grid, IconButton, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide } from '@mui/material'
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
import Image from 'next/image';
import styles from "./Properties.module.css"
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TransitionProps } from '@mui/material/transitions';
import { parseCookies } from 'nookies';

const Transition = React.forwardRef(function Transition(props: TransitionProps & {
        children: React.ReactElement<any, any>;
    }, ref: React.Ref<unknown>,)
    {
        return <Slide direction="up" ref={ref} {...props} />;
    }
);

const PropertiesList = (props: any) => {

    const [property, setProperty] = useState(null)
    const [properties, setProperties] = useState(props.properties)
    const [model, setModel] = useState(false)
    const [bidding, setBidding] = useState<any>({property: {},bidding:[]})
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

    const router = useRouter()

    return (
        <>
        {/* <Grid item className="my-4 w-100 py-2 px-4" width={'100%'} py={2}>
            {
                property == null ? (
                    <Table sx={{ minWidth: '100%' }} aria-labelledby="tableTitle" size={'medium'} >
                        <TableHead>
                            <TableRow>
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
        </Grid> */}
        <Grid container p={3}>
        {
            property == null ? (
                properties.map((item: any, index: any) => {
                    return (
                        <Grid item sm={12} md={6} key={index} className="p-2 w-100">
                            <Grid container className={styles.propertyWrapper} sx={{ marginBottom:{sm:"2rem",xs:"2rem"} }}>
                                <Grid item xs={12} sm={12} md={12} lg={4} sx={{ marginTop:{md:"0px",sm:"-2rem",xs:"-2rem"} }} className={styles.propertyImageContainer}>
                                    <Link href={`/opportunity/${item._id}`}>
                                        <Box sx={{ width: 128, height: 128,overflow:"hidden",borderRadius:"10px",position:"relative" }} component="a" 
                                        style={{ backgroundImage: `url(${item.images[0]})` }}>
                                            {/* <Image src={item.images[0]} layout="fill" /> */}
                                        </Box>
                                    </Link>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={8} container className={styles.PropertyContentContainer}>
                                    <Grid item xs container direction="column">
                                        <Grid item xs>
                                            <Link href={`/opportunity/${item._id}`}>
                                                <Typography gutterBottom variant="subtitle1" component="a" className={styles.propertyTitle}>
                                                {item.propertyTitle}
                                                </Typography>
                                            </Link>
                                            <Typography variant="body2" gutterBottom>
                                            <span className="text-black">Area</span> {item.area}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                            <span className="text-black">bedrooms</span> {item.bedrooms}
                                            </Typography>
                                            <Link href={`/seller/property/${item._id}`}>
                                                <a className={styles.propertyReadmore}>View Details</a>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" component="div" className="badge bg-info bg-opacity-10 text-info rounded-pill">
                                            {`$${item.priceDemand}`}
                                        </Typography>
                                    </Grid>
                                    <Box className={styles.propertyActions}>
                                        <IconButton className={styles.edit}>
                                            <Edit onClick={(e: any)=>editProperty(item)} />
                                        </IconButton>
                                        <IconButton className={`mx-2 ${styles.delete}`}>
                                            <Delete onClick={(e: any)=>delProperty(item._id)} />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })
            ) : (
                <EditProperty property={property} setProperty={setProperty} setProperties={setProperties} />
            )
        }
        </Grid>
        </>
    )
}

export default PropertiesList