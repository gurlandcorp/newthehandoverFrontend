import React from 'react'

const BreadCrumb = (props: any) => {
    return (
        <div className="breadcrumb-wrap breadcrumb-wrap-2">
            <div className="container">
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {props.title}
                    </li>
                </ol>
                </nav>
            </div>
        </div>
    )
}

export default BreadCrumb