import axios from 'axios'
import { NextApiRequest, NextApiResponse } from "next";
import { API_LINK } from "../../config/constants";

async function handler(req:NextApiRequest, res: NextApiResponse) {
    
    if(req.method=='POST')
    {
        let result: any = await axios({
            method: "POST",
            url:`${process.env.API_URL}/signup`, 
            headers: {
                "Content-Type": "application/json"
            },
            data: req.body
        }).then(response => {
            return response
        }).catch(err => {
            return res.status(200).json({status: 0, message: err?.response?.data?.message})
        });

        if (result?.status == 200) {
            let result2 = await axios({
                method: "POST",
                url:`${process.env.API_URL}/signup/verifyemail`, 
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    code: result?.data?.SavedUser?.code,
                }
            }).then(response => {
                return response
            }).catch(err => {
                return res.status(200).json({status: 0, message: err.response.data.message})
            });
        }

        return res.status(200).json({status: 1, data: result})
    }

    return res.status(200).json({status:0,message: 'Api is not valid'})
}

export default handler