import React from 'react'
import { styled, useTheme, Theme, CSSObject, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from '../Dashboard/SideBar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import { AccountCircle } from '@mui/icons-material';
import Cookies from "js-cookie"
import { useRouter } from 'next/router';
import Link from 'next/link';

const drawerWidth = 280;  

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}
    
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#ffffff',
    color: '#000',
    boxShadow: '0px 0px 10px 0px #ddd',
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
  }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));  

const UserLayout = ({pageProps, children}: any) => {

    const [open, setOpen] = React.useState(true);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        console.log('there')
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openDropDown = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const router = useRouter()
    const logout = () => {
        Cookies.remove('token')
        Cookies.remove('user')
        router.push('/sign-in')
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: '#00c194'
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ fontFamily:'Poppins, san-serif', display: 'flex' }}>
            <CssBaseline />
            {/* <TopMenus open={open} /> */}
            <AppBar position="fixed" sx={{ width: { md: open==false ? `calc(100%)` : `calc(100% - ${drawerWidth}px)` }, ml: { md: open==false ? '0px' : `${drawerWidth}px` }, }}>
                <Toolbar sx={{display: 'flex', justifyContent: "space-between"}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ display: {sm: 'none' ,md: 'block'},
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={()=> setMobileOpen(!mobileOpen)}
                        edge="start"
                        sx={{ display: {sm: 'block' ,md: 'none'},
                        marginRight: '36px',
                        ...(mobileOpen && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Typography variant="h6" noWrap component="div">
                        The Handover
                    </Typography> */}
                    <Box>
                        <Link href={'/'}>
                            <a className="mx-2">Home</a>
                        </Link>
                        <Link href={'/opportunities'}>
                            <a className="mx-2">Opportunities</a>
                        </Link>
                        <Link href={'/about'}>
                            <a className="mx-2">About</a>
                        </Link>
                        <Link href={'/contact'}>
                            <a className="mx-2">Contact</a>
                        </Link>
                    </Box>
                    <Box>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <AccountCircle sx={{ width: 32, height: 32 }} />
                            </IconButton>
                        </Tooltip>
                        
                        <Menu anchorEl={anchorEl}
                            id="account-menu"
                            open={openDropDown}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={()=>logout()}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <SideBar user={pageProps.user} open={open} setOpen={setOpen} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { md: open==false ? `calc(100%)` : `calc(100% - ${drawerWidth}px)` } }}>
                <DrawerHeader />
                <div className="p-2">
                    {children}
                </div>
            </Box>
        </Box>
        </ThemeProvider>
    )
}

export default UserLayout