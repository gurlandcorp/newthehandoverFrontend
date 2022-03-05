import React from 'react'
import { Box, Breadcrumbs } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled, useTheme, Theme, CSSObject, createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiBreadcrumbs: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 10px 10px 0px rgba(137,137,137,0.1)',
                    padding: '1rem 2rem',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    '& a': {
                        color: '#000'
                    },
                    '& a:hover': {
                        color: '#00c194'
                    }
                },
            }
        },
    },
})

const BreadCrumb = ({children}: any) => {
    // const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <Breadcrumbs>
                {children}
            </Breadcrumbs>
        </ThemeProvider>
    )
}

export default BreadCrumb