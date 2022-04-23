import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import Estilos from '../Estilos'
import { useHistory } from "react-router-dom";
import Firebase from '../../Firebase/FuncFirebase'
import { makeStyles } from '@material-ui/core'
import Entrada from '../../imagen/exportar.png'



const estilo = makeStyles((theme) => ({

    divImage: {
        height: '200px',
        width: '100%',
    },
    estiloImagen:{
        width:'80%',
        margin:'auto',
        display:'block',
        left:'0',
        right:'0'

    }
}))




const Formulario = props => {
    let history = useHistory();
    const [state, setstate] = useState({ usuario: '', contrasena: '' })
    const [error, seterror] = useState({ usuario: null, contrasena: null })
    const estilos = Estilos()
    const style = estilo()

    const actualizarState = (e) => {
        e.preventDefault()
        setstate({ ...state, [e.target.name]: e.target.value })
    }
    const ingresarCorreoGmail = async () => {
        validar()
        await Firebase.registrarCorreo()
        history.push('/')
    }
    const validar = () => {
        let errores = {}
        if (state.usuario.trim() == '') {
            errores.usuario = 'debe ingresar el usuario'
        }
        if (state.contrasena.trim() == "") {
            errores.contrasena = 'debe ingresar contrasena'
        }
        seterror(errores)

    }
    return (
        <div className={estilos.container}>



            <div className={estilos.verticalCenter}>
                <div className={style.divImage}  >

                    <img src={Entrada} className={style.estiloImagen}   ></img>

                </div>



                {error.usuario ?
                    <TextField
                        className={estilos.margenVert10}
                        label="Usuario"
                        name="usuario"
                        variant="standard"
                        value={state.usuario}
                        onChange={actualizarState}
                        error
                        helperText={error.usuario}
                        fullWidth>
                    </TextField> :
                    <TextField
                        className={estilos.margenVert10}
                        label="Usuario"
                        name="usuario"
                        variant="standard"
                        value={state.usuario}
                        onChange={actualizarState}
                        fullWidth>
                    </TextField>

                }
                {error.contrasena ?
                    <TextField
                        className={estilos.margenVert10}
                        label="Contraseña"
                        name='Contrasena'
                        variant="standard"
                        value={state.contrasena}
                        type="password"
                        error
                        helperText={error.contrasena}
                        onChange={actualizarState}
                        fullWidth></TextField> :
                    <TextField
                        className={estilos.margenVert10}
                        label="Contraseña"
                        name='Contrasena'
                        variant="standard"
                        value={state.contrasena}
                        type="password"
                        onChange={actualizarState}
                        fullWidth></TextField>
                }
                <Button
                    onClick={() => ingresarCorreoGmail()}
                    className={estilos.margenVert10}
                    fullWidth
                >
                    Ingresar
                </Button>
                <Button
                    className={estilos.margenVert10}
                    fullWidth
                >
                    Gmail
                </Button>
            </div>
        </div>
    )
}

export default Formulario
