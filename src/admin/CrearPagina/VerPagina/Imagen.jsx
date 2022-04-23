import React from 'react'
import {makeStyles} from '@material-ui/core'
const estilos=makeStyles((theme)=>({
    imagen:{
        width: '100%'
    }
}))
const Imagen = (props) => {
    const clases=estilos()
    return (
        <div>
        <img className={clases.imagen} src={props.imagen}></img>      
        </div>
    )
}
export default Imagen
