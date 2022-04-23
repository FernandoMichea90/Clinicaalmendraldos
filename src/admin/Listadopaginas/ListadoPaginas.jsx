import React,{useEffect,useState}from 'react'
import Tabla from './Tabla'
import {Grid} from '@material-ui/core'
import Firebase from '../../Firebase/FuncFirebase'
const ListadoPaginasDos = () => {
const [paginas, setpaginas] = useState([])
const pedirPagWeb=async()=>{
    let pedirPag=await  Firebase.pedirPaginas()
    setpaginas(pedirPag)
}
useEffect(()=> {
    pedirPagWeb()
   
}, [])
    return (
        <div>
        <Grid container>
        <Grid item xs={2} ></Grid>
        <Grid item xs={8} >
            <Tabla paginas={paginas} ></Tabla>
        </Grid>
        <Grid item xs={2} ></Grid>    
        </Grid>            
        </div>
    )
}

export default ListadoPaginasDos
