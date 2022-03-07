import { Grid, Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import CustomPaper from '../../components/Shares/Components/CustomPaper'
import BreadCrumb from '../../components/Shares/Components/user/BreadCrumb'
import { makeStyles } from '@mui/styles'
import image from "../../public/assets/img/bg-home.jpg"
import Image from "next/image"

const useStyles = makeStyles({
    card: {
        background: '#fff',
        boxShadow: '0px 0px 10px 0px #ddd',
        borderRadius: '10px',
        margin: "1rem",
        "& p": {
            marginBottom: "0.5rem"
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

const Biddings = (props: any) => {

    const style = useStyles()

    return (
        <>
            <BreadCrumb>
               <Link href={'/buyer'}>
                    <a> Dashboard </a>
               </Link>
               <span>My Biddings </span>
            </BreadCrumb>

            <Grid container>
                <Grid item py={2} px={1} width={'100%'}>
                    <h5 className="mb-0">My Biddings</h5>
                </Grid>
                <Grid container>
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
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Biddings

export async function getServerSideProps(context: any) {
    let user = JSON.parse(context.req.cookies.user)
    const res = await fetch(`${process.env.API_URL}/bidding/userbiddings`, {
        headers: {
            "Authorization" : `Bearer ${context.req.cookies.token}`
        }
    }).then(response => response.json())
    console.log(res)
    return {
        props: {
            user: user,
            biddings: res
        }
    }
}