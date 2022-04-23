import React from 'react'
import Navegador from '../Componentes/Navegador'
import { BrowserRouter as Router,Route,Switch,withRouter } from 'react-router-dom'
import Login from '../Login'
import ListadoPaginas from './ListadoPaginas'
import CrearPagina from '../CrearPagina/CrearPagina'
import EditarPagina from '../CrearPagina/EditarPagina'
import ListarPagina from '../CrearPagina/VerPagina'
import index from '../index'
const admin = () => {
    return (
        <div>
        <Router>
            <Navegador></Navegador>
            <Switch>
         <div style={{marginTop:'100px'}}>       
        <Route path="/admin/crearpagina" component={CrearPagina} ></Route>   
        <Route path="/admin/listadopaginas" component={ListadoPaginas}></Route >   
        <Route path="/admin/editarpagina/:nombre" component={EditarPagina}></Route >   
        <Route path="/admin/verpagina/:ruta" component={ListarPagina}></Route >   

        </div>
      </Switch>
      </Router>


        </div>
    )
}

export default admin
     