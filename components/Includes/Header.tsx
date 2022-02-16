import Logo from "../../public/logohandover.png";
import SearchSection from "./SearchSection";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {

	useEffect(()=>{
		
	},[])

	return (
		<>
			<header className="header position-relative">
				<div id="rt-sticky-placeholder"></div>
				<div id="header-menu" className="header-menu menu-layout1 header-menu menu-layout3" >
					<div className="container">
						<div className="row d-flex align-items-center">
							<div className="col-xl-2 col-lg-2">
								<div className="logo-area">
									<Link href={'/'} >
                                        <a className="temp-logo">
										<Image src={Logo}
											width="157"
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
												<a className="active">Home</a>
											</Link>
										</li>
										<li>
											<Link href={'/about'}
											> About </Link>
										</li>
										<li>
											<Link href={'/properties'}
											> All Property </Link>
										</li>
										<li className="hide-on-desktop-menu">
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
										</li>
										<li>
											<Link href={'/contact'}
											>
												Contact
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
		</>
	);
};

export default Header;