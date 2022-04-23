import { Button, Grid, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Imagen from './Imagen'
import FuncFirebase from '../../Firebase/FuncFirebase'
import TextoEditorDos from './TextoEditorDos';
import Swal from 'sweetalert2'
import { PedirPaginaEstructura } from '../../Firebase/FuncFirebase';

const EditarPagina = (props) => {
    const parametroUrl = props.match.params.nombre
    const [pedirPagina,setPedirPagina]=useState()
    const [imagen, setimagen] = useState({
        file: null, url: null
    })
    //state para guardar los datos del html 
    const [html, setHtml] = useState()
    //una buena forma para booleanos 
    // guardar en la base de datos
    const guardar = async () => {
        try {
            // crear objeto que se guardara en la base de datos 
            let nuevoObjeto = {
                imagen: null,
                htmlText: html
            }
            // si la imagen es por url 
            if (imagen.file == null) {
                nuevoObjeto.imagen = imagen.url
            } else {
                //traer la url de firebase
            }
            //  guardar el codigo del editor state  
            await FuncFirebase.guardarEstructuraPagina(nuevoObjeto)
            Swal.fire('Exito', 'Registro Guardado', 'success')
            //guardar en la base de datos 

        } catch (e) {
            console.log(e)
            Swal.fire('Error', 'Ups ha ocurrido un problema', 'error')
        }
    }
    const getPedirPagina=async(parametro)=>{
        const query=await PedirPaginaEstructura(parametro)
        setPedirPagina(query)
        setHtml(query.htmlText)
        setimagen({
            file:null,
            url:query.imagen
        })
    }
    useEffect(() => {
     getPedirPagina(parametroUrl)
    }, [])

    return (
        <div>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Imagen imagen={imagen} setimagen={setimagen}> </Imagen>
                    <TextoEditorDos html={html} setHtml={setHtml}></TextoEditorDos>
                    <Typography align='center'>
                        <Button color="secondary" variant='contained' onClick={() => guardar()}>
                            Guardar
                        </Button>
                    </Typography>
                </Grid>
                <Grid item xs={1}></Grid>


            </Grid>
        </div>
    )
}

export default EditarPagina
