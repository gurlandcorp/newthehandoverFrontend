import React from 'react'
import Error404 from "../public/json/404-page.json"
import Lottie from "react-lottie"

const ErrorPage = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Error404,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
        <div className='width mx-auto py-28'>
            <Lottie 
                options={defaultOptions}
                height={300}
                width={600}
            />
        </div>
        </>
    )
}

export default ErrorPage