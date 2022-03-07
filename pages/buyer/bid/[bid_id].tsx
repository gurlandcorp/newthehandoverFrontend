import { Grid, Typography, Box, TextField } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link'
import React, { useState } from 'react'
import Alert from '../../../components/Shares/Components/Alert';
import CustomPaper from '../../../components/Shares/Components/CustomPaper';
import BreadCrumb from '../../../components/Shares/Components/user/BreadCrumb'
import AddItemButton from '../../../components/Shares/Dashboard/Button';
import { Base_URL } from '../../../config/constants';

const Bid: NextPage = (props: any) => {

    const [amount, setAmount] = useState(0);
    const [amountErr, setAmountErr] = useState('');
    const [minAmount, setMinAmount] = useState(0);
    const [alertMessage, setAlertMessage] = useState('');
    const [alert, setAlert] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if( amount > minAmount )
        {
            // store new highest bidding amount
            setAmountErr('')
            var sellerId = props.sellerId;
            let res: any = await fetch(`${Base_URL}/api/buyer/bid`, {
                method: "POST",
                body: JSON.stringify({
                    bidAmount: amount,
                    propertyId: props.bid_id,
                    sellerId: props.user._id,
                })
            }).then(response => response.json())
            setAmount(0)
            setAlertMessage(res.Message)
            setAlert(true)

            // fetching new highest bidding amount
            // res = await fetch(`/bidding/highest`, {
            //     method: "GET",
            //     body: JSON.stringify({
            //     propertyId: props.id,
            //     })
            // })
            // await setMinAmount(res.data[0].bidAmount)
        }
        else
        {
            setAmountErr(`Biding ammount will be grater than ${minAmount}!`)
        }
	};

    return (
        <>
            <BreadCrumb>
               <Link href={'/buyer'}>
                    <a> Dashboard </a>
               </Link>
               <span>My Biddings </span>
            </BreadCrumb>
            <CustomPaper>
                <Grid container p={2}>
                    <Grid item component="form" xs={12} onSubmit={(e: any)=>handleSubmit(e)}>
                        <Typography variant="h5" component="h5">Add your bid amount</Typography>
                        <Box className="my-3">
                            <TextField fullWidth label="Amount" variant="filled" value={amount} onChange={(e: any)=>{
                                setAmount(e.target.value)
                                amount <= minAmount ? setAmountErr(`Biding ammount will be grater than ${minAmount}!`) : setAmountErr('')
                                }} />
                            {
                                amountErr!='' && <small className="text-danger" style={{fontSize: '0.8rem'}}>Biding ammount will be grater than {minAmount}!</small>
                            }
                        </Box>
                        <AddItemButton style={{marginRight: '1rem'}}>Add</AddItemButton>
                    </Grid>
                </Grid>
                <Alert open={alert} setAlert={setAlert} message={alertMessage} />
            </CustomPaper>
        </>
    )
}

export default Bid

export async function getServerSideProps(context: any) {
    let user = JSON.parse(context.req.cookies.user)
    
    let res = await fetch(`${process.env.API_URL}/bidding/highest`, {
        method: "POST",
        headers: {
            "Authorization" : `Bearer ${context.req.cookies.token}`
        },
        body: JSON.stringify({
            propertyId: context.query.bid_id,
        })
    }).then(response => response.json())
    console.log(res)
    return {
        props: {
            user: user,
            bid_id: context.query.bid_id,
            highest: res
        }
    }
}