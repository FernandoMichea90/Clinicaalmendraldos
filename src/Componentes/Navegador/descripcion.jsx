import React from 'react'
import {Grid,Typography, makeStyles,Button} from '@material-ui/core'
import implantes  from '../../imagen/implantes.png'
import AddIcon from '@material-ui/icons/Add';

const estilos=makeStyles((theme)=>({

    texto:{

        color:"#ffffff",
        textTransform:"uppercase"
    },
    textodos:{

        color:"#ffffff",
      
    padding:" 5px 10px 5px 10px"
    }
    

    ,

    root:{
     "& .MuiButton-root:hover": {
        color: "#ffffff!important",
        backgroundColor: "#e0e0e000!important"



    },
    "& .MuiButton-root": {
        color: "white",
        borderRadius: "22px",
        border: "1px solid white",
        boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
        backgroundColor: "#e0e0e000",
        fontSize: "11px",
        padding:" 3px 10px",

        
    }

    }



}))







const descripcion = (props) => {


    const clases=estilos()

    return (

        <div className={clases.root}>
        <Grid  container>
            <Grid xs={2}>
              <Typography  className={clases.texto}   align="center">  
              <img src={props.objeto.imagen} alt="" height="28"/>   
              </Typography>   
            </Grid>

            <Grid xs={10}>

                <Typography     className={clases.texto}  align="center" >
                    {props.objeto.Titulo}
                </Typography>
                
             </Grid>

            <Grid xs={12}>

            <Typography     className={clases.textodos}  align="left" >
                {props.objeto.Descripcion}
            </Typography>
            
            </Grid>

            <Grid xs={4}>

              
            </Grid>
            <Grid xs={8}>
               
                <Button  href={props.objeto.Pagina}  variant="contained"
                    endIcon={<AddIcon></AddIcon>}
                >
                    ver mas
                </Button>
              
            </Grid>



        </Grid>
        </div>  
        
    )
}

export default descripcion
