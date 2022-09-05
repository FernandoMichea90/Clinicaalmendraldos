import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core'
import Descripcion from './descripcion'

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

const BoxColor = (props) => {
   const [Color, setColor] = useState({})
   const clases = useStyles()
   //Seleccionar color 
   const SwitchColorBox = (color) => {
      let Color;
      switch (color.trim()) {
         case "rojo":
            Color = {
               imagen: './imagenes/implantes.png',
               color: "rgb(245, 0, 87)"
            }
            break;
         case "azul":
            Color = {
               imagen: './imagenes/implantes.png',
               color: "rgb(34, 96, 136)"
            }
            break;
         case "celeste":
            Color = {
               imagen: './imagenes/implantes.png',
               color: 'rgb(95, 206, 214)'
            }
            break;
         case "amarillo":
            Color = {
               color: "rgb(226, 168, 46)",
               imagen: './imagenes/implantes.png'
            }
            break;
         default:
            break;
      }
      setColor({...props.objeto,...Color})
   }

   const implantes = {
      titulo: props.objeto.Titulo,
      descripcion: props.objeto.Descripcion,
      imagen: './imagenes/implantes.png'
   }
   useEffect(() => {
      SwitchColorBox(props.objeto.id);
   }, [])

   return (
      <div className={clases.root}>
         <div className="boxuno" style={{ background: Color.color }} >
            <Descripcion objeto={Color}></Descripcion>

         </div>
      </div>

   )
}

export default BoxColor