import Link from 'next/link'
import React from 'react'

const Button = ({children}: any) => {
    return (
        <button className='text-white bg-black py-3 px-10 rounded-full mt-4'>{children}</button>
    )
}

const LinkButton = ({href, children}: any) => {
    return (
        <Link href={href}>
            <a className='text-white bg-black py-3 px-10 rounded-full mt-4 inline-block'>{children}</a>
        </Link>
    )
}

export { Button, LinkButton }