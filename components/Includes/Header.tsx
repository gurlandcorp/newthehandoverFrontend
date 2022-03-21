import Logo from "../../public/logo.png";
import SearchSection from "./SearchSection";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Header.module.css"
import { parseCookies } from "nookies";

const Header = () => {

	const [activeLink, setActiveLink] = useState('')
	const router = useRouter();
	const [showSideMenu,setShowSideMenu] = useState(false)
	const {token, user} = parseCookies()
	useEffect(()=>{
	},[])

	return (
		<>
			{/* Start of Site Header  */}
			<div className="bg-white sticky top-0 w-full p-2 z-10 shadow-box">
				<div className="flex flex-row items-center flex-wrap">
					<div className="logo w-2/12">
						<Link href={'/'}>
							<a>
								<Image src={Logo} layout="intrinsic" width="350" height="40" alt="logo" className="img-fluid" />
							</a>
						</Link>
					</div>
					<nav className="menu-center col-span-2 w-7/12">
						<ul className="flex flex-wrap items-center ml-5">
							<li>
								<Link href={'/'}>
									<a className="nav-item nav-active block text-center">Home</a>
								</Link>
							</li>
							<li>
								<Link href={'/opportunities'}>
									<a className="nav-item text-center">Opportunities</a>
								</Link>
							</li>
							<li><a href="#" className="nav-item">About</a></li>
							<li><a href="#" className="nav-item">Contact</a></li>
							<li><a href="#" className="bg-black duration-300 ease-in-out hover:bg-white hover:text-black inline-block px-4 py-1 rounded-3xl text-white border border-black border-solid">Auction</a></li>
						</ul>
					</nav>
					<div className="flex flex-wrap justify-center w-3/12">
						<div>
							<a href="/" className="bg-black border border-black border-solid duration-300 ease-in-out hover:bg-white hover:text-black inline-block m-1 px-4 py-1 rounded-3xl text-white">+ Add Property</a>
						</div>
						<div>
							<a href="/" className="bg-white border border-black border-solid duration-300 ease-in-out hover:bg-black hover:text-white inline-block m-1 px-4 py-1 rounded-3xl text-black">Login</a>
						</div>
					</div>
				</div>
			</div>
			{/* ENd of Site Header  */}

			{/* <header className="header">
				<div id="rt-sticky-placeholder"></div>
				<div id="header-menu" className="header-menu menu-layout1 header-menu menu-layout3" >
					<div className="container">
						<div className="row d-flex align-items-center">
							<div className="col-xl-2 col-lg-2">
								<div className="logo-area">
									<Link href={'/'} >
                                        <a className="temp-logo">
										<Image src={Logo} layout="intrinsic"
											width="350"
											height="40"
											alt="logo"
											className="img-fluid"
										/>
                                        </a>
									</Link>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6 d-flex justify-content-center position-static">
								<nav id="dropdown" className="template-main-menu template-main-menu-3">
									<ul>
										<li>
											<Link href={'/'} >
												<a className={`${router.pathname=='/' ? 'active' : ''}`}>Home</a>
											</Link>
										</li>
										<li>
											<Link href={'/about'} >
												<a className={`${router.pathname.search('about')!=-1 ? 'active' : ''}`} >About</a>
											</Link>
										</li>
										<li>
											<Link href={'/opportunities'} >
												<a className={`${router.pathname.search('opportunities')!=-1 || router.pathname.search('opportunity')!=-1 ? 'active' : ''}`}>Opportunities</a>
											</Link>
										</li>
										<li>
											<Link href={'/contact'}
											>
												<a className={`${router.pathname.search('contact')!=-1 ? 'active' : ''}`}>
												Contact
												</a>
											</Link>
										</li>
									</ul>
								</nav>
							</div>
							<div className="col-xl-4 col-lg-4 d-flex justify-content-end">
								<div className="header-action-layout1">
									<ul className="action-list">
										<li className="action-item-style left-right-btn">
											<Link href={'/'}>
                                                <a data-bs-toggle="tooltip" data-bs-placement="bottom" title="Compare">
                                                    <i className="flaticon-left-and-right-arrows icon-round"></i>
                                                    <div className="item-count">0</div>
                                                </a>
											</Link>
										</li>
										<li className="action-item-style wish-btn">
											<Link href={'/'}>
                                                <a data-bs-toggle="tooltip" data-bs-placement="bottom" title="Favourites">
                                                    <i className="flaticon-heart icon-round"></i>
                                                    <div className="item-count">0</div>
                                                </a>
											</Link>
										</li>
										<li className="action-item-style my-account">
											<Link href={`/${user==null ? 'sign-in' :JSON.parse(user).userType=='Buyer' ? 'buyer': 'seller'}`}>
												<a data-bs-toggle="tooltip" data-bs-placement="bottom" title="Sign In" >
													<i className="flaticon-user-1 icon-round"></i>
												</a>
											</Link>
										</li>
										<li className="listing-button">
											<Link href={token ? '/seller/property/add' : '/sign-in?redirect_to=seller/property/add'}>
												<a className="listing-btn">
													<span>
														<i className="fas fa-plus-circle"></i>
													</span>
													<span className="item-text">Add Property</span>
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<SearchSection />
			</header>
			<header className="px-3 py-2 mob-header">
				<div className="d-flex flex-wrap justify-content-between align-items-center">
					<div>
						<Link href={'/'} >
							<a className="temp-logo">
							<Image src={Logo} layout="intrinsic"
								width="300"
								height="36"
								alt="logo"
								className="img-fluid"
							/>
							</a>
						</Link>
					</div>
					<div style={{textAlign: 'right'}}>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={'30px'} onClick={()=>setShowSideMenu(true)}>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
						</svg>
					</div>
				</div>
				<div className={`${styles.sidebar} ${showSideMenu==true ? styles.show : ''}`}>
					<svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${styles.close}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" onClick={()=>setShowSideMenu(false)}>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<div className={styles.menu}>
						<div className={styles.logo}>
							<Link href={'/'} >
								<a className="temp-logo">
								<Image src={Logo}
									width="157"
									height="40"
									alt="logo"
									className="img-fluid"
									layout="responsive"
								/>
								</a>
							</Link>
						</div>
						<ul>
							<li>
								<Link href={'/'}>
									<a onClick={()=>setShowSideMenu(false)}>Home</a>
								</Link>
							</li>

							<li>
								<Link href={'/about'}>
									<a onClick={()=>setShowSideMenu(false)}>About</a>
								</Link>
							</li>

							<li>
								<Link href={'/opportunities'}>
									<a onClick={()=>setShowSideMenu(false)}>Opportunities</a>
								</Link>
							</li>

							<li>
								<Link href={'/contact'}>
									<a onClick={()=>setShowSideMenu(false)}>Contact</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</header> */}
		</>
	);
};

export default Header;