import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
const estilos = makeStyles((theme) => ({
    icono: {
        height: "288px",
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

                            <img className={clases.icono} src={process.env.PUBLIC_URL+'./img_dentista/10.png'} alt="" />

                        </div>


                        <Typography className={clases.fontSubtituloDos} align="center" variant="subtitle1">
                            cirujano dentista Rehabilitacion oral
                        </Typography>
                        <Typography className={clases.fontTitulo} align="center" variant="h5">
                            Jocelyn Michea Marquez
                        </Typography>
                        <Typography className={clases.fontSubtitulo} align="center" variant="subtitle1">
                            Especialista en Implantología  Bucomaxilofacial
                        </Typography>
                        <Typography className={clases.fontSubtitulo} align="center" variant="subtitle1">
                            Universidad de Valparaiso
                        </Typography>

                    </div>
                </Grid>
                
                <Grid xs={12} md={4}>
                    <div className={clases.margenDiv}>

                        <div className={clases.divIcono}>

                            <img className={clases.icono} src={process.env.PUBLIC_URL+'./img_dentista/12.png'} alt="" />

                        </div>


                        <Typography className={clases.fontSubtituloDos} align="center" variant="subtitle1">
                            cirujano dentista
                        </Typography>
                        <Typography className={clases.fontTitulo} align="center" variant="h5">
                            Paz Rios Oróstegui
                        </Typography>
                        <Typography className={clases.fontSubtitulo} align="center" variant="subtitle1">
                            Odontologia General y Odontopediatria
                        </Typography>
                        <Typography className={clases.fontSubtitulo} align="center" variant="subtitle1">
                            Universidad de Valparaíso
                        </Typography>
                        
                        

                    </div>
                </Grid>
              
                <Grid xs={12} md={4}>
                    <div className={clases.margenDiv}>

                        <div className={clases.divIcono}>

                            <img className={clases.icono}  src={process.env.PUBLIC_URL+'./img_dentista/11.png'} alt="" />

                        </div>  



                        <Typography className={clases.fontSubtituloDos} align="center" variant="subtitle1">
                            cirujano dentista 
                        </Typography>
                        <Typography className={clases.fontTitulo} align="center" variant="h5">
                            Giannina Picasso Yaeger
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

                            <img className={clases.icono}  src={process.env.PUBLIC_URL+'./img_dentista/9.png'} alt="" />

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
