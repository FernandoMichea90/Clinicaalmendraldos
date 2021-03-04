import React from 'react'
import {Grid,Typography,makeStyles,Hidden} from '@material-ui/core'



const useStyles= makeStyles((theme)=>({


root:{
    position: "fixed",
    top: "92px",
    width: "100%",
    background: "white",
    zIndex:"10"
  
},
divLink:{
    color: "#8a8989",



    "& :hover":{
    backgroundColor:"rgb(96,207,212)",
    color:"#ffffff" ,
    }


}





}))




const Opciones = () => {

    const classes=useStyles()                               
    return (
        <Hidden mdDown>
        <div className={classes.root}>
            
                <Grid container>

                                <Grid xs={2}>
                                        <div className={classes.divLink}>
                                        <Typography align="center" variant="subtitle1" > Inicio</Typography>
                                        </div>
                                </Grid>
                                <Grid xs={2}>
                                <div className={classes.divLink}>
                                <Typography align="center" variant="subtitle1"> Servicios</Typography>
                                </div>
                                </Grid>
                                <Grid xs={2}>
                                <div className={classes.divLink}>
                                <Typography align="center"variant="subtitle1"> Nosotros</Typography>
                                </div>  
                                </Grid>
                                <Grid xs={2}>
                                <div className={classes.divLink}>
                                <Typography align="center" variant="subtitle1"> Implantologia Oral</Typography>
                                </div>
                                </Grid>
                                <Grid xs={2}>
                                <div className={classes.divLink}>
                                <Typography align="center" variant="subtitle1"> Especial Covid-19</Typography>
                                </div>
                                </Grid>
                                <Grid xs={2}>
                                <div className={classes.divLink}>
                                <Typography align="center" variant="subtitle1"> Contacto   </Typography>
                                </div>      
                                </Grid>



                </Grid>








        </div>
        </Hidden>
    )
}

export default Opciones
