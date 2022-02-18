import axios from 'axios';
import { NextPage } from 'next'
// import Image from 'next/image';
import React, { useState } from 'react'
// import contactImg from "../public/assets/img/blog/contact01.jpg";
import styles from "./styles/Contact.module.css"

const Contact: NextPage = () => {
    const initialSate = {
		name: "",
		email: "",
		message: "",
	};
	const [data, setData] = useState(initialSate);

	const handleInputs = (e: any) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const { name, email, message } = data;
		axios.post(`https://handoverapi.herokuapp.com/contact/contactus`, {
				name,
				email,
				message,
			})
			.then(function (response1) {
				// handle success
                console.log('contact page',response1.data)
				setData(response1?.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};

    return (
        <section className="contact-wrap">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="contact-box1">
							<div className="contact-img">
								<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116878.45300534296!2d90.4195470442074!3d23.731268144494663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1635221509729!5m2!1sen!2sbd"
								width="600"
								height="550"
								// style="border:0;"
								allowFullScreen={false}
								loading="lazy" ></iframe>
							</div>
							<div className="contact-content">
								<h3 className="contact-title">Office Information</h3>
								<div className="contact-list">
									<ul>
										<li>Homlisti Real Estate Agency</li>
										<li>(United Estate Of America) Co., Ltd.</li>
										<li>Bridge 8, Room 9201,</li>
										<li>#25 Jocker Goru Zhong Road,</li>
										<li>NYPD 200025 USA</li>
									</ul>
								</div>
								<div className="phone-box">
									<div className="item-lebel">Emergency Call :</div>
									<div className="phone-number">+86 21 6137 9292</div>
									<div className="item-icon">
										<i className="fas fa-phone-alt"></i>
									</div>
								</div>
								<div className="social-box">
									<div className="item-lebel">Social Share :</div>
									<ul className="item-social">
										<li className='mx-1'>
											<a href="https://www.facebook.com/">
												<i className="fab fa-facebook-f"></i>
											</a>
										</li>
										<li className='mx-1'>
											<a href="https://twitter.com/">
												<i className="fab fa-twitter"></i>
											</a>
										</li>
										<li className='mx-1'>
											<a href="https://vimeo.com/">
												<i className="fab fa-vimeo-v"></i>
											</a>
										</li>
										<li className='mx-1'>
											<a href="https://www.pinterest.com/">
												<i className="fab fa-pinterest-p"></i>
											</a>
										</li>
										<li className='mx-1'>
											<a href="https://web.whatsapp.com/">
												<i className="fab fa-whatsapp"></i>
											</a>
										</li>
									</ul>
									<div className="item-icon">
										<i className="fas fa-share-alt"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="contact-box2">
							<div className={`${styles.contactNeedHelp}`}>
							<h3 className="contact-title">Need help with something?</h3>
							<p>Others get indignant when asked for assistance, but we are delighted to help you! HandOver&lsquo;s dedicated resources are on hand to counsel you through every step till you sign the best investment deal. If you need any assistance, you can reach us via phone, email, or live chat. Our customer support team is 24/7 available at your service.</p>
								{/* <Image
									src={contactImg.src}
									alt="contact"
									height="502"
									width="607"
								/> */}
								{/* <iframe
									src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116878.45300534296!2d90.4195470442074!3d23.731268144494663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1635221509729!5m2!1sen!2sbd"
									width="600"
									height="550"
									// style="border:0;"
									allowFullScreen={false}
									loading="lazy"
								></iframe> */}
								
								{/* <div className=''>
									<p>Others get indignant when asked for assistance, but we are delighted to help you! HandOver's dedicated resources are on hand to counsel you through every step till you sign the best investment deal. If you need any assistance, you can reach us via phone, email, or live chat. Our customer support team is 24/7 available at your service.</p>
								</div> */}
							</div>
							<div className="contact-content">
								<h3 className="contact-title">Quick Contact</h3>
								<p>
									Borem ipsum dolor sit amet conse ctetur adipisicing elit sed
									do eiusmod Eorem ipsum dolor sit amet conse ctetur.
								</p>
								<form className="contact-box rt-contact-form">
									<div className="row">
										<div className="form-group col-lg-6">
											<label>Name *</label>
											<input
												type="text"
												className="form-control"
												name="name"
												placeholder="First Name*"
												data-error="First Name is required"
												required
												value={data.name}
												onChange={handleInputs}
											/>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group col-lg-6">
											<label>Email *</label>
											<input
												type="email"
												className="form-control"
												name="email"
												placeholder="Email*"
												data-error="Email is required"
												required
												value={data.email}
												onChange={handleInputs}
											/>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group col-lg-12">
											<label>Message *</label>
											<textarea
												name="message"
												id="message"
												className="form-text"
												placeholder="Message"
												cols={30}
												rows={5}
												data-error="Message Name is required"
												required
												value={data.message}
												onChange={handleInputs}
											></textarea>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group col-lg-12">
											<button
												onClick={(e) => handleSubmit(e)}
												className="item-btn"
											>
												Send message
											</button>
										</div>
									</div>
									<div className="form-response"></div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default Contact