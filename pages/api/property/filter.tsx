import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    if(req.method=="POST")
    {
        // let result = await axios.get(`${process.env.API_URL}/property/filter/others`, JSON.stringify(req.body), {
        //     headers: { "Content-Type": "application/json" }
        // }).then(response => {
        //     return response.data
        // })
        let result = await axios({
            method: "GET",
            url: `${process.env.API_URL}/property/filter/others`,
            headers: {
                "Content-Type": "application/json"
            },
            data: req.body
        }).then(response => {
            return response.data
        }).catch(err => {
            console.log("error in opportunties filter request", err);
        });
        
        return res.status(200).json({data: result})
    }
    return res.status(200).json({error: "Request is not valid!"})
}