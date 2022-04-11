import { Grid } from '@mui/material'
import React from 'react'
import BreadCrumb from '../../components/Shares/Components/user/BreadCrumb'
import MyBiddings from '../../components/Dashboard/Buyer/MyBiddings'

const Biddings = (props: any) => {

    const Links = [
        {
            href: "/buyer",
            text: "Dashboard"
        },
        {
            text: "My Bids"
        }
    ]
    return (
        <>
            <BreadCrumb Links={Links} />

            <div className="p-4">
                <div className="my-4 pb-4 flex justify-between items-center">
                    <h3 className="text-2xl theme-color">My Biddings</h3>
                </div>
                <div className="mt-4">
                </div>
            </div>

            <Grid container>
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