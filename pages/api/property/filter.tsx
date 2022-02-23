import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    if(req.method=="POST")
    {
        let result = await axios.get(`${process.env.API_URL}/property/filter/others`, req.body).then(response => {
            return response.data
        })
        return res.status(200).json({data: result})
    }
    return res.status(200).json({error: "Request is not valid!"})
}