import axios from 'axios'
import { NextApiRequest, NextApiResponse } from "next";
import { API_LINK } from "../../config/constants";

async function handler(req:NextApiRequest, res: NextApiResponse) {
    
    if(req.method=='POST')
    {
        let url = `${process.env.API_URL}/signin`
        let result = await axios({
            method: "POST",
            url:url,
            data: req.body
        }).then(response => {
            return response.data
        }).catch(err => {
            console.log('Errors',err.response)
            return res.status(200).json({status: 0, message: err.response.data.message})
        });
        return res.status(200).json({status: 1, data: result})
    }

    return res.status(200).json({status:0,message: 'Api is not valid'})
}

export default handler