import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import Dentist from './Dentist'

const estilos=makeStyles((theme)=>({


    textUno:{
            color:"#5fced6"
    },
    textDos:{

color:"#888181"

    },
    textTres:{

        color:"#9e9e9e"
    }

}))




const Dentistas = () => {
    const clases=estilos()
    return (
        <div>
            <Typography className={clases.textUno} align="center"  variant="h5">
                    Equipo  Clínico
            </Typography>
            <Typography className={clases.textDos} align="center"  variant="h4">
                    Conozca a nuestras dentistas
            </Typography>

            <Typography className={clases.textTres} align="center"  variant="subtitle1">
                    en Clinica Dental Almendral  contamos  con un excelente  equipo de profesionales y maravillosas personas 
            </Typography>




            <Dentist></Dentist>

        </div>
    )
}

export default Dentistas
