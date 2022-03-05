import { Add, ListAltSharp } from '@mui/icons-material'
import { Grid, MenuItem, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddItemButton from '../../../components/Shares/Dashboard/Button'
import { parseCookies } from 'nookies'
import {useEffect} from "react";
import { parse } from 'path/posix'
import { API_LINK } from '../../../config/constants'
import axios from 'axios'
import { route } from 'next/dist/server/router'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import CustomPaper from '../../../components/Shares/Components/CustomPaper'
import Alert from '../../../components/Shares/Components/Alert'

const PropertyAdd: NextPage = () => {

    const initialState = {
		propertyTitle: "",
		area: "",
		bedrooms: "",
		floors: "",
		propertyType: "",
		bathrooms: "",
		priceDemand: "",
		biddingEnd: "",
		address: "",
		city: "",
		state: "",
		zip: "",
		description: "",
	};

	const [user, setUser] = useState(initialState);
	const [propertyType, setpropertyType] = useState("");
	const [countrySate, setCountrySate] = useState("");
	const [multiImages, setMultiImages] = useState("");
    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)

	const handleInputs = (e: any) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};
    const route = useRouter()

    const multiImagesChange = (e: any) => {
		setMultiImages(e.target.files);
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
        await setLoading(true)
        const {token}: any = parseCookies()
		const {
			propertyTitle,
			area,
			bedrooms,
			floors,
			propertyType,
			bathrooms,
			priceDemand,
			biddingEnd,
			address,
			city,
			state,
			zip,
			description,
		} = user;

		let myHeaders = new Headers();
		myHeaders.append(
			"Authorization",
			`Bearer ${token}`
		);

		var formdata = new FormData();
		formdata.append("propertyTitle", propertyTitle);
		formdata.append("description", description);
		formdata.append("area", area);
		formdata.append("propertyType", "Constructed");
		formdata.append("address", address);
		formdata.append("bedrooms", bedrooms);
		formdata.append("bathrooms", bathrooms);
		formdata.append("floors", floors);
		formdata.append("priceDemand", priceDemand);
		formdata.append("biddingEnd", biddingEnd);
		formdata.append("images", multiImages[0]);
		formdata.append("city", city);
		formdata.append("state", countrySate);
		formdata.append("zip", zip);

		let requestOptions: any = {
			method: "POST",
			headers: myHeaders,
			body: formdata,
		};
        // let res = await fetch(`${Base_URL}/api/seller/properties/add`, requestOptions)
		// .then((response) => response.json())
		// .catch((error) => console.log("error", error));

        let result = await axios({
            method: "POST",
            url: `${API_LINK}/property/add`,
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            },
            data: formdata
        }).then((response: any) => {
            return response
        }).catch((err: any) => {
            console.log("error in opportunties filter request", err.response);
        });
        if(result?.status==200)
        {
            setUser(initialState)
            setAlert(true)
            setCountrySate('')
        }
        if(result?.savedEvent!= undefined)
        {
            route.push('/seller/properties')
        }
        setLoading(false)
	};

	const property_types = [
		{
		  value: 'Constructed',
		  label: 'Constructed',
		},
		{
		  value: 'Non Constructed',
		  label: 'Non Constructed',
		}
	];

	const states = [
		{
		  value: 'Sharjah',
		  label: 'Sharjah',
		},
		{
		  value: 'Ajman',
		  label: 'Ajman',
		},
		{
			value: 'Fujairah',
			label: 'Fujairah',
		},
		{
			value: 'Umm Al Quwain',
			label: 'Umm Al Quwain',
		}
	];

    return (
        <Grid container>
            <Grid item py={2} width={'100%'} className={`d-flex flex-wrap justify-content-between`}>
                <h4 className="mb-0">Add new property</h4>
                <AddItemButton href="/seller/properties" startIcon={<ListAltSharp />}>Properties list</AddItemButton>
            </Grid>
            <CustomPaper>
                <Grid container component="form" spacing={4} columns={12} className="p-4" onSubmit={(e: any)=>handleSubmit(e)}>
                    <Grid item xs={6}>
                        <TextField fullWidth id="propertyTitle" size="small" name="propertyTitle" label="Property Title" color="primary" variant="filled" value={user.propertyTitle} onChange={(e)=>handleInputs(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth type="number" id="area" size="small" name="area" label="Area" color="primary" variant="filled" value={user.area} onChange={(e)=>handleInputs(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth type="number" id="bedrooms" size="small" name="bedrooms" label="Bed Rooms" color="primary" variant="filled" value={user.bedrooms} onChange={(e)=>handleInputs(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth type="number" id="floors" size="small" name="floors" label="Floors" color="primary" variant="filled" value={user.floors} onChange={(e)=>handleInputs(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth
                        id="standard-select-property-type"
                        select
                        label="Please select property type"
                        value={propertyType}
                        onChange={(e) => setpropertyType(e.target.value)}
                        variant="filled"
                        color="primary"
                        >
                        {property_types.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth type="number" id="bathrooms" size="small" name="bathrooms" label="Bathrooms" color="primary" variant="filled" value={user.bathrooms} onChange={(e)=>handleInputs(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth type="number" id="priceDemand" size="small" name="priceDemand" label="Demand Price" color="primary" variant="filled" value={user.priceDemand} onChange={(e)=>handleInputs(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth type="date" id="biddingEnd" size="small" name="biddingEnd" label="Bidding End" color="primary" variant="filled" value={user.biddingEnd} onChange={(e)=>handleInputs(e)} InputLabelProps={{ shrink: true, }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth id="address" size="small" name="address" label="Address" color="primary" variant="filled" value={user.address} onChange={(e)=>handleInputs(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth id="city" size="small" name="city" label="City" color="primary" variant="filled" value={user.city} onChange={(e)=>handleInputs(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth
                        id="state"
                        name="state"
                        select
                        label="Please select state"
                        value={countrySate}
                        onChange={(e) => setCountrySate(e.target.value)}
                        variant="filled"
                        color="primary"
                        >
                        {states.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth id="zip" size="small" name="zip" label="Zip" color="primary" variant="filled" value={user.zip} onChange={(e)=>handleInputs(e)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth multiline rows={4} id="description" size="small" name="description" label="Description" color="info" variant="filled" value={user.description} onChange={(e)=>handleInputs(e)} />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <input
                            type="file"
                            className="custom-style"
                            name="images"
                            id="images"
                            accept="image/*"
                            multiple
                            onChange={(e) => multiImagesChange(e)}
                            style={{ marginLeft: "0px" }}
                            // hidden
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {/* <SuiButton
                            variant="gradient"
                            color="dark"
                            size="medium"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Add Property
                        </SuiButton> */}
                        <AddItemButton loading={loading} startIcon={<Add />}>Add Property</AddItemButton>
                    </Grid>
                </Grid>
            </CustomPaper>
            <Alert open={alert} setAlert={setAlert} message={'Property added successfully'} />
        </Grid>
    )
}

export default PropertyAdd

export async function getServerSideProps(context: any) {
    let user = JSON.parse(context.req.cookies.user)
    return {
      props: {
        user: user
      }, // will be passed to the page component as props
    }
}