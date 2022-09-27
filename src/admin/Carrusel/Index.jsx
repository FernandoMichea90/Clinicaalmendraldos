import React, { useState, useEffect } from 'react'
import AppBarToolBar from '../Home/Toolbar';
import Tarjetas from './Tarjetas';
const Index = () => {


  const [Componentes, setComponentes] = useState([])


  const agregarComponente = () => {
    let componente = { titulo: 'new componente' }
    setComponentes((oldComponentes) => [...oldComponentes, componente])

  }

  return (
    <div>
      <AppBarToolBar titulo="Carrusel" button={true} funcionBoton={agregarComponente}></AppBarToolBar>

      {Componentes.map(comp =>

          <Tarjetas></Tarjetas>
      )}

    </div>
  )
}

export default Index