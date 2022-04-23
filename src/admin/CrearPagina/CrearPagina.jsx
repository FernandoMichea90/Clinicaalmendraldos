import { errorPrefix } from '@firebase/util'
import { Typography, TextField, Grid, Button } from '@material-ui/core'
import { ClassOutlined, ErrorOutline } from '@material-ui/icons'
import React, { useState } from 'react'
import Estilos from '../Estilos'
import { CrearPagina as createweb } from '../../Firebase/FuncFirebase'
import Swal from 'sweetalert2'
const CrearPagina = () => {
    const estilos = Estilos()
    const [pagina, setpagina] = useState({
        nombre: '',
        ruta: ''
    })
    const [errores, seterrores] = useState({})
    const actualizarState = (e) => {
        e.preventDefault()
        if (e.target.name == 'ruta') {
            e.target.value = e.target.value.trim()
        }
        setpagina({ ...pagina, [e.target.name]: e.target.value })

    }
    const guardarPagina = () => {
        let erroresReturn = {}
        erroresReturn = validar()
        if (Object.keys(erroresReturn).length) {
            Swal.fire('Error', 'la informacion esta incompleta', 'warning')

        } else {
            try {
                createweb(pagina)
                Swal.fire('Exito', 'la informacion ha sido guardada', 'success')
                setpagina({
                    nombre: '',
                    ruta: ''
                })
            } catch (error) {
                Swal.fire('Error', { error }, 'erroru')
                console.log(error)
            }
        }

    }
    const validar = () => {

        let errores = {}
        if (pagina.nombre.trim() == '') {
            errores.nombre = 'debes ingresar el nombre de la pagina'
        }
        if (pagina.ruta.trim() == '') {
            errores.ruta = 'debes ingresar una ruta'
        }
        seterrores(errores)
        return errores
    }


    
    return (
        <div>
            <Grid container>
                <Grid xs={2}></Grid>
                <Grid xs={8}>
                    <Typography variant='h4'
                        className={estilos.margenVert10}
                    >
                        Crear pagina
                    </Typography>
                    {errores.nombre == undefined ?
                        <TextField
                            label='Nombre'
                            name="nombre"
                            variant="outlined"
                            className={estilos.margenVert10}
                            onChange={actualizarState}
                            value={pagina.nombre}
                            fullWidth
                        ></TextField>
                        :
                        <TextField
                            error
                            label='Nombre'
                            name="nombre"
                            variant="outlined"
                            helperText={errores.nombre}
                            className={estilos.margenVert10}
                            onChange={actualizarState}
                            value={pagina.nombre}
                            fullWidth
                        ></TextField>

                    }

                    {errores.ruta == undefined ?
                        <TextField
                            label='Ruta'
                            name='ruta'
                            variant="outlined"
                            onChange={actualizarState}
                            className={estilos.margenVert10}
                            value={pagina.ruta}
                            fullWidth
                        ></TextField> :
                        <TextField
                            error
                            label='Ruta'
                            name='ruta'
                            variant="outlined"
                            value={pagina.ruta}
                            helperText={errores.ruta}
                            onChange={actualizarState}
                            className={estilos.margenVert10}
                            fullWidth
                        ></TextField>


                    }

                    <Button
                        onClick={() => guardarPagina()}
                        fullWidth>
                        Guardar
                    </Button>
                    <Button href='/admin/listadopaginas'
                        className={estilos.margenVert10}
                        fullWidth>
                        Listado de pagina
                    </Button>
                </Grid>
                <Grid xs={2}></Grid>
            </Grid>


        </div>



    )
}

export default CrearPagina
