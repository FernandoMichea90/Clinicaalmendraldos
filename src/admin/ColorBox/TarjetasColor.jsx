import React,{useState} from 'react'
import Card from './Card'


 const TarjetasColor= (props) => {
    
    
  return (
    <>
    

    {
      Array.isArray(props.TarjetasColor)&& props.TarjetasColor.map(row =><Card Paginas={props.Paginas} item={row}></Card>)
    }
    </>
  )
}

export default TarjetasColor;