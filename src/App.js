import React, { useContext, useEffect,useState } from 'react'
import { BrowserRouter as Router,Route,Switch,withRouter } from 'react-router-dom'
import Login from './admin/Login'
import Principal from './Paginas/Principal'
import Admin from './admin/CrearPagina/admin'
import { UsuarioContext } from './Provedores/UsuarioContext'
const App = () => {

  // obtener el usuario 
  const usuario=useContext(UsuarioContext)
  const [user,setUser]=useState(true);
  const [cargando,setCargando]=useState(true)
  useEffect(() => {
  if(usuario!==null){
  setUser(usuario)
  setCargando(false)
  }
  },[usuario])

  return (

    cargando? 
    <></>:
    <Router>
    <Switch>
    <Route path="/login" component={Login}></Route> 
    {user &&  
     <Route path="/admin" component={Admin}></Route>
     }
    <Route path='/' component={Principal}></Route>
    </Switch>
    </Router>
  )
}

export default App
