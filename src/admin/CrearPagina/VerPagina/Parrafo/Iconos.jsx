import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import { IconButton, Typography,Grid, makeStyles } from '@material-ui/core'
import FacebookCircular from '../../../../iconos/facebookCircular.png'
import TwitterCircular from '../../../../iconos/twitterCircular.png'

const estilos=makeStyles((theme)=>({
    imagen:{
        width:'25%',
        margin:'10px 0px',
        '&:hover':{
            width:'30%'
        }
    }
}))

const Iconos = () => {
    const clases=estilos()
    return (
        <div>
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
                <Grid item>
                <Typography align="center">
                  <img  className={clases.imagen} src={FacebookCircular} alt='prueba'></img>
                 </Typography>
                </Grid>
                <Grid item>
                <Typography align="center">
                <img  className={clases.imagen} src={TwitterCircular} alt='prueba'></img>

                 </Typography>
                </Grid>
            </Grid>
            
        </div>
    )}

export default Iconos
