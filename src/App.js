import React from 'react'
import { BrowserRouter as Router,Route,Switch,withRouter } from 'react-router-dom'
import Login from './admin/Login'
import Principal from './Paginas/Principal'
import Admin from './admin/Paginas/admin'
const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/admin" component={Admin}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path='/' component={Principal}></Route>
      </Switch>

    </Router>
  )
}

export default App
