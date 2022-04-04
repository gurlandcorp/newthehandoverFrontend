import React, { useContext, useState } from 'react'
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Base_URL } from '../config/constants';
import cookie from 'js-cookie'
import NextLink from 'next/link';
import Image from 'next/image';
import Logo from "../public/logo.png"
import { MainContext } from '../context/MainContext';
import Loader from "/public/img/loader.svg"

const SignIn: NextPage = ({redirect_to}: any) => {

    const {loading,setLoading} = useContext(MainContext)

    const initialState = {
		email: "",
		password: "",
	}

    const [user, setUser] = useState(initialState)
    const [emailError, setEmailError] = useState("")
    const [forgetPassword, setForgetPassword] = useState(false)
    const [forgetEmail, setForgetEmail] = useState('')
	const [passwordError, setPasswordError] = useState("")
	const [submiting, setSubmiting] = useState(false)

    const handleInputs = (e: any) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

    const router = useRouter()

    const handleSubmit = async (e: any) => {
		e.preventDefault()
		setSubmiting(true)

		setEmailError("")
		setPasswordError("")
		const { email, password } = user;
		if (email === "admin@gmail.com") {
			try {
				const res = await axios.post("/signin/admin", {
					email: email,
					password: password,
				});
				if (res.status === 200) {
					localStorage.setItem("adminAuth", email);
					localStorage.setItem("token", JSON.stringify(res.data.token));
					// window.location = "/admin/allProperties";
					router.push('/admin/allProperties')
				}
			} catch (error) {}
		} else {
			try {
				const res = await fetch(`${Base_URL}/api/sign-in`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: email,
                        password: password
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
				}).then(response => response.json());
                if(res.status==0)
                {
                    setEmailError(res.message)
                }
				else if (res.status === 1) {
                    
                    cookie.set('token',res.data.token)
                    cookie.set('user',JSON.stringify(res.data.payload))
                    if(redirect_to)
                    {
                        router.push(redirect_to)
                    }
                    else
                    {
                        if(res.data.payload.userType=='Seller')
                        {
                            router.push('/seller');
                        }
                        else
                        {
                            router.push('/buyer');
                        }
                    }
				}
			} catch (error: any) {
				if (error?.response?.data?.message === "No User Exist With This Email") {
					setEmailError("No User Exist With This Email");
				}
				if (error?.response?.data?.message === "Invalid Password") {
					setPasswordError("Invalid Password");
				}
			}
		}
		setSubmiting(false)
	}

    const handleSubmitForget = async (e: any) => {
        e.preventDefault()
        setSubmiting(true)
        try {
            const res = await fetch(`${Base_URL}/api/authenticate/forget-password`, {
                method: "POST",
                body: JSON.stringify({
                    email: forgetEmail
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => response.json());
            if(res.status==1)
            {
                setForgetEmail('')
                setForgetPassword(false)
            }
        } catch (error: any) {
            console.log('error', error)
        }
        setSubmiting(false)
    }

    return (
        <>
            <div className={`fixed top-0 left-0 bottom-0 right-0 bg-white z-10 flex justify-center transition-all duration-300 ${loading==true ? '' : 'scale-0'}`}>
                <Image src={Loader} className="delay-100" />
            </div>
            <div className="bg-gray-100 h-screen">
                <div className="width mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-2 bg-white h-screen overflow-hidden">
                            <ul className="flex flex-wrap justify-center p-2">
                                <li>
                                    <NextLink href={'/'}>
                                        <a className="inline-block px-4">Home</a>
                                    </NextLink>
                                </li>
                                <li>
                                    <NextLink href={'/opportunities'}>
                                        <a className="inline-block px-4">Opportunities</a>
                                    </NextLink>
                                </li>
                                <li>
                                    <NextLink href={'/about'}>
                                        <a className="inline-block px-4">About</a>
                                    </NextLink>
                                </li>
                                <li>
                                    <NextLink href={'/contact'}>
                                        <a className="inline-block px-4">Contact us</a>
                                    </NextLink>
                                </li>
                            </ul>
                            <div className="flex flex-wrap justify-center items-center">
                                <div>
                                    <div className="flex flex-col items-center justify-center text-center pt-10">
                                        <div className="w-2/5">
                                            <Image src={Logo.src} width={Logo.width} height={Logo.height} alt="site-logo" className="w-6/12 pb-5" />
                                        </div>
                                        <h3 className="text-2xl font-medium text-blue-900">Sign In</h3>
                                    </div>
                                    <div className="md:mx-16 mx-1 py-10">
                                        {
                                            forgetPassword == true ? (
                                                <form onSubmit={(e: any)=>handleSubmitForget(e)}>
                                                    <div className="pb-5">
                                                        <label htmlFor="" className="w-full">Email</label>
                                                        <input type="email" className="border p-2 px-4 rounded-3xl text-sm w-full" name="email" id="email" placeholder="Email address" value={forgetEmail} onChange={(e)=>setForgetEmail(e.target.value)} required />
                                                    </div>
                                                    <div>
                                                        <button type={`${submiting==true ? 'button' : 'submit'}`} className={`${submiting==true ? 'bg-blue-100 text-blue-700' : 'bg-blue-700 text-white'} w-full rounded-3xl p-2 flex flex-wrap justify-center transition-all duration-300`}>Send email {
                                                                submiting==true && (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 128 128" xmlSpace="preserve" style={{marginLeft: '1rem'}}><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#252153" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1200ms" repeatCount="indefinite" /></g></svg>
                                                                )
                                                            }
                                                        </button>
                                                    </div>
                                                </form>
                                            ) : (
                                                <form onSubmit={(e: any)=>handleSubmit(e)}>
                                                    <div className="pb-5">
                                                        <label htmlFor="" className="w-full">Email</label>
                                                        <input type="email" className="border theme-border-color p-2 px-4 rounded-3xl text-sm w-full" name="email" id="email" placeholder="Email address" value={user.email} onChange={(e)=>handleInputs(e)} required />
                                                        {emailError ? <div className="bg-red-100 mt-2 px-2 rounded-3xl text-red-500 w-full capitalize" style={{ fontSize: '11px' }}>{emailError}</div> : ""}
                                                    </div>
                                                    <div className="pb-5">
                                                        <label htmlFor="" className="w-full">Password</label>
                                                        <input type="password" className="border theme-border-color p-2 px-4 rounded-3xl text-sm w-full" name="password" id="password" placeholder="Password" value={user.password} onChange={(e)=>handleInputs(e)} required />
                                                    </div>
                                                    <div className="text-right pb-5">
                                                        <a onClick={()=>setForgetPassword(true)} className="cursor-pointer text-sm text-blue-500">Forget password</a>
                                                    </div>
                                                    <div>
                                                        <button type={`${submiting==true ? 'button' : 'submit'}`} className={`${submiting==true ? 'bg-blue-100 text-blue-700' : 'bg-theme-color text-white'} w-full rounded-3xl p-2 flex flex-wrap justify-center transition-all duration-300`}>Sign In {
                                                                submiting==true && (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 128 128" xmlSpace="preserve" style={{marginLeft: '1rem'}}><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#252153" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1200ms" repeatCount="indefinite" /></g></svg>
                                                                )
                                                            }
                                                        </button>
                                                    </div>
                                                </form>
                                            )
                                        }
                                        
                                        <div className="bg-white p-5 w-full rounded-xl shadow mt-5 lg:hidden">
                                            <p>If you don&apos;t have any account then click <NextLink href={'/sign-up'}><a className="cursor-pointer text-blue-500">here</a></NextLink> to register yourself</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ background: 'linear-gradient(309deg, #2b6cb0e0, #282452c7), url(/real-estate-background-vector-194501.jpg)', height: '100vh', backgroundPosition: 'center' }} className="hidden lg:block">
                            <div className="flex flex-wrap justify-center items-center h-full">
                                <div className="bg-white p-5 w-4/5 rounded-xl shadow">
                                    <p>If you don&apos;t have any account then click <NextLink href={'/sign-up'}><a className="cursor-pointer text-blue-500">here</a></NextLink> to register yourself</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn

export async function getServerSideProps(context: any) {
    let link = context.query.redirect_to != undefined ? context.query.redirect_to : ""
    return {
        props: {
            redirect_to: link
        }
    }
}