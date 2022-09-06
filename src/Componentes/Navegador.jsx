import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import{Hidden} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-scroll'
import  Opciones from '../Componentes/Navegador/Opciones'
import  Cajitas from '../Componentes/Navegador/Cajitas'
import {animateScroll as scroll} from 'react-scroll'
import Cajitasdos from '../Componentes/Navegador/Cajitasdos'
import Icono from '../imagen/exportar.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    '& .divLink':{
        cursor:"pointer", 
        padding: "21px",
      
    },

   "& .MuiIconButton-root:hover":{
      color: "#5fced6"
  },



    '& .divHover':{
      margin:"16px",
      cursor:"pointer"
    
  },
  '& .divHover:hover .subrayado':{
 
    height: "2px",
    background: "#039be5",
    width: "100%",
    cursor:"pointer"
},
'& .subrayado':{

  height: "2px",
background: "#039be5",
width: "50%",
cursor:"pointer",
transition:"width 1s"
},

'& .subrayado:hover':{

  height: "2px",
background: "#039be5",
width: "100%",
cursor:"pointer"
},

   
      '&  .MuiIconButton-root:hover':{ 
        
    
      color: "#5fced6"
    },
    
    '& button:focus':{
      color: "#2ab7a9",
      backgroundColor: "#ffffff",
      border: "1px solid",
  }

,




    '& .divLink:hover ':{

        padding: "21px",
        color: "#000000"
    },
    
    '& .MuiToolbar-gutters': {

        paddingRight:"0px"
    },
    '& .MuiButton-root:hover	': {
      
      color: "#5fced6",
      background: "#fff",
      border: "1px solid"

      },
      [theme.breakpoints.only("xs")]:{
        '& .MuiButton-root': {
        fontSize:"0.675rem"
      }
      }

      
  ,

  },
  menuButton: {
    marginRight: theme.spacing(2),
    textTransform:"uppercase",
    fontFamily:"Oswald",
    paddingRight: '12px',
    marginLeft: '2px',
    color:"#5fced6",
    background:"#00000000",
    [theme.breakpoints.down('sm')]: {
      marginRight:'0px',
  
    paddingRight: '12px',
    marginLeft: '0px',},
    
},
  menuButtonDos: {
    marginRight: theme.spacing(2),
    textTransform:"uppercase",
    fontFamily:"Oswald",
    paddingRight: '12px',
    marginLeft: '2px',
    color:"#000000",    
   
    [theme.breakpoints.down('sm')]: {
    paddingRight: '12px',
    margin:"0px auto",
  }
},
      barra:{
        height:'94px',
        background:"#FFFFFF",
        color:"#ffffff",
        boxShadow:"none",
        [theme.breakpoints.down('md')]:{
            background:"#FFFFFF",
        }

       
      }

  ,
  barrados:{
    background:"#FFFFFF",
    boxShadow:"none",
    marginTop:"0px",
    [theme.breakpoints.down('md')]:{ 
        background:"#FFFFFF00",

    }
   
  }
,
  title: {
    flexGrow: 1,
  },
  logo:{
    maxHeight:'71px',
//       [theme.breakpoints.down('sm')]: {
//         height:"5vh",
//         minHeight:"34px"
// },
  },
  titleLogo:{
    textTransform:"uppercase",
    fontFamily:"Oswald",
  },
  aLink:{
    textTransform:"uppercase",
    fontFamily:"Oswald",
    color:"#ffffff",
    backgroundColor:"rgb(95,206,214)"

},
aLinkDos:{
    textTransform:"uppercase",
    fontFamily:"Oswald",
    color:"#ffffff",
    backgroundColor:"rgb(95,206,214)"

},

divLink:{
    background: "rgb(0 0 0 / 12%)",
    padding: "21px",
    color: "#000000"
},
contacto:{
  color: "#000000",
    textTransform: "uppercase",
    fontSize:"0.875rem",
    fontWeight: "700"
},
subrayado:{

  height: "2px",
background: "#039be5",
width: "50%",
cursor:"pointer"
},


  boton:{
      background:"#ed95d5",
      color:"#FFFFFF",
      borderRadius:"5px",
      
      fontFamily: 'Lato',
      fontWeight: "bold",
      
      
      [theme.breakpoints.down('sm')]: {
        marginRight:'vw'



     }},

    
     

 
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  // state Scroll


  

  


  


  return (
    <div className={classes.root} >
      <AppBar position="fixed" className={classes.barra}>
        <Toolbar>

        

            <Typography align="center">
          <IconButton edge="start" className={classes.menuButton } color="inherit" aria-label="menu"
          onClick={()=>props.accionAbrir()}
          >
          
            <MenuIcon  />   
            
          </IconButton>
          </Typography>
          

       
          <Typography className={classes.title} align="left">
          <IconButton onClick={()=>scroll.scrollToTop({
            duration:0,delay:0
          })} edge="start" className={classes.menuButtonDos} color="inherit" aria-label="menu">
             <img src={Icono} alt="logo"  className={classes.logo} />
          </IconButton>
          </Typography> 
         

          <Hidden mdDown>
          

         
          

        
          <Link to="contacto">
          <div className="divHover">
            <Typography className={classes.contacto}>
              Contactanos

            </Typography>
            <div className="subrayado"></div>
          </div>
          </Link>
             
          <div className="divLink" >
              <Button  className={classes.aLink}    href="https://e9ce63006869ea140e20053ac15620ffc8ee3a0b.agenda.softwaredentalink.com/agendas/agendamiento " target="_blank" >
              Reserva online
              </Button>
              </div>
             
              </Hidden> 
        </Toolbar>
      </AppBar>
      <Opciones></Opciones>
              
    </div>
  );
}
