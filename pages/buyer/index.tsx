import type { NextPage } from 'next'
import { parseCookies } from 'nookies'
import React, {useEffect} from 'react'

import { Card, Box, Grid } from '@mui/material'
import { green } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'
import image from "../../public/assets/img/bg-home.jpg"

const Buyer: NextPage = (props: any) => {

    const {user} = parseCookies()

    const styles = makeStyles({
        cardWrapper: {
            position: 'absolute',
            left: '2rem',
            bottom: '-3rem',
            width: "100%"
        },
        card: {
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: "center",
            margin: "0 1rem",
            '& p': {
                color: '#626262',
                width: '100%',
                margin: 0
            }
        },
        svg: {
            width: '60px',
            height: '60px',
            padding: "1rem",
            borderRadius: "100%",
            backgroundColor: green[700]
        },
        count: {
            fontSize: "20px",
            color: "#108d6f !important",
            fontWeight: "600"
        }
    })

    const style = styles()

    useEffect(()=> {

    },[user])

    return (
        <>
        <Card style={{
            boxShadow: '0px 10px 10px 0px #ddd',
            height: '300px', display: 'flex',
            color: "#fff",
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'visible',
            background: `url(${image.src})`,
            backgroundPosition: "center"
            }}>
            <h4 className="text-white">Hi {props.user.name}, Welcome to dashboard</h4>
            <Grid container className={`gap-4 ${style.cardWrapper}`}>
                <Grid item xs={12} md={4} lg={3} className={`p-3 bg-white shadow rounded-3 flex-row-reverse ${style.card}`} >
                    <Box>
                        <svg xmlns="http://www.w3.org/2000/svg" className={style.svg} viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </Box>
                    <Box className="flex-grow-1">
                        <p>Bidding</p>
                        <p className={style.count}>10</p>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4} lg={3} className={`p-3 bg-white shadow rounded-3 flex-row-reverse ${style.card}`} >
                    <Box>
                        <svg xmlns="http://www.w3.org/2000/svg" className={style.svg} viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </Box>
                    <Box className="flex-grow-1">
                        <p>Approval</p>
                        <p className={style.count}>2</p>
                    </Box>
                </Grid>

                {/* <Grid item xs={12} md={4} lg={3} className="p-3 bg-white shadow rounded-3" >
                    <svg xmlns="http://www.w3.org/2000/svg" className={style.svg} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <p>Biddings</p>
                    <p className={style.count}>10</p>
                </Grid> */}
            </Grid>
        </Card>
        </>
    )
}

export default Buyer

export async function getServerSideProps(context: any) {
    let user = JSON.parse(context.req.cookies.user)
    return {
      props: {
        user: user
      }
    }
}