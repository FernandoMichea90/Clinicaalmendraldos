import React ,{useState,useEffect} from 'react'
import {Grid,Typography ,Table,TableContainer,Paper, TableHead,TableRow,TableCell,Button} from '@material-ui/core'
import {TableBody,IconButton} from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import { useHistory } from "react-router-dom";

const Tabla = (props) => {

const history=useHistory()
const [lista, setlista] = useState([])



const editarPagina=(objeto)=>{
  history.push(`/admin/editarpagina/${objeto.nombre}`)
}
//ver la paginas seleccionada 
const verPagina=(objeto)=>{
  history.push(`/admin/verpagina/${objeto.ruta}`)
}
useEffect(() => {
    setlista(props.paginas)
}, [props])
    return (
        <div>
          <TableContainer component={Paper}>
              <Table sx={{minWidth:650}}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Pagina 
                        </TableCell>
                        <TableCell align='left'>
                            Ruta
                        </TableCell>
                        <TableCell align='right'>
                            Diseño
                        </TableCell>
                        <TableCell align='right'>
                            Editar
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
          {lista.map((row) => (
            <TableRow
              key={row.nombre}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="left">{row.ruta}</TableCell>
              <TableCell align="right">
              <IconButton  onClick={()=>verPagina(row)} color="primary" aria-label="upload picture" component="span">
                  <VisibilityIcon />
                </IconButton>
              </TableCell>
              <TableCell align="right">
              <IconButton onClick={()=>editarPagina(row)} color="primary" aria-label="upload picture" component="span">
                  <CreateIcon/>
                </IconButton>
              </TableCell>
            
            </TableRow>
          ))}
        </TableBody>

              </Table>
          </TableContainer>   

        </div>
    )
}

export default Tabla
