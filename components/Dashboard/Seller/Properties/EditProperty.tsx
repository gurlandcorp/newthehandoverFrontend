import { Add } from '@mui/icons-material';
import { Button, Grid, MenuItem, TextField } from '@mui/material'
import axios from 'axios';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useContext, useState } from 'react'
import { API_LINK } from '../../../../config/constants';
import { MainContext } from '../../../../context/MainContext';
import AddItemButton from '../../../Shares/Dashboard/Button';
import { Base_URL } from "../../../../config/constants"

const EditProperty = (props: any) => {

    const initialState = {
		propertyTitle: props.property.propertyTitle,
		area: props.property.area,
		bedrooms: props.property.bedrooms,
		floors: props.property.floors,
		propertyType: props.property.propertyType,
		bathrooms: props.property.bathrooms,
		priceDemand: props.property.priceDemand,
		biddingEnd: props.property.biddingEnd.split('T')[0],
		address: props.property.location.address,
		city: props.property.location.city,
		state: props.property.location.state,
		zip: props.property.location.zip,
		description: props.property.description,
	};
    const {setAlert, setAlertMessage} = useContext(MainContext)
	const [user, setUser] = useState(initialState);
	const [propertyType, setpropertyType] = useState(props.property.propertyType);
	const [countrySate, setCountrySate] = useState(props.property.location.state);
	const [multiImages, setMultiImages] = useState("");
    const [loading, setLoading] = useState(false)

    const {token}: any = parseCookies()

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

    const propertyLists = async () => {
        let res = await fetch(`${Base_URL}/api/seller/properties`,{
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        }).then(response => response.json())
        return res
    }

	const handleSubmit = async (e: any) => {
		e.preventDefault();
        await setLoading(true)
        
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

		let formdata = {
            "propertyTitle": propertyTitle,
            "description": description,
            "area": area,
            "propertyType": "Constructed",
            "address": address,
            "bedrooms": bedrooms,
            "bathrooms": bathrooms,
            "floors": floors,
            "priceDemand": priceDemand,
            "biddingEnd": biddingEnd,
            "city": city,
            "state": countrySate,
            "zip": zip,
        }

        let result = await axios({
            method: "PATCH",
            url: `${'https://handoverbackendapp.herokuapp.com'}/property/edit/${props.property._id}`,
            headers: {
                "Content-Type": "application/json",
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
            await setUser(initialState)
            setAlert(true)
            setAlertMessage('Property updated successfully')
            setCountrySate('')
            props.setProperty(null)
            let properties: any = await propertyLists()
            props.setProperties(properties.data)
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
        <Grid container component="form" spacing={4} columns={12} className="p-4" onSubmit={(e: any)=>handleSubmit(e)}>
            <Grid item xs={6}>
                <TextField fullWidth id="propertyTitle" size="small" name="propertyTitle" label="Property Title" color="primary" variant="standard" value={user.propertyTitle} onChange={(e)=>handleInputs(e)} required />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth type="number" id="area" size="small" name="area" label="Area" color="primary" variant="standard" value={user.area} onChange={(e)=>handleInputs(e)} required />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth type="number" id="bedrooms" size="small" name="bedrooms" label="Bed Rooms" color="primary" variant="standard" value={user.bedrooms} onChange={(e)=>handleInputs(e)} required />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth type="number" id="floors" size="small" name="floors" label="Floors" color="primary" variant="standard" value={user.floors} onChange={(e)=>handleInputs(e)} required />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth
                id="standard-select-property-type"
                select
                label="Please select property type"
                value={propertyType}
                onChange={(e) => setpropertyType(e.target.value)}
                variant="standard"
                color="primary"
                required
                >
                {property_types.map((option) => (
                    <MenuItem key={option.value} value={option.value} selected={propertyType==option.value ? true : false}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth type="number" id="bathrooms" size="small" name="bathrooms" label="Bathrooms" color="primary" variant="standard" value={user.bathrooms} onChange={(e)=>handleInputs(e)} required />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth type="number" id="priceDemand" size="small" name="priceDemand" label="Demand Price" color="primary" variant="standard" value={user.priceDemand} onChange={(e)=>handleInputs(e)} required />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth type="date" id="biddingEnd" size="small" name="biddingEnd" label="Bidding End" color="primary" variant="standard" value={user.biddingEnd} onChange={(e)=>handleInputs(e)} InputLabelProps={{ shrink: true, }} required />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth id="address" size="small" name="address" label="Address" color="primary" variant="standard" value={user.address} onChange={(e)=>handleInputs(e)} required />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth id="city" size="small" name="city" label="City" color="primary" variant="standard" value={user.city} onChange={(e)=>handleInputs(e)} required />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth
                id="state"
                name="state"
                select
                label="Please select state"
                value={countrySate}
                onChange={(e) => setCountrySate(e.target.value)}
                variant="standard"
                color="primary"
                required
                >
                {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth id="zip" size="small" name="zip" label="Zip" color="primary" variant="standard" value={user.zip} onChange={(e)=>handleInputs(e)} required />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth multiline rows={4} id="description" size="small" name="description" label="Description" color="info" variant="standard" value={user.description} onChange={(e)=>handleInputs(e)} required />
            </Grid>
            
            {/* <Grid item xs={12}>
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
            </Grid> */}
            <Grid item xs={12}>
                <AddItemButton loading={loading} startIcon={<Add />}>Update Property</AddItemButton>
                <Button className="bg-danger text-white px-3" style={{borderRadius: '10px',marginLeft: '1rem'}} onClick={()=>props.setProperty(null)}>Cancel</Button>
            </Grid>
        </Grid>
    )
}

export default EditProperty