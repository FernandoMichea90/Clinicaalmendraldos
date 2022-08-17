import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import Estilos from '../Estilos'
import { useHistory } from "react-router-dom";
import Firebase ,{autentificacionCorreo} from '../../Firebase/FuncFirebase'
import { makeStyles } from '@material-ui/core'
import Entrada from '../../imagen/exportar.png'
import Swal from 'sweetalert2'



const estilo = makeStyles((theme) => ({

    root: {
        '& .divLink:hover ': {

            padding: "21px",
            color: "#000000"
        },
        '& .MuiButton-root:hover': {
            color: '#5fced6',
            border: '1px solid',
            background: '#fff'
        },

        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: '1px solid rgba(0, 0, 0, 0.87) !important',
        }
    },

    divImage: {
        height: '200px',
        width: '100%',
    },
    estiloImagen: {
        width: '80%',
        margin: 'auto',
        display: 'block',
        left: '0',
        right: '0'

    },
    aLink: {
         textTransform: "uppercase",
        fontFamily: "Oswald",
        color: "#ffffff",
        backgroundColor: "rgb(95,206,214)"
    },
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
        const error=validar()
        //seterror({ usuario: null, contrasena: null })
       
        if (!error) {
            const response = await autentificacionCorreo(state)

            if(response.estado){
               history.push('/admin')
            }else{
                Swal.fire('error','Credenciales incorrectas','error')
            }
        }else{
            Swal.fire('error','ha ocurrido un error','error')
        }
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
        if(errores.usuario==null && errores.contrasena==null){
            return false
        }else{
            return true 
        }
    }
    return (
        <div className={estilos.container + ' ' + style.root}>
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
                        name='contrasena'
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
                        name='contrasena'
                        variant="standard"
                        value={state.contrasena}
                        type="password"
                        onChange={actualizarState}
                        fullWidth></TextField>
                }
                <Button
                    onClick={() => ingresarCorreoGmail()}
                    className={estilos.margenVert10 + ' ' + style.aLink}
                    fullWidth
                >
                    Ingresar
                </Button>
                <Button
                    className={estilos.margenVert10 + ' ' + style.aLink}
                    fullWidth
                >
                    Gmail
                </Button>
            </div>
        </div>
    )
}
export default Formulario
