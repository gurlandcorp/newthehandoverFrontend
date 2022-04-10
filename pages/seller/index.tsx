import { Card, Box, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material'
import { blue, green } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'
import axios from 'axios'
import type { NextPage } from 'next'
import React from 'react'
import CustomPaper from '../../components/Shares/Components/CustomPaper'
import { API_LINK } from '../../config/constants'
import image from "../../public/assets/img/bg-home.jpg"
import styles from "./Seller.module.css"

const SellerDashboard: NextPage = (props: any) => {

    // const styles = makeStyles({
    //     cardWrapper: {
    //         position: 'absolute',
    //         bottom: '-3rem',
    //         width: "100%"
    //     },
    //     card: {
    //         display: "flex",
    //         flexWrap: 'wrap',
    //         justifyContent: "space-between",
    //         margin: "0 1rem",
    //         '& p': {
    //             color: '#626262',
    //             width: '100%',
    //             margin: 0
    //         }
    //     },
    //     svg: {
    //         width: '60px',
    //         height: '60px',
    //         padding: "1rem",
    //         borderRadius: "100%",
    //         backgroundColor: blue[700]
    //     },
    //     count: {
    //         fontSize: "20px",
    //         color: blue[700] + " !important",
    //         fontWeight: "600"
    //     }
    // })

    // const style = styles()
    return (
        <>
        <nav className="relative w-full flex flex-wrap items-center justify-between py-2 hover:text-gray-700 rounded" style={{ backgroundColor: '#fbfbfb' }}>
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <nav className="bg-grey-light rounded-md w-full" aria-label="breadcrumb">
                    <ol className="list-reset flex">
                        <li><a href="/user" className="text-black">Dashboard</a></li>
                    </ol>
                </nav>
            </div>
        </nav>

        {/* Place your content here */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4 bg-white shadow-xl p-4 rounded-xl">
            <div className="p-4 rounded-xl flex justify-between items-center bg-red-100 border border-red-500">
                <div>
                    <p className="text-red-500">Total Properties</p>
                    <span className="text-red-600 font-semibold">{props.data.properties}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-red-500 text-white border border-red-500 p-1 w-8 h-8 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </div>
            <div className="p-4 rounded-xl flex justify-between items-center bg-blue-100 border border-blue-500">
                <div>
                    <p className="text-blue-500">Total Biddings</p>
                    <span className="text-blue-600 font-semibold">{props.data.biddings}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-blue-500 text-white border border-blue-500 p-1 w-8 h-8 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 mt-20 overflow-hidden rounded-xl shadow-xl bg-white">
                <h3 className="theme-color font-medium pb-4">Bidder Activities</h3>
                <table className={`${styles.table} table-auto w-full`}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Bidder name</th>
                            <th>Biddings</th>
                            <th>Accepted</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        {/* <Card style={{
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
            <h4 className="text-white text-3xl">Hi {props.user.name}, Welcome to dashboard</h4>
            <Grid container className={`gap-4 ${style.cardWrapper}`}>
                <Grid item xs={12} md={4} lg={3} className={`px-5 py-3 bg-white shadow rounded-xl flex-row-reverse ${style.card}`} >
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

                <Grid item xs={12} md={4} lg={3} className={`px-5 py-3 bg-white shadow rounded-xl flex-row-reverse ${style.card}`} >
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
            </Grid>
        </Card> */}
        {/* <CustomPaper>
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
        </CustomPaper> */}
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