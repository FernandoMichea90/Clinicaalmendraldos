import React, { useState, useEffect } from 'react'
import { Grid, Typography, IconButton, makeStyles, CircularProgress, TextField, Button, Paper } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import MuiAlert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import Swal from 'sweetalert2';
import Slider from '@material-ui/core/Slider';
import LinkIcon from '@material-ui/icons/Link';
import Autocompletar from '../Submenu/Autocomplete';
import { useFormik } from 'formik';
import * as yup from 'yup'
import DeleteIcon from '@material-ui/icons/Delete';
// funcion para traer paginas. 
import { getPaginas, createCarrusel } from '../../Firebase/FuncFirebase';
import { RepeatOneSharp } from '@material-ui/icons';



// funcion de alerta

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({


    root: {
        marginTop: "100px",
        " & .MuiButton-containedPrimary:hover": {
            backgroundColor: "#303f9f00",
            color: "#5fcccf",
            border: "1px solid",
            [theme.breakpoints.down('sm')]: {

            }
        },
    },
    caja: {
        margin: "15px 0px"
    },
    margenLink: {
        margin: '15px 0px'
    },

    circular: {
        height: "72px !important",
        width: "72px !important",

    },
    divCircular: {
        margin: "100px  auto auto auto"

    },
    divAgregar: {

        width: "100%",
        margin: "0px auto 100px auto"
    },
    formAgregar: {

        display: "block",
        margin: "auto",
        width: "90%",
        [theme.breakpoints.down("xs")]:
        {
            width: 'auto'
        }
    },


    buttonEliminar: {
        margin: "5px 0px",
        padding: "14px",
        width: "100%",
        background: "#f44336",
        [theme.breakpoints.down("xs")]:
        {
            width: "100%",
            margin: "10px auto",
            padding: "14px"
        },
        '&:hover': {
            background: "#ffffff",
            color: "#f44336 !important",
        }
    },


    buttonAgregar: {
        margin: "5px 0px",
        padding: "14px",
        width: "100%",
        [theme.breakpoints.down("xs")]:
        {
            width: "100%",
            margin: "10px auto",
            padding: "14px"
        }

    },
    textoAgregar: {
        [theme.breakpoints.down("xs")]:
        {
            width: "100%",
            margin: "10px auto",
            padding: "unset"
        }
    },
    paperEstilo: {
        width: "100%",
        margin: "30px 0px",
        padding: "14px",
        color: "#21cbce",
        border: "1px solid #21cbce",
        [theme.breakpoints.down("sm")]: {
            width: 'unset'
        }
    }
    , botonEditar: {
        color: ""
    },
    divTitulo: {
        height: '85px'
    }
    , textNoDisponible: {


        fontFamily: "Nunito",
        color: "#808080"




    },
    divTransparencia: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: '0',
        background: 'rgb(0 0 0 /100%)'

    },

    imgFoto: {
        color: "#21cbce",
        position: "absolute",
        margin: "auto",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        fontSize: "3rem"
    },
    divImagen: {
        height: "600px",
        width: "100%",
        backgroundSize: "260px auto",
        position: "relative",
        backgroundRepeat: "no-repeat",
        border: "2px dashed #21cbce",
        backgroundPosition: "50%",
        borderRadius: "0",
        display: "block",
        overflow: "hidden",
        margin: "auto",
        marginTop: "15px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "30px"
        }
    }
    ,
    divImagenDos: {
        height: "600px",
        width: "100%",
        backgroundSize: "260px auto",
        position: "relative",
        backgroundRepeat: "no-repeat",
        border: "2px  #21cbce",
        backgroundPosition: "50%",
        borderRadius: "25px",
        display: "block",
        overflow: "hidden",
        margin: "auto",
        marginTop: "15px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "30px"
        }
    }


}))


const Estilos = makeStyles((theme) => ({



}))

// validationSchema 

