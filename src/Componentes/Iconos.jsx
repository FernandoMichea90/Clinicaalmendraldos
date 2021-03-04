import React from 'react'
import { Grid,Typography, makeStyles } from '@material-ui/core'
import dentista from './../imagen/dentista.png'
import smile from './../iconos/smile.png'
import gift from './../iconos/gift.png'
import instrumentos from './../iconos/instrumentos.png'
import silla from './../iconos/silla.png'
import hogar from './../iconos/hogar.png'
import escudo from './../imagen/escudo.png'
import implante from './../iconos/implante.png'
import formulario from './../imagen/formulario.png'
import wheelchair from './../iconos/wheelchair.png'
import clock from './../iconos/clock.png'
import especialidades from './../iconos/especialidades.png'




const estilos=makeStyles((theme)=>({


    texto:{

        color:"#949494",
        lineHeight:"1.2",
        margin:"14px auto"
    }
    

}))




const Iconos = () => {

      const classes=estilos()

    return (
        <div>
            <Grid container>
                <Grid container xs={6} md={3}>
                            <Grid xs={4}>
                                
                            <Typography variant="subtitle1" align="right">
                            <img src={dentista} alt="" height="40"/>
                            </Typography>
                                </Grid>




                            <Grid xs={8}>
                                <Typography className={classes.texto} variant="subtitle1" align="center">
                            Doctores amigable
                            </Typography>
                                </Grid>
                </Grid>
                <Grid container xs={6} md={3}>

                                   <Grid xs={4}>
                                
                                <Typography variant="subtitle1" align="right">
                                <img src={smile} alt="" height="40"/>
                                </Typography>
                                    </Grid>
    
    
    
    
                                <Grid xs={8}>
                                    <Typography className={classes.texto} variant="subtitle1" align="center">
                                    Para toda la familia 
                                </Typography>
                                    </Grid>

                    
                </Grid>
                <Grid container xs={6} md={3}>

                            <Grid xs={4}>

                            <Typography variant="subtitle1" align="right">
                            <img src={gift} alt="" height="40"/>
                            </Typography>
                            </Grid>




                            <Grid xs={8}>
                            <Typography className={classes.texto} variant="subtitle1" align="center">
                            Promociones
                            </Typography>
                            </Grid>


                            </Grid>
                <Grid container xs={6} md={3}>

                                <Grid xs={4}>

                                <Typography variant="subtitle1" align="right">
                                <img src={instrumentos} alt="" height="40"/>
                                </Typography>
                                </Grid>




                                <Grid xs={8}>
                                <Typography className={classes.texto} variant="subtitle1" align="center">
                                Equipo moderno
                                </Typography>
                                </Grid>


                                </Grid>
                <Grid container xs={6} md={3}>
                            <Grid xs={4}>
                                
                            <Typography variant="subtitle1" align="right">
                            <img src={silla} alt="" height="40"/>
                            </Typography>
                                </Grid>




                            <Grid xs={8}>
                                <Typography className={classes.texto} variant="subtitle1" align="center">
                                    Oficina Comoda
                            </Typography>
                                </Grid>
                </Grid>
                <Grid container xs={6} md={3}>

                                   <Grid xs={4}>
                                
                                <Typography variant="subtitle1" align="right">
                                <img src={hogar} alt="" height="40"/>
                                </Typography>
                                    </Grid>
    
    
    
    
                                <Grid xs={8}>
                                    <Typography className={classes.texto} variant="subtitle1" align="center">
                                    Ubicacion conveniente
                                </Typography>
                                    </Grid>

                    
                </Grid>
                <Grid container xs={6} md={3}>

                            <Grid xs={4}>

                            <Typography variant="subtitle1" align="right">
                            <img src={escudo} alt="" height="40"/>
                            </Typography>
                            </Grid>




                            <Grid xs={8}>
                            <Typography className={classes.texto} variant="subtitle1" align="center">
                                    Satisfaccion Garantizada
                            </Typography>
                            </Grid>


                            </Grid>
                <Grid container xs={6} md={3}>

                                <Grid xs={4}>

                                <Typography variant="subtitle1" align="right">
                                <img src={implante} alt="" height="40"/>
                                </Typography>
                                </Grid>




                                <Grid xs={8}>
                                <Typography className={classes.texto} variant="subtitle1" align="center">
                                        Materiales de alta calidad
                                </Typography>
                                </Grid>


                                </Grid>
                <Grid container xs={6} md={3}>
                            <Grid xs={4}>
                                
                            <Typography variant="subtitle1" align="right">
                            <img src={especialidades} alt="" height="40"/>
                            </Typography>
                                </Grid>




                            <Grid xs={8}>
                                <Typography className={classes.texto} variant="subtitle1" align="center">
                                Principales especialidades
                            </Typography>
                                </Grid>
                </Grid>
                <Grid container xs={6} md={3}>

                                   <Grid xs={4}>
                                
                                <Typography variant="subtitle1" align="right">
                                <img src={clock} alt="" height="40"/>
                                </Typography>
                                    </Grid>
    
    
    
    
                                <Grid xs={8}>
                                    <Typography className={classes.texto} variant="subtitle1" align="center">
                                    Poco o ningun tiempo de espera
                                </Typography>
                                    </Grid>

                    
                </Grid>
                <Grid container xs={6} md={3}>

                            <Grid xs={4}>

                            <Typography variant="subtitle1" align="right">
                            <img src={wheelchair} alt="" height="40"/>
                            </Typography>
                            </Grid>




                            <Grid xs={8}>
                            <Typography className={classes.texto} variant="subtitle1" align="center">
                                Accesibilidad
                            </Typography>
                            </Grid>


                            </Grid>
                <Grid container xs={6} md={3}>

                                <Grid xs={4}>

                                <Typography variant="subtitle1" align="right">
                                <img src={formulario} alt="" height="40"/>
                                </Typography>
                                </Grid>




                                <Grid xs={8}>
                                <Typography className={classes.texto} variant="subtitle1" align="center">
                                Certificado de SEREMI
                                </Typography>
                                </Grid>


                                </Grid>  
            </Grid>
        </div>
    )
}

export default Iconos
