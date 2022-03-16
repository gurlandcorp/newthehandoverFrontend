import { Card, Box, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'
import axios from 'axios'
import type { NextPage } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'
import CustomPaper from '../../components/Shares/Components/CustomPaper'
import { API_LINK } from '../../config/constants'
import image from "../../public/assets/img/bg-home.jpg"

const SellerDashboard: NextPage = (props: any) => {

    const styles = makeStyles({
        cardWrapper: {
            position: 'absolute',
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
                background: `linear-gradient(45deg, rgb(0 0 0 / 20%), rgb(0 0 0 / 20%)), url(${image.src})`,
                backgroundPosition: "center",
                marginBottom: "6rem"
            }}>
            <h4 className="text-white text-center">Hi {props.user.name}, Welcome to dashboard</h4>
            <Grid container className={`gap-4 ${style.cardWrapper}`}>
                <Grid item xs={12} md={4} lg={3} className={`p-3 bg-white shadow rounded-3 flex-row-reverse ${style.card}`} >
                    <Box>
                        <svg xmlns="http://www.w3.org/2000/svg" className={style.svg} viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </Box>
                    <Box className="flex-grow-1">
                        <p>Properties</p>
                        <p className={style.count}>{props.data.properties}</p>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4} lg={3} className={`p-3 bg-white shadow rounded-3 flex-row-reverse ${style.card}`} >
                    <Box>
                        <svg xmlns="http://www.w3.org/2000/svg" className={style.svg} viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </Box>
                    <Box className="flex-grow-1">
                        <p>Bidding</p>
                        <p className={style.count}>{props.data.biddings}</p>
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
        <CustomPaper>
            <Typography component="h3">
                Bidders Activity
            </Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Bidder name</TableCell>
            <TableCell align="right">biddings</TableCell>
            <TableCell align="right">Accepted</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell align="left">{'John Smith'}</TableCell>
              <TableCell align="right">{'30'}</TableCell>
              <TableCell align="right">{'20'}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell align="left">{'John Smith'}</TableCell>
              <TableCell align="right">{'30'}</TableCell>
              <TableCell align="right">{'20'}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell align="left">{'John Smith'}</TableCell>
              <TableCell align="right">{'30'}</TableCell>
              <TableCell align="right">{'20'}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell align="left">{'John Smith'}</TableCell>
              <TableCell align="right">{'30'}</TableCell>
              <TableCell align="right">{'20'}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </CustomPaper>
        </>
    )
}

export default SellerDashboard


export async function getServerSideProps(context: any) {
    let user = JSON.parse(context.req.cookies.user)

    const res: any = await axios({
        method: "POST",
        url: `${API_LINK}/property/sellercounts`,
        headers: {
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

    return {
        props: {
            user: user,
            data: res
        },
    }
}