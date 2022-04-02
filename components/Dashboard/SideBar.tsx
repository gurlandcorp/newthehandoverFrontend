import React, { useEffect, useState } from 'react'
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useRouter } from 'next/router';
import { Dashboard } from '@mui/icons-material';
import Link from 'next/link';
import Logo from "../../public/logo.png";
import { ListItemButton, Box } from '@mui/material';
import { parseCookies } from "nookies"
import Image from 'next/image';
import { blue } from '@mui/material/colors';

const drawerWidth = 280;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const themeStyle = createTheme({
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: "transparent",
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        color: blue[700],
                        backgroundColor: blue[100],
                        borderRight: '2px solid '+ blue[700],
                        fontWeight: "500",
                        '& svg': {
                            color: blue[700]
                        }
                    }
                }
            }
        },
    },
});  

const SideBar = (props: any) => {
    
    const theme = useTheme();

    const route = useRouter()
    const {user}: any = parseCookies()
    const [loggedInUser, setLoggedInUser] = useState(user)
    const [name, setName] = useState()

    const handleMobileDrawerClose = () => {
        console.log('there')
        props.setMobileOpen(!props.mobileOpen)
    }

    useEffect(()=>{
        setName(loggedInUser!= null && JSON.parse(loggedInUser).name)
    },[route, loggedInUser])

    const lists = (
        <List>
            {
                props.user?.userType == 'Buyer' && (
                    <>
                    <Link href="/buyer" passHref>
                        <ListItemButton selected={route.pathname==='/buyer'}>
                                <ListItemIcon>
                                    <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary={'Dashboard'} />
                        </ListItemButton>
                    </Link>
                    <Link href="/buyer/biddings" passHref>
                        <ListItemButton selected={route.pathname==='/buyer/biddings'}>
                                <ListItemIcon>
                                    <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary={'My biddings'} />
                        </ListItemButton>
                    </Link>
                    </>
                )
            }
            {
                props.user.userType == 'Seller' && (
                    <>
                    <Link href="/seller" passHref>
                        <ListItemButton selected={route.pathname==='/seller'}>
                                <ListItemIcon>
                                    <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary={'Dashboard'} />
                        </ListItemButton>
                    </Link>
                    <Link href="/seller/properties" passHref>
                        <ListItemButton selected={route.pathname.search('seller/properties')!=-1 || route.pathname.search('seller/property/add')!=-1}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Properties'} />
                        </ListItemButton>
                    </Link>
                    </>
                )
            }
            
            <Link href="/user/profile" passHref>
                <ListItemButton selected={route.pathname.search('user/profile')!=-1}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Profile'} />
                </ListItemButton>
            </Link>
        </List>
    )

    return (
        <ThemeProvider theme={themeStyle}>
            <Box component="nav" sx={{ overflow: "hidden", width: { md: props.open == false ? '0px' : drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders" >
                <MuiDrawer sx={{ display: { sm: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        backgroundColor: "#fff",
                        borderRight: "2px dotted #ddd",
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                    }} variant="temporary" anchor="left" open={props.mobileOpen} onClose={handleMobileDrawerClose} ModalProps={{ keepMounted: true, }}>

                    <DrawerHeader>
                        <Box className="justify-content-between mx-4">
                            <Image src={`${Logo.src}`}
                                width="157"
                                height="18"
                                alt="logo"
                                className="img-fluid"
                            />
                        </Box>
                        <IconButton onClick={handleMobileDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    
                    <Box sx={{p:1, m:3, backgroundColor: blue[200], color: blue[700], borderRadius: '10px'}} className="capitalize">
                        {name!=null ? name : ''}
                    </Box>
                    {lists}
                </MuiDrawer>

                <MuiDrawer sx={{ display: { xs: 'none', sm: 'none', md: 'block' },
                    '& .MuiDrawer-paper': {
                        width: props.open==true ? drawerWidth : '0px',
                        boxSizing: 'border-box',
                    },
                    }} variant="permanent" anchor="left" open={props.open}>

                    <DrawerHeader>
                        <img src={`${Logo.src}`}
                            width="157"
                            height="40"
                            alt="logo"
                            className="img-fluid"
                        />
                        <IconButton onClick={props.handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    
                    <Box sx={{p:1, m:3, backgroundColor: 'rgb(228 245 242 / 57%)', color: '#000', borderRadius: '10px'}} className="capitalize">
                        {name!=null ? name : ''}
                    </Box>
                    {lists}
                </MuiDrawer>
            </Box>
        </ThemeProvider>
    )
}

export default SideBar