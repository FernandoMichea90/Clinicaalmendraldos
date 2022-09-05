import React, { useEffect,useState } from 'react'
import AppBarToolBar from '../Home/Toolbar'
import { getPaginas,getColorBox } from '../../Firebase/FuncFirebase'
import TarjetasColor from './TarjetasColor'

const Index = () => {
  
  const [TarjColor, setTarjColor] = useState()
  const [Paginas, setPaginas] = useState([])
  
  useEffect(() => {

    const ObtenerTarjetasColor = async() => {
      const  colorBoxArray=await getColorBox();
      const PaginasArray=await getPaginas();
      setTarjColor(colorBoxArray);
      setPaginas(PaginasArray);
        
    }
    ObtenerTarjetasColor();

  }, [])


  return (

    <div>
      <AppBarToolBar titulo="ColorBox"></AppBarToolBar>
      <TarjetasColor TarjetasColor={TarjColor} Paginas={Paginas}> </TarjetasColor>
    </div>
  )
}

export default Index