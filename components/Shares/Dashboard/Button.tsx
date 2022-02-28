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
    height: 'fit-content',
    '&:hover': {
        backgroundColor: 'rgb(5 163 126)',
        boxShadow: 'rgb(0 193 148 / 43%) 0px 5px 10px 0px inset',
    }
}))

const AddItemButton = ({href='', startIcon ,children}: any) => {
    return href !== '' ? (
        <Link href={href}>
            <DefaultButton variant="contained" startIcon={startIcon!='' ? startIcon : <Add />}>
                {children}
            </DefaultButton>
        </Link>
    ) : (
        <DefaultButton type='submit' variant="contained" startIcon={startIcon!='' ? startIcon : <Add />}>
            {children}
        </DefaultButton>
    )
}

export default AddItemButton