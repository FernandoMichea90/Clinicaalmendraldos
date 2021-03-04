import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper,Button, Typography} from '@material-ui/core'
import {makeStyles,Grid} from '@material-ui/core'

import logo from '../imagen/exportar.png'
import transbank from '../imagen/transbank.png'
import entrada from '../imagen/entrada.png'
import plaza from '../imagen/plaza.jpg'


const useStyles=makeStyles((theme)=>({


        root:{

            
        },



    imagenPrincipal:{
     
        width:'100%',
       
       
        [theme.breakpoints.down('xs')]: {
            height:'53%',
            margin:"21vh auto"
          },
          [theme.breakpoints.up('sm')]: {
            height:'100vh',
          },
          [theme.breakpoints.up('md')]: {
            height:'100vh',
            maxHeight:'810px'
          }

    },
    divPrincipal:{
     height:"100vh",
     minHeight:"600px",
     maxHeight:"721px"

    },
    divTransbank:{
        [theme.breakpoints.up("sm")]:{
            height:"100%", 
            width:"100%",
            position:"relative"
        },
    

    },
    imagenTransbank:{
        display:"block",
        height:"150px",
        margin:"250px auto",
        [theme.breakpoints.down("sm")]:{
            margin:"100px auto",
            width:"70%",
            height:"unset"
        },
        [theme.breakpoints.up("md")]:{
            position:"absolute",
            top:"0",
            bottom:"0",
            left:"0",
            right:"0",
            margin:"auto"
        }
    },
    
    colorPrueba:{
        color:"#f44336"
    },
   promocionUno:{

    color: "#3f51b5",
    background: "#ffffff99",
    height: "300px",
    width: "369px",
    position: "absolute",
    top: "25%",
    left:"35%",
    padding: "35px",
    borderRadius: "25px",
    [theme.breakpoints.down("xs")]:{

        width:"93vw",
        margin:"auto 5vw",
        left:"0"

    },   [theme.breakpoints.down("sm")]:{

        width:"93vw",
        margin:"auto auto",
        left:"0",
        right:"0"

    }


   },


    boton:{
    position: "absolute",
    top: "57%",
    left:"0",
    right:"0",
    color:"#FFFFFF",
    borderColor:"#FFFFFF",
    alignItems: "center",
    marginLeft:"auto",
    marginRight:"auto",
    width:"100px"
    },

    divEntrada:{

[theme.breakpoints.only("sm")]:{
            overflow:"hidden"
}

    },



    margenLogo:{
        margin:"225px 15px 250px 10px",

        [theme.breakpoints.down("xs")]:{


            position: "absolute",
            top: "28vh",
            color: "rgb(0 0 0 / 87%)",
            background: "#ddd",
            borderRadius: "6px",
            margin:"190px 15px 250px 10px",

                
           
            
        }

    },
    logo:{
        width: "88%",
  

    },
    divTres:{

        [theme.breakpoints.down("sm")]:{
            position:"absolute",
             width:"100vw",
             top:"59vh",
             left:"0"

        },
        [theme.breakpoints.down("xs")]:{
            position:"absolute",
             width:"100vw",
             top:"38vh",
             left:"0"

        }
    },
    estilo:{

        [theme.breakpoints.down("xs")]:{
       
                 height:"600px",
    }
    },imagenEntrada:{


        width:"100%",

        [theme.breakpoints.down("xs")]:{

            height:"111vh"
         
        },
        [theme.breakpoints.only("sm")]:{

                width:"unset",
                marginTop:"64px",
                height:"100vh",
                maxHeight:"801px"


         
        }

    },


    centro:{
        width: "100%",
        position: "absolute",
        fontSize: "52px",
        textAlign: "center",
        top: "37%",
        fontWeight: "normal",
        fontFamily: 'Lato',
        color: "#ffffff",
        [theme.breakpoints.down('sm')]: {
          top:"9vh",
          fontSize:"35px",
    },
    }}
    ))


 
export default function Example(props)
{
    const clases=useStyles();

    var autoPlay=false;
    var timeout=1000;
    const imagen="https://lh3.googleusercontent.com/KOTDJn-fHFLpog1ZoVcruQlX12cFGtyIMJqJkDCsAJT41V1cMo9B6hNlp8bF5sQsg-5t6B3Q=w1080-h608-p-no-v0"

    var items = [
        {
             //imagen:"https://chile.travel/wp-content/uploads/2016/03/Valparaiso-sernatur-DST141.jpg"
             //imagen:"https://storage.googleapis.com/chile-travel-static-content/2016/03/Valparaiso-sernatur-DST142.jpg"   
            imagen:imagen
       
        }
    ]
 
    return (

        <div className={clases.root}>
        <Carousel className={clases.estilo}  navButtonsAlwaysVisible={false} autoPlay={autoPlay} indicators={false} timeout={timeout}>

               
                <Paper>
          
       


          <div className={clases.divPrincipal}>         
  
               <div>
                    <Grid container>
                        <Grid className={clases.divEntrada} xs={12}  sm={6} lg={4}>
                        <img  className={clases.imagenEntrada} src={entrada} alt=""/>


                        </Grid>
                        <Grid  xs={8}  sm={6}   lg={4} >
                            <div className={clases.margenLogo}>
                                <Typography variant="h4" align="center">
                                     <img className={clases.logo} src={logo} alt=""/>
                                 </Typography>
                        
                                  
                                <Typography variant="h4" align="center">
                                    Ubicados en pleno centro de Los Andes
                                </Typography>
                 
                            </div>
                        </Grid>
                        <Grid xs={4} sm={4} lg={4}  >
                                 <img   src={plaza} alt=""/>


                        </Grid>

                    </Grid>

               </div>
        
           </div>   
           </Paper>

           <Paper>
          
       


          <div className={clases.divPrincipal}>         
          <img className={clases.imagenPrincipal} alt="Valparaiso, Cerro alegre" src={imagen}>
          </img>
          <div className={clases.promocionUno}>
                
                    <Typography variant="h2" align="center">
                      Promocion 
                    </Typography>
                 
                    <Typography variant="h5" align="left">
                        Hasta el 31 de marzo 
                    </Typography>
                    <Typography variant="h5" align="left">
                           Implante + corona $520.000
                    </Typography>
                        <Typography variant="h5" align="left">
                            Previa evaluacion (valor $ 20.000)
                        </Typography>



                        <Typography variant="h2" align="center">
                                <Button  color="info"  variant="outlined" color="primary">
                                Reservar
                                </Button>
                    </Typography>
                 
                 

                        
                   
            </div> 
           </div>   
           </Paper>


           <Paper>
           <div className={clases.divPrincipal}>         


                    <Grid container>

                         <Grid   xs={12} md={6}>
                                <div  className={clases.divTransbank}  >
                                <img className={clases.imagenTransbank}    src={transbank} alt=""/>
                                </div>
                        </Grid> 
                        <Grid style={{margin:"250px auto"}}  xs={5}>
                            <div className={clases.divTres}>
                            <Typography variant="h3" align="center">
                                 Tenemos todas las formas de pagos
                            </Typography>

                             <Typography variant="h4" align="center">
                                <ul>
                                        <li>Credito</li>
                                        <li>Debito</li>
                                        <li>Efectivo</li>
                                </ul>     
                                 
                            </Typography>   


                            </div>
                        </Grid>  


                    </Grid>






           </div>  
           </Paper>
                
        </Carousel>
  
  
        </div>
  
    )
}
 
