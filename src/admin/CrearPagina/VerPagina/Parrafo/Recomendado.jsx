import React from 'react'
import {Typography, makeStyles} from '@material-ui/core'
import  Estilos from '../../../Estilos'


const estilos=makeStyles((theme)=>({
    root: {
        ' & $a':{
            color: '#000000'
        } ,

        '&:hover':{
            borderLeft: '5px solid #b7d637 !important',
            padding:' 0 5px'
            ,
          ' & $a':{
              color: '#039be5'
          }  

            
        }}
}))
const Recomendado = () => {
    const clases=Estilos()
    const clasesDos=estilos()
    return (
        <div>
            <Typography  variant="h4"  gutterBottom>
                Recomendados
            </Typography>
            <Typography  className={clasesDos.root} variant="subtitle1"  gutterBottom>
            <a className='link' href='https://www.youtube.com/'> 
            Vertebral celebra su 10° aniversario con webinar sobre el desarrollo de la Educación Superior TP del país
            </a>
            </Typography>
            <Typography  className={clasesDos.root} variant="subtitle1"  gutterBottom>
            <a className='link' href='https://www.youtube.com'>
            Área Mecánica de INACAP Sede Renca gana primer lugar en Olimpiadas WorldsKills 2021
            </a>
            </Typography>
            <Typography  className={clasesDos.root} variant="subtitle1"  gutterBottom>
            <a className='link' href='https://www.youtube.com'>
            Estudiantes celebran con entusiasmo 55°Aniversario
            </a>
            </Typography>
        </div>
    )
}
export default Recomendado
