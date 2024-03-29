import React, { useState, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Descripcion from './descripcion'
import implantes from '../../imagen/implantes.png'
import { getColorBox } from '../../Firebase/FuncFirebase'
import BoxColorDiv from './BoxColor'

const useStyles = makeStyles((theme) => ({


   root: {


      position: "absolute",
      bottom: "0",
      height: "150px",
      width: "250px",

      overflow: "hidden",
   }
   ,


   caja: {

      width: "100vw",



      '&  .MuiGrid-grid-xs-2': {


      }, '&  .boxuno': {

         width: "auto",
         height: "100%",
         position: "relative",
         background: "rgb(226,168,46)",
         marginTop: "42%",
         transition: "1s",
         padding: "10px"

      }, '&  .boxuno:hover': {

         width: "auto",
         height: "100%",
         position: "relative",
         background: "rgb(226,168,46)",
         marginTop: "0%",

      },





   },
   inicio: {

      width: "250px",
      height: "50%",
      position: "relative",
      background: "#000000"


   },
   boxuno: {

      width: "auto",
      height: "100%",
      position: "relative",
      background: "rgb(226,168,46)",
      marginTop: "25%",



   },
   boxdos: {

      width: "auto",
      height: "100%",
      position: "relative",
      background: "rgb(95,206,214)"



   },
   boxtres: {

      width: "auto",
      height: "100%",
      position: "relative",
      background: "#f50057"


   },
   boxcuatro: {

      width: "auto",
      height: "100%",
      position: "relative",
      background: "rgb(154,115,220)"


   },
   boxcinco: {

      width: "auto",
      height: "100%",
      position: "relative",
      background: "rgb(34,96,136)"


   },







}))

const Cajitas = () => {

   const [BoxColor, setBoxColor] = useState([])

   const implantes = {
      titulo: "implantes",
      texto: "lorem ipsum",
      imagen: './imagenes/implantes.png'


   }
   const estetica = {
      titulo: "estetica",
      texto: "lorem ipsum",
      imagen: './imagenes/estetica.png'


   }
   const ortodoncia = {
      titulo: "ortodoncia",
      texto: "lorem ipsum",
      imagen: './imagenes/ortodoncia.png'


   }
   const odontopediatra = {
      titulo: "odontopediatria",
      texto: "lorem ipsum",
      imagen: './imagenes/odontopediatria.png'


   }

   const clases = useStyles()


  



   useEffect(() => {
      const ObtenerTarjetasColor = async () => {
         const colorBoxArray = await getColorBox();
         setBoxColor(colorBoxArray)
      }
      ObtenerTarjetasColor()

   }, [])


   return (
      <div className={clases.caja}>

         <Grid container >

            {
               Array.isArray(BoxColor) && BoxColor.map(objeto =>
                  <Grid xs={3}>
                     <BoxColorDiv objeto={objeto}></BoxColorDiv>
                  </Grid>
               )
            }

         </Grid>

      </div>







   )
}

export default Cajitas
