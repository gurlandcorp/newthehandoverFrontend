import React from 'react'
import { Button, Grid } from '@mui/material'
import { ButtonProps } from "@mui/material/Button"
import { styled } from '@mui/system';
import { Add } from '@mui/icons-material';
import Link from 'next/link';

const DefaultButton = styled(Button)<ButtonProps>(({theme}) => ({
    backgroundColor: '#00c194',
    borderRadius: '10px',
    boxShadow: 'rgb(0 193 148 / 43%) 0px 2px 10px 0px',
    textTransform: 'capitalize',
    color: "#fff",
    height: 'fit-content',
    '&:hover': {
        backgroundColor: 'rgb(5 163 126)',
        boxShadow: 'rgb(0 193 148 / 43%) 0px 5px 10px 0px inset',
    }
}))

const AddItemButton = ({href='', loading=false, startIcon ,children}: any) => {

    const buttons = () => {
        if(loading==true)
        {
            <DefaultButton type='button' variant="contained" startIcon={startIcon!='' ? startIcon : <Add />} disabled>
                {children}
            </DefaultButton>
        }
        else if(href !== '')
        {
            return <Link href={href} passHref>
                <a>
                    <DefaultButton variant="contained" startIcon={startIcon!='' ? startIcon : <Add />}>
                        {children}
                    </DefaultButton>
                </a>
            </Link>
        }
        else {
            <DefaultButton type='submit' variant="contained" startIcon={startIcon!='' ? startIcon : <Add />}>
                {children}
            </DefaultButton>
        }
    }

    return loading==true ? (
    <DefaultButton type='button' variant="contained" startIcon={startIcon!='' ? startIcon : <Add />} disabled>
        {children}
    </DefaultButton>
    ) : (
        href !== '' ? (
        <Link href={href} passHref>
            <a>
                <DefaultButton variant="contained" startIcon={startIcon!='' ? startIcon : <Add />}>
                    {children}
                </DefaultButton>
            </a>
        </Link>
        ) : (
            <DefaultButton type='submit' variant="contained" startIcon={startIcon!='' ? startIcon : <Add />}>
                {children}
            </DefaultButton>
        )
    )
}

export default AddItemButton