const validationSchema = yup.object({
    titulo: yup
        .string('ingrese su titulo')
        .max(20, 'el maximo es de 20 caracteres')
        .required('Titulo es requerido'),
    link: yup
        .string('ingrese su link')
        .required('el link es requerido'),
});


const Tarjetas = () => {

    const [imagen, setimagen] = useState({ url: null })
    const [transparencia, settransparencia] = useState(30)
    const clases = useStyles();
    const clasesEstilos = Estilos();
    const [errores, seterrores] = useState({
        descripcion: null
    });
    const [slider, setSlider] = useState(30);
    const [tamanoDiferencia, setTamanoDiferencia] = useState(0)

    const handleChange = (event, newSlider) => {
        console.log(newSlider);
        setSlider(newSlider);
    };
    // Llamar a las paginas
    const [Paginas, setPaginas] = useState([])
    // agregar la funcion de formik 
    const formik = useFormik({
        initialValues: { titulo: 'Titulo ejemplo',file:false,imagen:false },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log('...se esta cargando...')
            setCargando(true);
            //colocar la funcion para guardar carrusel 
            // alert(JSON.stringify(values));
            console.log(values);
            if(values.file){
                alert('se esta subiendo una imagen file');
                // se agrega la informacion para obtener el id 
                 guardarCarruselQuery(values).then((response) =>{
                    console.log(response);
                 });

                // se sube una imagen file en el storage con el id asociado 
                // se obtiene el url  y se actualiza la informacion
            }else{
                
                if(!values.imagen){
                    Swal.fire(
                        'Error!',
                        'Debes agregar una imagen!',
                        'error'
                    ).finally(function(){
                        setCargando(false);
                    });
                   
                }else{
                  var response= await guardarCarruselQuery(values)
                  console.log(response);
                }
            }
            // guardarCarruselQuery(values);
        }
    })

    //funcion de guardar carrusel 
    const guardarCarruselQuery = async (values) => {
        var response = await createCarrusel(values);
        console.log(response);
        if (!response.error) {
            Swal.fire(
                'Exito!',
                'La informacion ha sido guardada',
                'success').then(function() {
                    setCargando(false)
                    return response;
            
                });
        } else {
            Swal.fire(
                'Error!',
                'Ha occurrido un error!',
                'error'
            ).finally(function() {
                setCargando(false)
                return response;
        })
    }
        return response;
    }
    // agregar a la card 
    const [card, setCard] = useState(false)
    // agregar el state de cargando 
    const [Cargando, setCargando] = useState(false)
    const agregarUrl = async () => {
        const { value: url } = await Swal.fire({
            input: 'url',
            inputLabel: 'URL direccion',
            inputPlaceholder: 'Ingrese URL'
        })

        if (url) {
            console.log(url);
            Swal.fire('Exito', 'La imagen ha sido ingresada', 'success')
            let img = url
            setimagen({ 
                url: img,
                imagen:null,
            
            })
            // colocar la url en la  imagen 
            formik.setFieldValue('imagen', img);

        }
    }

    const onImgLoad = ({ target: img }) => {
        const { offsetHeight, offsetWidth } = img;
        console.log(offsetHeight, offsetWidth);
        if (offsetHeight > 600) {
            setTamanoDiferencia(offsetHeight - 600);
        } else {
            console.log('es menor a 600px')
        }
    };
    // selecionar imagen

    const seleccionarImagen = pdf => {
        console.log('paso por aca');
        const agregarpdf = pdf.target.files[0]
        if (agregarpdf != undefined) {

            setimagen({
                imagen: agregarpdf,
                url: URL.createObjectURL(agregarpdf)
            })

            formik.setFieldValue('file',true);

            // setLink(null)
        }
    }





    // useEffect 
    useEffect(() => {
        const obtenerPaginas = async () => {
            const PaginasArray = await getPaginas();
            setPaginas(PaginasArray);
        }
        obtenerPaginas();

    }, [])


    return (
        <div>
            <Grid container>

                <Grid xs={12} sm={12} md={12}>

                    <div className={clases.divAgregar}>
                        <div className={clases.formAgregar}>
                            {/* <Typography align='center' variant="h4">
                                <div className={clases.divTitulo}>
                                    Ingrese Nueva Imagen
                                </div>
                            </Typography> */}
                            <Typography align='center'>

                                {imagen.url == null ?
                                    <div className={clases.divImagen}>
                                        < ImageIcon className={clases.imgFoto}></ImageIcon>
                                    </div>
                                    :
                                    <>
                                        <div className={clases.divImagenDos}>
                                            <img onLoad={onImgLoad} src={imagen.url} style={{

                                                display: 'block',
                                                objectFit: 'cover',
                                                borderRadius: '0px',
                                                width: '100%',
                                                height: '600px',
                                                opacity: '1',
                                                objectPosition: 'center ' + (slider).toString() + '%',

                                            }} />
                                            <div className={clases.divTransparencia} style={{ background: `rgb(0 0 0 / ${transparencia}%)` }} ></div>
                                            <div className={clasesEstilos.negroTexto}>
                                            </div>
                                        </div>
                                        <Grid container>
                                            <Grid xs={4}>
                                                <Slider value={slider} onChange={handleChange} aria-labelledby="continuous-slider" />
                                            </Grid>
                                            <Grid xs={4}>

                                            </Grid>

                                        </Grid>
                                        {/* <AdminEtiqueta transparencia={transparencia} settransparencia={settransparencia} style={{ marginTop: '50px' }}></AdminEtiqueta> */}
                                    </>
                                }



                            </Typography>
                            {formik.errors.imagen ?

                                <Alert style={{ margin: "20px auto auto", width: "50%" }}

                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"

                                            onClick={() => {
                                                seterrores({
                                                    ...errores, descripcion: null
                                                })
                                            }}
                                        >
                                            <CloseIcon></CloseIcon>

                                        </IconButton>
                                    }

                                    severity="error">{formik.errors.imagen}</Alert>

                                :

                                <div></div>
                            }

                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Button startIcon={<LinkIcon />} onClick={agregarUrl} className={clases.buttonAgregar} variant="contained" color="primary"></Button>
                                </Grid>
                                <Grid item xs={4}>
                                 
                                    <Button 
                                   
                                    startIcon={<AddAPhotoIcon />} className={clases.buttonAgregar} component="label" variant="contained" color="primary">
                                        <input hidden accept="image/*" type="file"  onChange={(e) => seleccionarImagen(e)} />

                                    </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button startIcon={<DeleteIcon />} onClick={agregarUrl} className={clases.buttonAgregar} variant="contained" color="secondary"></Button>
                                </Grid>

                            </Grid>

                            <div className={clases.caja}>
                                <TextField variant="outlined"
                                    className={clases.textoAgregar}
                                    placeholder="Agregar un titulo"
                                    name="titulo"
                                    label="Titulo"
                                    value={formik.values.titulo}
                                    error={formik.errors.titulo && Boolean(formik.errors.titulo)}
                                    helperText={Boolean(formik.errors.titulo) ? formik.errors.titulo : formik.touched.titulo && formik.errors.titulo}
                                    onChange={formik.handleChange}
                                    fullWidth
                                ></TextField>
                            </div>

                            <Typography align="right">
                                <Autocompletar Paginas={Paginas} formik={formik} card={card} setCard={setCard}></Autocompletar>
                            </Typography>

                            {!Cargando ?
                                <form onSubmit={formik.handleSubmit}>

                                    <Typography align="right">
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            className={clases.submit}
                                        >
                                            Guardar
                                        </Button>
                                    </Typography>
                                </form>

                                :

                                <Typography align="right">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={clases.submit}>
                                        <i class="fa fa-refresh fa-spin" style={{ marginRight: '10px' }}></i>Guardando
                                    </Button>
                                </Typography>

                            }



                        </div>




                    </div>


                </Grid>
            </Grid>

        </div>
    )
}

export default Tarjetas