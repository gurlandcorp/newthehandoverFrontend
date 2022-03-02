import Logo from "../../public/logohandover.png";
import SearchSection from "./SearchSection";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Header.module.css"

const Header = () => {

	const [activeLink, setActiveLink] = useState('')
	const router = useRouter();
	const [showSideMenu,setShowSideMenu] = useState(false)

	useEffect(()=>{
	},[])

	return (
		<>
			<header className="header">
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
										{/* <li className="hide-on-desktop-menu">
											<a href="index.html">Pages</a>
											<ul>
												<li>
													<a href="about-1.html">About</a>
												</li>
												<li>
													<a href="with-sidebar2.html">Property</a>
												</li>
												<li>
													<a href="blog1.html">Blog</a>
												</li>
												<li>
													<a href="404.html">404 Error</a>
												</li>
												<li>
													<a href="contact.html">Contact</a>
												</li>
											</ul>
										</li> */}
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
											<a href={'https://app.thehandover.com'}
												data-bs-toggle="tooltip"
												data-bs-placement="bottom"
												title="Sign In"
											>
												<i className="flaticon-user-1 icon-round"></i>
											</a>
										</li>
										<li className="listing-button">
											<a href={'https://app.thehandover.com'} className="listing-btn">
												<span>
													<i className="fas fa-plus-circle"></i>
												</span>
												<span className="item-text">Add Property</span>
											</a>
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
			</header>
		</>
	);
};

export default Header;