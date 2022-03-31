import axios from 'axios'
import { NextApiRequest, NextApiResponse } from "next";
import Cors from 'cors'
import { Stripe_Keys } from '../../../../config/constants';

const cors = Cors({
    methods: ['POST'],
})

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

async function handler(req:NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, cors)
    if(req.method=='POST')
    {
        let keys = Stripe_Keys[process.env.NODE_ENV];
        const stripe = require('stripe')(keys.Secret_Key)
        try {
            let result = await stripe.tokens.create({
                card: {
                  number: '4242424242424242',
                  exp_month: 3,
                  exp_year: 2023,
                  cvc: '314',
                },
            });
            return res.status(200).json({result});
        }
        catch(e:any) {
            return res.status(200).json({error: e.raw.message});
        }
    }

    return res.status(200).json({status:0,message: 'Api is not valid'})
}

export default handler