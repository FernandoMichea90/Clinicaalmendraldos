import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook'; 
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Typography, makeStyles , Grid,IconButton} from '@material-ui/core'

import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

import logo from '../imagen/exportar.png'


const useStyle=makeStyles((theme)=>({
        fondo:{
            color:"#888181",

            "& .MuiIconButton-root":{
                color:"#5fced6",
                padding:"20px",
                border:"1px solid #5fced6",
                marginBottom:"20px"

            },
            "& .MuiIconButton-root:hover":{
                color:"#ffffff",
                background:"#5fced6"

            },
           
          

        },
        icono:{
            width:"190px",
            margin:"30px 0px 30px 20px"
        },
        iconoDos:{
            height:"6vh",
            margin:"0px 20px 10px 20px"
        }

,divRedesSociales:{
           display:"block",
           margin:"auto",
           width:"235px",
            margin:"10px auto 10px auto"

        },

        divIcono:{
                height: "60px",
                width: "60px",
                border: "1px solid",
                borderRadius: "30px",
                margin:"auto",
               
        },
        divLogo:{

            width:"100%"
        },

        logo:{
            height:"145px",
            display:"block",
            margin:"67px auto",
            [theme.breakpoints.down("md")]:{

                height:"unset",
                margin:"67px 0px",
                width:"100%",
                padding:"0  10% 0 10%"



            }


        }








}))




const Footer = () => {

        const clases=useStyle()

    return (
        <div name="contacto" style={{paddingTop:"150px"}} className={clases.fondo}>
            
            <Grid container>

                <div className={clases.divLogo}>
                    <img className={clases.logo} src={logo} alt=""/>
                </div>

                <Grid xs={12}>
                    <Typography align="center">
                   
                    </Typography>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Typography align="center">  
                    <IconButton href="mailto:fmicheam@gmail.com"  target="_blank" aria-label="delete">
                        <MailIcon />
                    </IconButton>
                    </Typography>
                    <Typography align="center" style={{marginBottom:"20px"}} >
                        contacto@clinicaalmendral.cl    
                    </Typography>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Typography  align="center" >    
                    <IconButton href="https://www.google.com/maps/dir//Odontolog%C3%ADa+Almendral+Los+Andes/data=!4m8!4m7!1m0!1m5!1m1!1s0x968804e06480374f:0xfcb27c87d5cd2f04!2m2!1d-70.596964!2d-32.833785" target="_blank" aria-label="delete">
                        <RoomIcon />
                    </IconButton>
                    </Typography>
                    <Typography   align="center" style={{marginBottom:"20px"}} >    
                   
                    Esmeralda 286, Oficina 2-B ,Los Andes
                    </Typography>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Typography  align="center">  
                    <IconButton href="tel:+56-34-242-0826" target="_blank" aria-label="delete">
                        <PhoneIcon />
                    </IconButton>
                    </Typography>
                    <Typography align="center"  style={{marginBottom:"20px"}}>
                        (34) 242 0826
                    </Typography>
                    <Typography align="center"  style={{marginBottom:"20px"}}>
                        (56) 9 9542 5684
                    </Typography>
                    
                </Grid>

                <Grid xs={12}>
                  
                    <div className={clases.divRedesSociales}>
                                
                            <Grid container>
                                <Grid xs={4}>    
                                <Typography  align="center">  
                                    <IconButton   href="https://www.instagram.com/dentistaclinicaalmendral/" target="_blank" aria-label="delete">
                                        <InstagramIcon />
                                    </IconButton>
                                 </Typography>  
                                </Grid>
                                <Grid xs={4}>    
                                <Typography  align="center">  
                                     <IconButton href="https://www.facebook.com/clinicaalmendral" target="_blank" aria-label="delete">
                                        <FacebookIcon />
                                     </IconButton>
                                 </Typography>   
                                 </Grid>
                                 <Grid xs={4}>
                                 <Typography  align="center">  
                                 <IconButton href="https://api.whatsapp.com/send?phone=56976226068&text=Hola me gustaria hacer una consulta" target="_blank" aria-label="delete">
                                        <WhatsAppIcon />
                                    </IconButton>
                                 </Typography>  
                                 </Grid>
                            </Grid>
                    </div>
                </Grid>
                <Grid xs={12}>
                <Typography align="center" style={{margin:"20px 0px 80px 0px"}}>
                Horarios : Lunes a viernes | 09:30 a 13:45 |16:00 a 21:00| Sabado | 9:30 a 13:45
                </Typography>
                </Grid>
            </Grid>
    

            



        </div>
    )
}

export default Footer
