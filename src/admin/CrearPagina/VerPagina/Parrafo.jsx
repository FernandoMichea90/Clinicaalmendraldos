import React from 'react'
import {Typography,Grid} from '@material-ui/core'
import Iconos from './Parrafo/Iconos'
import Recomendado from './Parrafo/Recomendado'
const Parrafo = (props) => {
    return (
        <div style={{margin:'20px 0px'}}>
            <Grid container>
                <Grid item xs={3}>
                    <Recomendado></Recomendado>
                </Grid>
            <Grid item xs={7}>

            <div dangerouslySetInnerHTML={{__html:props.parrafo}}>
                                    
            </div>
            </Grid>
            <Grid item xs={2}>
                <Iconos></Iconos>
            </Grid>

            </Grid>
        </div>
    )
}

export default Parrafo
