import { Typography } from '@material-ui/core'
import React,{useEffect} from 'react'
import ListadoPag from '../Listadopaginas/ListadoPaginas'

const ListadoPaginas = () => {


const cargarPaginas=() => {

}

    useEffect(() => {
        
    }, [])
    return (
        <div>
            <Typography variant='h3'>
                Tus paginas
            </Typography>
            <ListadoPag></ListadoPag>



            
        </div>
    )
}

export default ListadoPaginas

