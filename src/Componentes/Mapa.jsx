import React from 'react'
import { makeStyles } from '@material-ui/core'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
  } from "react-google-maps";
  




const useStyle=makeStyles((theme)=>({
         imagen:{

                width:"100%",
                height:"100%",
                border:"0"

         },
         divPrincipal:{

                height:"80vh",
                minHeight:"500px",
             
                marginTop:"00px"

         },   

}))




const Mapa = () => {

    const clases=useStyle()

    
    return (
        <div>

            <div name="ubicacion" className={clases.divPrincipal}>

            <iframe className={clases.imagen} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.431761109229!2d-70.59909728512068!3d-32.83381807351503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968804e06480374f%3A0xfcb27c87d5cd2f04!2sOdontolog%C3%ADa%20Almendral%20Los%20Andes!5e0!3m2!1sen!2scl!4v1611882600952!5m2!1sen!2scl?AIzaSyCE-9odbKyIEJykp0KazN_qtZbFyaNPQtc" width="800" height="600" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

            </div>        



        </div>
    )
}

export default Mapa

    


