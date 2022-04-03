import React, { useContext, useState } from 'react'
import { Box, Grid, IconButton, Typography, Slide } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material';
import { Base_URL } from '../../../../config/constants';
import EditProperty from './EditProperty';
import styles from "./Properties.module.css"
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TransitionProps } from '@mui/material/transitions';
import { MainContext } from '../../../../context/MainContext';

const Transition = React.forwardRef(function Transition(props: TransitionProps & {
        children: React.ReactElement<any, any>;
    }, ref: React.Ref<unknown>,)
    {
        return <Slide direction="up" ref={ref} {...props} />;
    }
);

const PropertiesList = (props: any) => {

    const {setAlert, setAlertMessage} = useContext(MainContext)
    const [property, setProperty] = useState(null)
    const [properties, setProperties] = useState(props.properties)
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
            setProperties(properties.filter((property: any) => property._id !== id))
            setAlert(true)
            setAlertMessage(res.data.Message)
        }
    }

    const editProperty = async (property_data: any) => {
        setProperty(property_data)
    }

    return (
        <>
        <Grid container p={3}>
        {
            property == null ? (
                properties.map((item: any, index: any) => {
                    let currentDate: any = new Date()
                    let propertyEndTime: any = new Date(item.biddingEnd.split('T')[0])
                    currentDate = currentDate.getTime()
                    propertyEndTime = propertyEndTime.getTime()
                    let difference = propertyEndTime - currentDate
                    let Difference_In_Days = difference / (1000 * 3600 * 24)
                    let Difference_In_Hours = (difference % (1000 * 3600 * 24)) / (1000 * 60 * 60)
                    return (
                        <Grid item xs={12} sm={6} key={index} className="p-2 w-100">
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
                                                <div className={`text-black text-lg font-medium`}>
                                                    {item.propertyTitle}
                                                </div>
                                            </Link>
                                            <Typography variant="body2" gutterBottom>
                                                <span className="text-black">Area</span> {item.area}
                                            </Typography>
                                            <div className="text-sm">
                                                <span className="text-black">Bedrooms</span> {item.bedrooms}
                                            </div>
                                            {
                                                (Difference_In_Days > 0 || Difference_In_Hours > 0) && (
                                                    <div className="text-sm">
                                                        <span className="text-black">Duration</span> <span className="text-blue-500 text-xs">{Difference_In_Days.toFixed(0)} days {Difference_In_Hours.toFixed(0)} hours left</span>
                                                    </div>
                                                )
                                            }
                                            <div className="text-sm">
                                                <span className="text-black">Status</span> <span className={`text-xs px-1 rounded ${Difference_In_Days <=0 && Difference_In_Hours<=0 ? 'text-red-500 bg-red-100' : ' text-green-500 bg-green-100'}`}>{Difference_In_Days <=0 && Difference_In_Hours<=0 ? 'Expired' : 'Available'}</span>
                                            </div>
                                            <Link href={`/seller/property/${item._id}`}>
                                                <a style={{fontSize: "14px",fontWeight: "500"}}>View Details</a>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <div className="text-xs text-blue-500 px-1 bg-blue-100 rounded">
                                            {`$${item.priceDemand}`}
                                        </div>
                                    </Grid>
                                    <Box className={styles.propertyActions}>
                                        <IconButton className={styles.edit} onClick={(e: any)=>editProperty(item)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton className={`mx-2 ${styles.delete}`} onClick={(e: any)=>delProperty(item._id)}>
                                            <Delete />
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