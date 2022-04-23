import React from 'react'
import {Grid} from '@material-ui/core'
import Formulario from './Login/Formulario'
import Imagen from './Login/Imagen'
const Login = () => {
    return (
        <div>
        <Grid container >
        <Grid xs={12} md={7}>
            <Imagen/>
        </Grid>
        <Grid xs={12} md={5}>
        <Formulario>
        </Formulario>
        </Grid>
        </Grid>
        </div>
    )
}

export default Login
