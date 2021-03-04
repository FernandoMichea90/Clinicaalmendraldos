import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'

import Sonrisa from '../imagen/smile.png'
import Formulario from '../imagen/formulario.png'
import Dentista from '../imagen/dentista.png'
import Escudo from '../imagen/escudo.png'



const estilos=makeStyles((theme)=>({

   icono:{  

        height:"92px"
    },
    margenDiv:{

        margin:"auto 5px"
    },

    divIcono:{

        padding: "12px",
        borderRadius: "63px",
        border: "2px solid",
        borderColor:"#60cfd7",
        margin: "21px auto",
        width:"132px"
    },
    fontTitulo:{
        color:" #575656;"
    },
    fontSubtitulo:{
        color:"#949494"
    }


}))

const Servicios = () => {

    const clases =estilos()
    return (
        <div>
            <Grid container>
                <Grid xs={12} md={3}>
                    <div className={clases.margenDiv}>

                        <div className={clases.divIcono}>

                            <img className={clases.icono} src={Sonrisa} alt=""/>

                        </div>

                        <Typography className={clases.fontTitulo} align="center" variant="h5">
                                Atencion Personalizada
                        </Typography>
                        <Typography className={clases.fontSubtitulo} align="center" variant="subtitle1">
                            te ofrecemos tratamiento  que se ajuste a su necesidades 
                        </Typography>

                    </div>
                </Grid>
                <Grid xs={12} md={3}>
                                    <div className={clases.margenDiv}>

                                    <div className={clases.divIcono}>

                                            <img className={clases.icono} src={Formulario} alt=""/>

                                    </div>


                    <Typography className={clases.fontTitulo} align="center" variant="h5">
                            Calidad y Excelencia
                    </Typography>
                    <Typography className={clases.fontSubtitulo} align="center" variant="subtitle1">
                        Nos preocupamos de la capacitacion continua de nuestro equipo 
                    </Typography>

                    </div>
                </Grid>
                <Grid xs={12} md={3}>
                <div className={clases.margenDiv}>

                <div className={clases.divIcono}>

                    <img className={clases.icono} src={Dentista} alt=""/>

                </div>


                <Typography  className={clases.fontTitulo} align="center" variant="h5">
                        Equipo multidisciplinario   
                </Typography>
                <Typography className={clases.fontSubtitulo} align="center" variant="subtitle1">

                    Nuestras especialistas estan a tu disposicion  para entregarte  una solucion integral a tu problema
                </Typography>

                </div>
                    
                </Grid>
                <Grid xs={12} md={3}>

                <div className={clases.margenDiv}>

                <div className={clases.divIcono}>

                <img className={clases.icono} src={Escudo} alt=""/>

                </div>

<Typography className={clases.fontTitulo} align="center" variant="h5">
        Certificacion SEREMI
</Typography>
<Typography className={clases.fontSubtitulo} align="center" variant="subtitle1">
            Cumplimos con la normativa legal y  exigencias  vigente  del SEREMI de salud
  
</Typography>

</div>
    
                    
                    </Grid>
            </Grid>
        </div>
    )
}

export default Servicios
