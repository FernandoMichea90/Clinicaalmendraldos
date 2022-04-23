import React from 'react'
import Sillon from '../../imagen/sillon.jpeg'
import entrada from '../../imagen/entrada.jpeg'



const CompCarrusel = (props) => {
    const estilo={
        width:'100%',
        height:'100%' ,
        backgroundImage: `url(${props.imagen})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% auto'
     

        
    }
  return (
   
        <div  style={estilo}></div>
     
      
 
  )
}

export default CompCarrusel