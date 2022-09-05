import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'

import Sonrisa from '../imagen/corteuno.png'
import Formulario from '../imagen/corteTres.png'
import Dentista from '../imagen/corteDos.png'
import DentistaTres from '../imagen/dentistTres.png'



const estilos = makeStyles((theme) => ({

    icono: {

        height: "180px",
        margin: "auto",
        display: "block"
    },
    margenDiv: {

        margin: "auto 5px"
    },

    divIcono: {

        padding: "32px",

    },
    fontTitulo: {
        color: " #888181"
    },
    fontSubtitulo: {
        color: "#9e9e9e"
    },
    fontSubtituloDos: {
        color: "#5fced6",
        textTransform: "uppercase"
    },
    imgBlancoNegro:{
        filter: 'grayscale(100%)'
      }



}))

const Servicios = () => {

    const clases = estilos()
    return (
        <div>
            <Grid container>
            <Grid xs={12} md={4} >
                    <div className={clases.margenDiv}>

                        <div className={clases.divIcono}>

                            <img className={clases.icono} src={Formulario} alt="" />

                        </div>


                        <Typography className={clases.fontSubtituloDos} align="center" variant="subtitle1">
                            cirujano dentista Rehabilitacion oral
                        </Typography>
                        <Typography className={clases.fontTitulo} align="center" variant="h5">
                            Jocelyn Michea Marquez
                        </Typography>
                        <Typography className={clases.fontSubtitulo} align="center" variant="subtitle1">
                            Especialista en Implantologia Bucomaxilofacial
                        </Typography>
                        <Typography className={clases.fontSubtitulo} align="center" variant="subtitle1">
                            Universidad de Valparaiso
                        </Typography>

                    </div>
                </Grid>
                
                <Grid xs={12} md={4}>
                    <div className={clases.margenDiv}>

                        <div className={clases.divIcono}>

                            <img className={clases.icono} src={Sonrisa} alt="" />

                        </div>


                        <Typography className={clases.fontSubtituloDos} align="center" variant="subtitle1">
                            cirujano dentista
                        </Typography>
                        <Typography className={clases.fontTitulo} align="center" variant="h5">
                            Paz Rios O.
                        </Typography>
                        <Typography className={clases.fontSubtitulo} align="center" variant="subtitle1">
                            Odontologia General y Odontopediatria
                        </Typography>

                    </div>
                </Grid>
              
                <Grid xs={12} md={4}>
                    <div className={clases.margenDiv}>

                        <div className={clases.divIcono}>

                            <img className={clases.icono +' '+ clases.imgBlancoNegro} src={DentistaTres} alt="" />

                        </div>  



                        <Typography className={clases.fontSubtituloDos} align="center" variant="subtitle1">
                            cirujano dentista 
                        </Typography>
                        <Typography className={clases.fontTitulo} align="center" variant="h5">
                        Gianina Picasso Yaeger
                        </Typography>
                        <Typography className={clases.fontSubtitulo} align="center" variant="subtitle1">
                            Especialista en Ortodoncia y Ortopedia Dentomaxilar 
                        </Typography>
                        <Typography className={clases.fontSubtitulo} align="center" variant="subtitle1">
                            Universidad de Chile
                        </Typography>


                    </div>

                </Grid>


                <Grid xs={12} md={4}>

                </Grid>
                <Grid xs={12} md={4} >
                    <div className={clases.margenDiv}>

                        <div className={clases.divIcono}>

                            <img className={clases.icono} src={Dentista} alt="" />

                        </div>



                        <Typography className={clases.fontSubtituloDos} align="center" variant="subtitle1">
                            secretaria
                        </Typography>
                        <Typography className={clases.fontTitulo} align="center" variant="h5">
                            Titi
                        </Typography>
                        <Typography className={clases.fontSubtitulo} align="center" variant="subtitle1">
                            Yessenia Lopez
                        </Typography>

                    </div>
                </Grid>
                <Grid xs={12} md={4}>

                </Grid>

            </Grid>
        </div>
    )
}

export default Servicios
