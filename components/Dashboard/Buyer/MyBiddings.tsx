import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@mui/styles'
import image from "../../../public/assets/img/bg-home.jpg"
import Image from "next/image"
import { Box, Grid } from '@mui/material'

const useStyles = makeStyles({
    card: {
        background: '#fff',
        boxShadow: '0px 0px 10px 0px #ddd',
        borderRadius: '10px',
        margin: "1rem",
        "& p": {
            marginBottom: "0.5rem",
            wordBreak: "break-all"
        },
        "& h4": {
            margin: "1rem 0px"
        },
        "& a": {
            display: 'block',
            marginBottom: '1rem',
            background: 'linear-gradient(125deg, #e8f9f5, #e8f9f5)',
            width: 'fit-content',
            padding: '0.5rem 1rem',
            borderRadius: '15px',
            color: '#565656',
            transition: "all 0.3s ease-in-out"
        },
        "& a:hover": {
            boxShadow: "1px 6px 10px 0px #dddddda1",
            transform: "translateY(-2px)"
        }
    },
    cardImage : {
        overflow: 'hidden',
        borderRadius: '15px',
        height: "fit-content"
    }
})

const MyBiddings = (props: any) => {

    const style = useStyles()

    return (
        <Grid container>
            {
                props.biddings.map((bid: any, index: any) => {
                    if(bid.Property.length > 0)
                    {
                        return (
                            <Grid item p={2} sm={12} md={6} key={index}>
                                <Box className={`${style.card} align-items-center`} sx={{display: {lg: "flex",md:"block"}}}>
                                    <Box className={`${style.cardImage}`} sx={{
                                        width: {md: '100%', lg: '400px'},
                                        transform: {md: 'translateY(-30px)',lg:'translateX(-30px)'},
                                        }}>
                                        <Image src={image.src} layout="responsive" width={image.width} height={image.height}  />
                                    </Box>
                                    <div style={{width: "100%", padding: "1rem"}}>
                                        <h4>{bid.Property[0]?.propertyTitle}</h4>
                                        <p>{bid.Property[0].description}</p>
                                        <p>Amount: <span className="alert-primary text-primary badge">{Intl.NumberFormat('en-US').format(bid.Property[0].priceDemand)}</span></p>
                                        <p>Bid Amount: <span className="alert-primary text-primary badge">{Intl.NumberFormat('en-US').format(bid.bidAmount)}</span></p>
                                        <span>Status: {bid.Property[0].winner == false ? <span className="text-success alert-info badge">Winner</span> : <span className="text-danger alert-warning badge">No approved</span> }</span>
                                        <Link href={`/opportunity/${bid.Property[0]._id}`}>
                                            <a className="mt-3">Read more</a>
                                        </Link>
                                    </div>
                                </Box>
                            </Grid>
                        )
                    }
                })
            }
            {/* <Grid item p={2} sm={12} md={6}>
                <Box className={`${style.card} align-items-center`} sx={{display: {lg: "flex",md:"block"}}}>
                    <Box className={`${style.cardImage}`} sx={{
                        width: {md: '100%', lg: '400px'},
                        transform: {md: 'translateY(-30px)',lg:'translateX(-30px)'},
                        }}>
                        <Image src={image.src} layout="responsive" width={image.width} height={image.height}  />
                    </Box>
                    <div style={{width: "100%", padding: "1rem"}}>
                        <h4>Property titile</h4>
                        <p>Git is a distributed version control system. Every dev has a working copy of the code and...</p>
                        <p>Amount: <span className="alert-primary text-primary badge">30000</span></p>
                        <span>Status: <span className="text-success alert-info badge">Winner</span></span>
                        <a href="/">Read more</a>
                    </div>
                </Box>
            </Grid>
            <Grid item p={2} sm={12} md={6}>
                <Box className={`${style.card} align-items-center`} sx={{display: {lg: "flex",md:"block"}}}>
                    <Box className={`${style.cardImage}`} sx={{
                        width: {md: '100%', lg: '400px'},
                        transform: {md: 'translateY(-30px)',lg:'translateX(-30px)'},
                        }}>
                        <Image src={image.src} layout="responsive" width={image.width} height={image.height}  />
                    </Box>
                    <div style={{width: "100%", padding: "1rem"}}>
                        <h4>Property titile</h4>
                        <p>Git is a distributed version control system. Every dev has a working copy of the code and...</p>
                        <p>Amount: <span className="alert-primary text-primary badge">30000</span></p>
                        <span>Status: <span className="text-danger alert-warning badge">No approved</span></span>
                        <a href="/">Read more</a>
                    </div>
                </Box>
            </Grid> */}
        </Grid>
    )
}

export default MyBiddings