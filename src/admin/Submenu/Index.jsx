import React,{useState,useEffect} from 'react'
import { getPaginas, getSubMenu } from '../../Firebase/FuncFirebase'
import CardSubmenu from './CardSubmenu'

const Index = () => {
  
  const [SubMenu, setSubMenu] = useState([])
  const [Paginas, setPaginas] = useState([])

  useEffect(() => {
    // llamar a submenu de desde la base de dato de firebase
  
    
    const obtenerSubMenu = async () => {
      // obtener los submenu 
      var response = await getSubMenu()
      setSubMenu(response);
      // obtener las rutas 
      var response_paginas=await getPaginas();
      setPaginas(response_paginas);
      
  }
  obtenerSubMenu();

  }, [])
  
  

  return (

  <div>
    {SubMenu.map((item,index)=>
      <CardSubmenu key={index} item={item}> </CardSubmenu>  
      )}
  </div>
  )
}

export default Index