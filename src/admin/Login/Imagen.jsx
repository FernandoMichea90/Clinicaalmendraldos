import React from 'react'
import Estilos from '../Estilos'
import Entrada from '../../imagen/entrada.jpeg'
import {makeStyles} from '@material-ui/core'


const estilo = makeStyles((theme)=>({
    
    image: {
        backgroundImage: `url(${Entrada})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:"#ffffff",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
      },
}))

const Imagen = () => {
const estilos=Estilos()
const style=estilo()
    
    return (
        <div className={estilos.container}>
        <div className={style.image} ></div>
        </div>
    )
}

export default Imagen
