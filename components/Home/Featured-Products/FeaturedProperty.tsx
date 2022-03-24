import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./FeaturedProperty.module.css"

const FeaturedProperty = (props: any) => {

    useEffect(() => {
    }, []);

    return (
        <>
        {/* latest listing block starts  */}
        <div className="width mx-auto py-20">
            <div className="gap-10 grid grid-cols-1 lg:grid-cols-2">
                <div className="side flex flex-wrap justify-center items-center">
                    <div>
                        <div className="title-box mb-5">
                            <h3 className="sub-title">LATEST LISTINGS</h3>
                            <h2 className="title">Featured Property<br />
                                For Sale</h2>
                        </div>
                        <div className="text-center">
                            <Link href={'/opportunities'}>
                            <a className="dark-btn">View All Properties</a>
                            </Link>
                        </div>
                    </div>
                </div>
                {
                    props.data.slice(0, 4).map((a: any, index: any) => {
                        return (
                            <div key={index}>
                                <div className={styles.box2}>
                                    <div className={styles.image}>
                                        <div className="relative" style={{height:'300px'}}>
                                            <Image src={a.images[0]} alt={a.propertyTitle} layout="fill" />
                                        </div>
                                    </div>
                                    <div className={styles.boxTitle}>
                                        <Link href={"/opportunity/" + a._id}>
                                            <a>{a.propertyTitle}</a>
                                        </Link>
                                    </div>
                                    <div className={styles.boxLocation}>{a.location.city}</div>
                                    <div className={styles.boxAttr}>
                                        <ul>
                                            <li><span className="mdi mdi-vector-square-plus" /> {a.area} sqft</li>
                                            <li><span className="mdi mdi-bed-king-outline" /> {a.bedrooms} Beds</li>
                                            <li><span className="mdi mdi-bathtub-outline" /> {a.bathrooms} Baths</li>
                                            <li><span className="mdi mdi-cached" /> 4 Days ago</li>
                                        </ul>
                                    </div>
                                    <div className={styles.boxPrice}>AED {a.priceDemand}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        {/* latest listing block ends  */}
        </>
    );
};

export default FeaturedProperty;
