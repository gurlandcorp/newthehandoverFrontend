import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturedProperty = (props: any) => {

    useEffect(() => {
    }, []);

    return (
        <section className="property-wrap-6">
            <div className="container">
                <div className="item-heading-center mb-20">
                    <span className="section-subtitle">Latest Listings</span>
                    <h2 className="section-title">Featured Property For Sale</h2>
                    <div className="bg-title-wrap" style={{ display: "block" }}>
                        <span className="background-title solid">Properties</span>
                    </div>
                </div>
                <div className="row">
                    {props.data.slice(0, 4).map((a: any, index: any) => {
                        return (
                            <div className="col-xl-6" key={index}>
                                <div
                                    className="property-box2 property-box5 wow animated fadeInUp"
                                    data-wow-delay=".6s"
                                >
                                    <div className="item-img">
                                        <Link href={"/opportunity/" + a._id}>
                                            <a>
                                                <Image
                                                    src={a.images[0]}
                                                    alt="blog"
                                                    width={'220px'}
                                                    height={'170px'}
                                                />
                                            </a>
                                        </Link>
                                        <div className="react-icon">
                                            <ul>
                                                <li>
                                                    <Link href={"/opportunity/" + a._id} >
                                                        <a
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Favourites"
                                                            className="mx-1">
                                                            <i className="flaticon-heart"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"/opportunity/" + a._id} >
                                                        <a
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Compare">
                                                            <i className="flaticon-left-and-right-arrows"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item-content item-content-property">
                                        <div className="verified-area">
                                            <h3 className="item-title">
                                                <Link href={"/opportunity/" + a._id}>
                                                    <a>{a.propertyTitle}</a>
                                                </Link>
                                            </h3>
                                        </div>
                                        <div className="location-area">
                                            <i className="flaticon-maps-and-flags"></i>
                                            {a.location.city}
                                            {/* Downey, California */}
                                        </div>
                                        <div className="item-categoery5">
                                            <ul>
                                                <li>
                                                    <i className="flaticon-bed"></i>Beds: {a.bedrooms}
                                                </li>
                                                <li>
                                                    <i className="flaticon-shower"></i>Baths:{" "}
                                                    {a.bathrooms}
                                                </li>
                                                <li>
                                                    <i className="flaticon-two-overlapping-square"></i>
                                                    {a.area}
                                                    Sqft
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="item-price">
                                            AED {a.priceDemand}
                                            {/* <i>/</i>
                            <span>mo</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
                <div className="property-button">
                    <Link href={"/opportunities"}>
                        <a className="item-btn">
                            View All Properties
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperty;
