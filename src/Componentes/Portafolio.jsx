import React from 'react'
import {Grid,Typography, makeStyles} from '@material-ui/core'
import hotel from '../imagen/hotel.jpg'
import almendral from '../imagen/almendral.jpg'


const useStyle=makeStyles((theme)=>({

    imagen:{
        width:"100%",
        height:"264px"
    },
    divImagen:{

        padding:"35px"
    },

    divPrincipal:{

        marginBottom:"100px"
    }


}))


const Portafolio = () => {

    const clases=useStyle()


    return (
        <div className={clases.divPrincipal}>


           

            <Grid container>

                <Grid xs={12} md={6}>
                    <div className={clases.divImagen}>
                       <img className={clases.imagen} src={hotel}></img>     

                    </div>

                    <Typography  align="center" variant="subtitle1">
                            <a href="https://hotelecomusic.cl/">
                            www.hotelecomusic.cl
                            </a>    
                    </Typography>
                </Grid>
             
                <Grid xs={12} md={6}>
                    <div className={clases.divImagen}>
                       <img className={clases.imagen} src={almendral}></img>     

                    </div>

                    <Typography  align="center" variant="subtitle1">
                            <a href="https://clinicaalmendral.netlify.app/">
                            www.clinicaalmendral.netlify.app/
                            </a>    
                    </Typography>
                </Grid>  

               
               



            </Grid>
            
        </div>
    )
}


export default Portafolio
