import React,{useState} from 'react'
import { makeStyles,Grid, Button,Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Swal from 'sweetalert2'
import LinkIcon from '@material-ui/icons/Link';
const estilos=makeStyles((theme)=>({
    imagenVacia:{
       overflow:'hidden',
        height:'20vw',
        width:'100%',
        borderStyle:'dotted',
        borderColor:'#bad73e',
        display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
    },
    input: {
        display: 'none',
      },
      colorBoton:{
        color:'#3595e2'
      },
      imagen:{
          width: '100%',
      },
      margenDivBoton:{
          margin:'10px 0px'
      },
      margenBoton:{
        margin:'0px 10px'
    }
}))



const Imagen = (props) => {
    const clases=estilos()
    

    const guardarImagen=async()=>{
        const { value: file } = await Swal.fire({
            title: 'Select image',
            input: 'file',
            inputAttributes: {
              'accept': 'image/*',
              'aria-label': 'Upload your profile picture'
            }
          })
          
          if (file) {
          
            const reader = new FileReader()
            reader.onload = (e) => {
              Swal.fire({
                title: 'Your uploaded picture',
                imageUrl: e.target.result,
                imageAlt: 'The uploaded picture'
              })
            }
            console.log(file)
            props.setimagen({
              file:file,
              url:URL.createObjectURL(file)
            })
            reader.readAsDataURL(file)
          }  
    }
    const guardarLinkImagen=async()=>{
        const { value: url } = await Swal.fire({
            title: 'Enter the URL',
            input: 'url',
            inputLabel: 'URL address',
            inputPlaceholder: 'Enter the URL'
          })
          props.setimagen({url:url,file:null})
        
    }
    return (
        <div>
            <div className={clases.imagenVacia}>
            {props.imagen.url == null ?
            <div> 
               
            <IconButton onClick={()=>{guardarImagen()}} className={clases.colorBoton} color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
            </IconButton>
   
        </div>
       
            :
         
                <img className={clases.imagen} src={props.imagen.url}></img>
           
            }
         </div>

         <Grid className={clases.margenDivBoton} container>
             <Grid item xs={12}>
                 <Typography align='center'>
                 <Button variant='contained'
                  className={clases.margenBoton}
                  startIcon={<PhotoCamera/>}  
                  onClick={()=>{guardarImagen()}}
              
                  >   
                  Imagen
                  </Button>
                  <Button variant='contained'
                    className={clases.margenBoton}    
                    startIcon={<LinkIcon/>}
                    onClick={()=>{guardarLinkImagen()}}
                  >   
                  Link 
                  </Button>
                  </Typography>
             </Grid>
             <Grid item xs={6}>
             <Typography align='center'>
          
                  </Typography>
             </Grid>

         </Grid>
        </div>
    )
}

export default Imagen
