import React from 'react'
import { Box, Breadcrumbs } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    box: {
        fontSize: 'Ubuntu, san-serif',
        boxShadow: '0px 10px 10px 0px rgba(137,137,137,0.1)',
        '& a': {
            color: '#000'
        }
    }
})

const BreadCrumb = ({children}: any) => {
    const classes = useStyles()
    return (
        <Breadcrumbs className={`bg-white py-3 px-4 rounded ${classes.box}`}>
            {children}
        </Breadcrumbs>
    )
}

export default BreadCrumb