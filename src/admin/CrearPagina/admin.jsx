import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logOut as logOutFirebase } from '../../Firebase/FuncFirebase';
import { animateScroll as scroll } from 'react-scroll'
import Icono from '../../imagen/exportar.png'
import OutsideAlerter from '../Home/OutsideAlert';
import { BrowserRouter as Router,Route,Switch,withRouter } from 'react-router-dom'
import ColorBox from '../ColorBox/Index';
import SubMenu from '../Submenu/Index';





const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        background: "#FFFFFF",
        boxShadow:'none',
        borderBottom: 'solid 1px #e0e0e0',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
        textTransform: "uppercase",
        fontFamily: "Oswald",
        paddingRight: '12px',
        marginLeft: '2px',
        color: "#5fced6",
        background: "#00000000",
        [theme.breakpoints.down('sm')]: {
            marginRight: '0px',

            paddingRight: '12px',
            marginLeft: '0px',
        },
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    appBarFlexGrow: {
        flexGrow: 1,
    },
    logo: {
        maxHeight: '40px',
        [theme.breakpoints.down('sm')]: {
            height: "5vh",
            minHeight: "34px"
        },
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const logOut = () => {
        logOutFirebase();
    }


    return (
        <div  className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.appBarFlexGrow}>

                        <IconButton onClick={() => scroll.scrollToTop({
                            duration: 0, delay: 0
                        })} edge="start" className={classes.menuButtonDos} color="inherit" aria-label="menu">
                            <img src={Icono} alt="logo" className={classes.logo} />
                        </IconButton>


                    </Typography>
                    <div style={{ margin: "auto 20px" }}>
                        <IconButton onClick={logOut}>
                            <ExitToAppIcon
                                size="large"
                            ></ExitToAppIcon>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {/* <OutsideAlerter setOpen={setOpen}> */}
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {/* {['Submenu', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))} */}

                            <ListItem button component='a' href='/admin'>
                                <ListItemIcon><InboxIcon /> </ListItemIcon>
                                <ListItemText primary={'SubMenu'} />
                            </ListItem>

                            <ListItem button component='a' href='/admin/colorbox'>
                                <ListItemIcon><InboxIcon /> </ListItemIcon>
                                <ListItemText primary={'Carrusel'} />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon><InboxIcon /> </ListItemIcon>
                                <ListItemText primary={'ColorBox'} />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon><InboxIcon /> </ListItemIcon>
                                <ListItemText primary={'Nosotros'} />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon><InboxIcon /> </ListItemIcon>
                                <ListItemText primary={'Especialiadades'} />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon><InboxIcon /> </ListItemIcon>
                                <ListItemText primary={'Servicios'} />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon><InboxIcon /> </ListItemIcon>
                                <ListItemText primary={'Equipo Clinico'} />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon><InboxIcon /> </ListItemIcon>
                                <ListItemText primary={'Contacto'} />
                            </ListItem>
                            
                            
                    </List>
                    <Divider />
                    <List>
                        {['Usuarios', 'Mi perfil'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            {/* </OutsideAlerter> */}

            <div style={{width:'100vw'}}>
            <Router>
    <Switch>
    
    <div style={{ marginTop: '65px' }}>
    <Route path="/admin/colorbox" component={ColorBox}></Route> 
    <Route exact path="/admin" component={SubMenu}></Route> 
   
    </div>
    </Switch>
    </Router>



            </div>


        </div>
    );
}
