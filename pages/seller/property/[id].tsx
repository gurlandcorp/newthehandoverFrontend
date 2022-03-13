import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { fontWeight } from '@mui/system'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import CustomPaper from '../../../components/Shares/Components/CustomPaper'
import { API_LINK, Base_URL } from '../../../config/constants'

const useStyles = makeStyles({
    biddings: {
        "& p" : {
            marginBottom: "10px"
        },
        "& h3": {
            color: "#000000",
            fontWeight: "600",
            fontSize: "20px"
        },
        "& strong" : {
            fontFamily: "Poppins, san-serif",
            color: "#000000",
            fontWeight: "500"
        }
    }
})

const Property = (props:any) => {
    
    const classes = useStyles()
    return (
        <>
            <CustomPaper>
                <Grid container>
                    <Grid item py={2} px={4} width={'100%'} className={`d-flex flex-wrap justify-content-between`}>
                        <h4 className="mb-0">Properties</h4>
                        <div className="d-flex align-items-center">
                            <div>
                            <span>Bidding Start</span> <span className="badge bg-primary bg-opacity-70 mx-2">{props.property.biddingStart.split('T')[0]}</span>
                            </div>
                            <div>
                            <span>Bidding End</span> <span className="badge bg-danger bg-opacity-70 mx-2">{props.property.biddingEnd.split('T')[0]}</span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </CustomPaper>
            <CustomPaper>
                <Grid container className="p-4">
                    <Grid item xs={12} md={6}>
                        <div style={{width: "100%", height: "400px", paddingRight: '1rem'}} className="overflow-hidden">
                            <div className="position-relative">
                                <Image src={props.property.images[0]} width={300} height={300} layout="responsive" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={`mx-2 ${classes.biddings}`}>
                            <div>
                                <h3> {props.property.propertyTitle} </h3>
                            </div>
                            <p>
                                <strong>Area </strong> {props.property.area}
                            </p>
                            <p>
                                <strong>Bedrooms </strong> {props.property.bedrooms}
                            </p>
                            <p>
                                <strong>Bathrooms </strong> {props.property.bathrooms}
                            </p>
                            <p> <strong>Floors </strong> {props.property.floors} </p>
                            <p> <strong>Property Type </strong> {props.property.propertyType} </p>
                            <p> <strong>Demand price </strong> {props.property.priceDemand} </p>
                            <strong>Description</strong>
                            <p> {props.property.description} </p>
                        </div>
                    </Grid>
                </Grid>
            </CustomPaper>
            <CustomPaper>
                <div className={`p-4 ${classes.biddings}`}>
                    <h4>Buyer Biddings</h4>
                    {
                        props.bidding.map((bid:any, index: any) => {
                            return <div key={index} className="mb-3 bg-primary bg-opacity-10 p-2 rounded d-flex justify-content-between">
                                <div>
                                    <p><strong>User Name:</strong> {bid.Bidder[0].name}</p>
                                    <p><strong>Email:</strong> {bid.Bidder[0].email}</p>
                                    <p><strong>Status:</strong> {bid.winner===true ? <span className="badge bg-info text-info bg-opacity-10">Winner</span> : <span className="badge bg-danger text-danger bg-opacity-10">Not-approved</span> }</p>
                                </div>
                                <div>
                                    <span className="badge text-info">{'$'+bid.bidAmount}</span>
                                </div>
                            </div>
                        })
                    }
                    
                </div>
            </CustomPaper>
        </>
    )
}

export default Property

export async function getServerSideProps(context: any) {
    // Fetch data from external API
    // const propRes = await fetch(`${process.env.API_URL}/property/${context.query.id}`)
    // const property = await propRes.json()

    const res: any = await axios({
        method: "GET",
        url: `${API_LINK}/bidding/property`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${context.req.cookies.token}`
        },
        data: {
            propertyId: context.query.id
        }
    })
    .then(response => {
        return response.data
    }).catch(err => {
        console.log("error in opportunties filter request", err.response);
    });

    let user = JSON.parse(context.req.cookies.user)

    return { 
        props: {
            user: user,
            property: res.property,
            bidding: res.events,
        }
    }
}