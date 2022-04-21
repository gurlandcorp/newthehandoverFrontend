import React, { useContext, useState } from 'react'
import AddItemButton from '../../../components/Shares/Dashboard/Button'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { MainContext } from '../../../context/MainContext'
import Link from 'next/link'
import Image from 'next/image'

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
    const {setAlert, setAlertMessage} = useContext(MainContext)
	const [user, setUser] = useState(initialState);
	const [propertyType, setpropertyType] = useState("");
	const [countrySate, setCountrySate] = useState("");
	const [multiImages, setMultiImages] = useState([]);
    const [loading, setLoading] = useState(false)

	const handleInputs = (e: any) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};
    const route = useRouter()

    const multiImagesChange = async (e: any) => {
		await setMultiImages(e.target.files);
        let files:any = [];
        await Array.from(e.target.files).forEach((file:any) => {
            files.push(URL.createObjectURL(file))
        })
        console.log(files)
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
			bathrooms,
			priceDemand,
			biddingEnd,
			address,
			city,
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

		// let requestOptions: any = {
		// 	method: "POST",
		// 	headers: myHeaders,
		// 	body: formdata,
		// };

        // let res = await fetch(`${Base_URL}/api/seller/properties/add`, requestOptions)
		// .then((response) => response.json())
		// .catch((error) => console.log("error", error));

        let result = await axios({
            method: "POST",
            url: `${'https://handoverbackendapp.herokuapp.com'}/property/add`,
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
            route.push('/seller/properties')
            await setUser(initialState)
            setAlert(true)
            setAlertMessage('Property added successfully')
            setCountrySate('')
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
		  value: 'Dubai',
		  label: 'Dubai',
		}
	];

    return (
        <>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-2 hover:text-gray-700 rounded" style={{ backgroundColor: '#fbfbfb' }}>
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <nav className="bg-grey-light rounded-md w-full" aria-label="breadcrumb">
                        <ol className="list-reset flex text-sm">
                            <li>
                                <Link href="/seller">
                                    <a className="text-black">Dashboard</a>
                                </Link> /&nbsp;
                            </li>
                            <li>
                                <Link href="/seller/properties"><a className="text-black">Properties</a></Link> /&nbsp;
                            </li>
                            <li><span className="text-gray-500">Add new property</span></li>
                        </ol>
                    </nav>
                </div>
            </nav>
            <div className="p-4">
                <div className="my-4 pb-4 flex justify-between items-center border-b border-solid border-gray-300">
                    <h3 className="text-2xl theme-color">Add new property</h3>
                    <div>
                        <Link href="/seller/properties">
                            <a className="px-4 py-1 bg-black text-white rounded-full transition-all duration-300">Properties list</a>
                        </Link>
                    </div>
                </div>
                <div className="mt-4 bg-white rounded-xl">
                    <form onSubmit={(e: any)=>handleSubmit(e)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-10 pb-6 border-solid border-b">
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="propertyTitle" className="text-gray-500">Property title <span className="text-red-500">*</span></label>
                                <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="propertyTitle" name="propertyTitle" placeholder="Property title" value={user.propertyTitle} onChange={(e)=>handleInputs(e)} />
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="area" className="text-gray-500">Area <span className="text-red-500">*</span></label>
                                <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="area" name="area" placeholder="Area" value={user.area} onChange={(e)=>handleInputs(e)} />
                            </div>
                            <div className="grid grid-cols-2 gap-4 gap-x-10 col-span-2">
                                <div className="flex flex-col">
                                    <label htmlFor="description" className="text-gray-500">Description</label>
                                    <textarea className="px-3 py-1 rounded-lg bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="description" name="description" placeholder="Description" value={user.description} onChange={(e)=>handleInputs(e)} rows={5}></textarea>
                                </div>
                                <div>
                                    <div className="grid grid-cols-1 gap-2 mb-4">
                                        <label htmlFor="bedrooms" className="text-gray-500">Bedrooms <span className="text-red-500">*</span></label>
                                        <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="bedrooms" name="bedrooms" placeholder="Bedrooms" value={user.bedrooms} onChange={(e)=>handleInputs(e)} />
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        <label htmlFor="floors" className="text-gray-500">Floors <span className="text-red-500">*</span></label>
                                        <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="floors" name="floors" placeholder="Floors" value={user.floors} onChange={(e)=>handleInputs(e)} />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="bathrooms" className="text-gray-500">Bathrooms <span className="text-red-500">*</span></label>
                                <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="bathrooms" name="bathrooms" placeholder="Bathrooms" value={user.bathrooms} onChange={(e)=>handleInputs(e)} />
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="priceDemand" className="text-gray-500">Price Demand <span className="text-red-500">*</span></label>
                                <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="priceDemand" name="priceDemand" placeholder="Price Demand" value={user.priceDemand} onChange={(e)=>handleInputs(e)} />
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="biddingEnd" className="text-gray-500">Bid End <span className="text-red-500">*</span></label>
                                <input type="date" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="biddingEnd" name="biddingEnd" value={user.biddingEnd} onChange={(e)=>handleInputs(e)} />
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="type" className="text-gray-500">Select property type <span className="text-red-500">*</span></label>
                                <select className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="type" name="type" defaultValue={propertyType} onChange={(e) => setpropertyType(e.target.value)}>
                                    <option value="">Select property type</option>
                                    {
                                        property_types.map((option) => (
                                            <option key={option.value} value={option.value}>{option.label}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="address" className="text-gray-500">Address <span className="text-red-500">*</span></label>
                                <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="address" name="address" placeholder="Address" value={user.address} onChange={(e)=>handleInputs(e)} />
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="city" className="text-gray-500">City <span className="text-red-500">*</span></label>
                                <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="city" name="city" placeholder="City" value={user.city} onChange={(e)=>handleInputs(e)} />
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="state" className="text-gray-500">Select state <span className="text-red-500">*</span></label>
                                <select className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="state" name="state" defaultValue={countrySate} onChange={(e) => setCountrySate(e.target.value)}>
                                    <option value="">Select state</option>
                                    {
                                        states.map((option) => (
                                            <option key={option.value} value={option.value}>{option.label}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <label htmlFor="zip" className="text-gray-500">Zip Code <span className="text-red-500">*</span></label>
                                <input type="text" className="px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="zip" name="zip" placeholder="Zip Code" value={user.zip} onChange={(e)=>handleInputs(e)} />
                            </div>
                            <div className="grid grid-cols-1 gap-2 col-span-2">
                                <label htmlFor="images" className="text-black font-medium border border-solid border-gray-500 px-10 py-1 w-max rounded-full cursor-pointer">Upload property images</label>
                                <input type="file" className="hidden px-3 py-1 rounded-full bg-white border border-solid focus:border-1 focus:border-blue-500 transition-all duration-300" id="images" name="images" multiple onChange={(e) => multiImagesChange(e)} />
                            </div>
                            {
                                multiImages.length > 0 && (
                                    <div className="grid grid-cols-1 gap-2 col-span-2">
                                        <div className="flex flex-wrap">
                                        {
                                            Array.from(multiImages).map((link:any, i: any) => {
                                                return (
                                                    <div className="relative border border-solid mr-2 rounded" style={{width:"200px", height:"200px"}} key={i}>
                                                        <Image src={URL.createObjectURL(link)} layout="fill" className="object-contain" alt='Multiple Images' />
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="mt-4">
                            <button className="btn bg-black text-white rounded-full px-4 py-1 mr-4" disabled={loading ? true : false}>Save {
                            loading &&
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 128 128" xmlSpace="preserve" style={{marginLeft: '1rem'}}><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#252153" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1200ms" repeatCount="indefinite" /></g></svg>
                            }
                        </button>
                            <Link href={'/seller/properties'}>
                                <a className="btn bg-red-100 hover:bg-red-500 text-red-500 hover:text-white rounded-full px-4 py-1 mr-4 transition-all duration-300">Cancel</a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>


        {/* <Grid container className="hidden">
            <Grid item py={2} width={'100%'} className={`flex flex-wrap justify-between`}>
                <h4 className="text-xl font-medium">Add new property</h4>
                <AddItemButton href="/seller/properties" startIcon={<ListAltSharp />}>Properties list</AddItemButton>
            </Grid>
            <CustomPaper>
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
                            <MenuItem key={option.value} value={option.value}>
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
                        <AddItemButton loading={loading} startIcon={<Add />}>Add Property</AddItemButton>
                    </Grid>
                </Grid>
            </CustomPaper>
        </Grid> */}
        </>
    )
}

export default PropertyAdd

export async function getServerSideProps(context: any) {
    let user = JSON.parse(context.req.cookies.user)
    return {
      props: {
        user: user
      },
    }
}