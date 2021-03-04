import React from 'react'
import {makeStyles,Drawer, Divider,IconButton}from '@material-ui/core'
import Lista from './Listas'
import Icono from '../../imagen/exportar.png'


import {animateScroll as scroll} from 'react-scroll'

const drawerWidth=240

const estilos=makeStyles((theme)=>({
    logo:{
        display: "block",
margin: "auto",
        maxHeight:'45px',
          [theme.breakpoints.down('sm')]: {
            height:"5vh"
 },},

    drawer:{
        width:drawerWidth,
        flexShrink:0,

        '& button:focus':{
            backgroundColor: "#000000",
            color: "#ffffff"
      
          },
          "& .MuiIconButton-root:hover":{
            backgroundColor: "unset",
            color: "#ffffff"
        },
        " &  .MuiBackdrop-root ":{
           
            backgroundColor: "#5fced66b"
           
        }
    
    },
    drawerPaper:{

        width:drawerWidth
    },
    menuButtonDos: {
        marginRight: theme.spacing(2),
        textTransform:"uppercase",
        fontFamily:"Oswald",
        paddingRight: '12px',
        marginLeft: '2px',
        color:"#000000",    
       
        [theme.breakpoints.down('sm')]: {
          marginRight:'0px',
      
        paddingRight: '12px',
        marginLeft: '0px',}
    },

    toolbar:theme.mixins.toolbar
    ,

    titulo:{
        fontFamily:"oswald",
        fontWeight:"700"
    }



}))




const Cajon = (props) => {
    const clases=estilos()

        



    return (
        <Drawer className={clases.drawer}
        variant={props.variant}
        classes={{
            paper:clases.drawerPaper,
        }}
        anchor="left"
        open={props.open}
        onClose={props.onClose?props.onClose:null}
        >
            <div className={clases.toolbar} style={{display:"flex",justifyContent:"center"}}>
             
                    <IconButton onClick={()=>{
                        
                        scroll.scrollToTop({
                                    duration:0,delay:0
                         })

                         props.onClose() 
            
            }} edge="start" className={clases.menuButtonDos              } color="inherit" aria-label="menu">
                  <img src={Icono} alt="logo"  className={clases.logo} />
                </IconButton>



            </div>
            
            <Divider></Divider>
            <Lista onClose={props.onClose}></Lista>
        </Drawer>
    )
}


export default Cajon    