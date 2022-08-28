import React,{useState,useEffect} from 'react'
import { getPaginas, getSubMenu } from '../../Firebase/FuncFirebase'
import CardSubmenu from './CardSubmenu'
import AppBarToolBar from '../Home/Toolbar'

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
  console.log('useEffect index')

  }, [])
  
  

  return (

  <div>
    <AppBarToolBar titulo="Submenu"></AppBarToolBar>
    {SubMenu.map((item,index)=>
      <CardSubmenu key={item.id} item={item} Paginas={Paginas}> </CardSubmenu>  
      )}
  </div>
  )
}

export default Index