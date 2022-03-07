import { Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import BreadCrumb from '../../components/Shares/Components/user/BreadCrumb'
import MyBiddings from '../../components/Dashboard/Buyer/MyBiddings'

const Biddings = (props: any) => {

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

                <MyBiddings biddings = {props.biddings} />
            </Grid>
        </>
    )
}

export default Biddings

export async function getServerSideProps(context: any) {
    let user = JSON.parse(context.req.cookies.user)
    const res = await fetch(`${process.env.API_URL}/bidding/userbiddings`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${context.req.cookies.token}`
        }
    }).then(response => response.json())
    return {
        props: {
            user: user,
            biddings: res
        }
    }
}