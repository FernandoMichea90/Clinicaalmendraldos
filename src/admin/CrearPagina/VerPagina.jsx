import { Grid } from '@material-ui/core'
import React ,{useEffect,useState} from 'react'
import Imagen from './VerPagina/Imagen'
import Parrafo from './VerPagina/Parrafo'
import Titulo from './VerPagina/Titulo'
import FuncionesFirebase from '../../Firebase/FuncFirebase'
const ListarPagina = (props) => {
const {ruta}=props.match.params
//state pagina 
const [Pagina, setPagina] = useState({
    imagen:null, 
    htmlText:null, 
    titulo:null
})
useEffect(() => {
    console.log('prueba de consumo')
    llamarPagina(ruta)          
},[])
// llamar los datos de la pagina 
const llamarPagina=async(ruta)=>{ 
try {
    const pagina=await FuncionesFirebase.llamarPaginaRuta(ruta)
console.log(pagina)
setPagina(pagina)  
} catch (error) {
    console.log(error)
}
 
}
return (
<div>
<Grid container>
<Grid item xs={1}></Grid>
<Grid item xs={10}> 
<Titulo></Titulo>
<Imagen imagen={Pagina.imagen}></Imagen>
<Parrafo parrafo={Pagina.htmlText}></Parrafo>
</Grid>
<Grid item xs={1}></Grid>
</Grid>
</div>)
    } 
export default ListarPagina
