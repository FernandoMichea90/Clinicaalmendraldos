import React from 'react'
import { Grid, makeStyles, Typography,Button } from '@material-ui/core'
import Evento from '@material-ui/icons/Event';
const estilos =makeStyles((theme)=>({
    fondo:{
        background: "#ffffff",
        borderTop: "4px solid #5fced6",
        borderBottom: "4px solid #5fced6",
        borderColor:"#5fced6",                                                                                                             
        boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px      rgb(0 0 0 / 12%)",
                    '& .MuiButton-root:hover': {
                    
                        color: "#5fced6",
                        background: "#fff",
                        border: "1px solid"
                
                        },
                        '& .MuiButton-root': {
                    
                            color: "#5fced6",
                            background: "#fff",
                            border: "1px solid",
                            margin:"9px"
                    
                            },

                        },
                    
          textUno:{
                color: "#5fced6",
                textTransform: "uppercase",
                fontWeight: "600"
            
          },
          divMargen:{
            margin: "10px auto"
          },

        

    }))


const Reservar = () => {
    const clases=estilos()
    return (
        <div className={clases.fondo}>
            <Grid container>
                <Grid xs={12} md={6}>

                    <div className={clases.divMargen}>
                    <Typography  className={clases.textUno} variant="h5" align="center">

                        programa una cita para una consulta 
                    </Typography>
                    </div>
                </Grid>
                <Grid xs={12} md={6} >
                <Typography variant="h5" align="center">
                    <Button variant="contained"
                    endIcon={<Evento></Evento>}

                    href="https://e9ce63006869ea140e20053ac15620ffc8ee3a0b.agenda.softwaredentalink.com/agendas/agendamiento " target="_blank"
                    >
                        solicitar cita
                    </Button>
                </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Reservar
