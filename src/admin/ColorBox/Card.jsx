import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Autocompletar from '../Submenu/Autocomplete';
import { useFormik, Formik } from 'formik'
import * as yup from 'yup'
import { updateSubMenu } from '../../Firebase/FuncFirebase';
import Swal from 'sweetalert2';
import ColorChips from './ChipColor';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    buttonload: {
        backgroundColor: '#04AA6D', /* Green background */
        border: 'none', /* Remove borders */
        color: 'white', /* White text */
        padding: '12px 16px', /* Some padding */
        fontSize: '16px', /* Set a font size */
    }

}));

const validationSchema = yup.object({
    titulo: yup
        .string('ingrese su titulo')
        .max(20, 'el maximo es de 20 caracteres')
        .required('Titule es requerido'),
    descripcion: yup
        .string('ingrese su titulo')
        .max(57, 'el maximo es de 57 caracteres')
        .required('Titule es requerido'),
    link: yup
        .string('ingrese su titulo')
        .required('el link es requerido')
});
export default function CardColorBox(props) {

    const classes = useStyles();

    const [card, setCard] = React.useState(false);
    const [Paginas, setPaginas] = React.useState([]);
    const [Cargando, setCargando] = React.useState(false)

    const formik = useFormik({
        initialValues: {
            titulo: props.item.Titulo,
            link: props.item.Pagina,
            id: props.item.id,
            descripcion: props.item.Descripcion
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values));
            setCargando(true);
            console.log(values)
        }
    })

    const actualizarSubMenu = async (subMenu) => {
        // se obtiene la respuesta 
        var response = await updateSubMenu(subMenu);
        console.log(response);
        if (!response.error) {
            Swal.fire(
                'Exito!',
                'La informacion ha sido guardada',
                'success')
        } else {
            Swal.fire(
                'Error!',
                'Ha occurrido un error!',
                'error'
            )
        }
        setCargando(false)
    }

    React.useEffect(() => {
        console.log(props.item)
        setCard(props.TarjetasColor)
        setPaginas(props.Paginas)
    }, [props.item, props.Paginas])

    return (
        <Container component="div" maxWidth="md">
            <CssBaseline />
            <Paper elevation={3} style={{ padding: '50px', marginBottom: '50px' }}>
                <div className={classes.paper}>
                    <form className={classes.form} onSubmit={formik.handleSubmit}>
                        <Typography align="right">
                            <ColorChips id={props.item.id}></ColorChips>
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Titulo"
                            label="Titulo"
                            name="titulo"
                            autoComplete="Titulo"

                            value={formik.values.titulo}
                            onChange={formik.handleChange}
                            error={formik.errors.titulo && Boolean(formik.errors.titulo)}
                            helperText={formik.touched.titulo && formik.errors.titulo}
                        />


                        <Typography align="right">
                            <Autocompletar Paginas={props.Paginas} formik={formik} card={card} setCard={setCard}></Autocompletar>
                        </Typography>
                        <TextField

                            label="Descripcion"
                            multiline
                            maxRows={4}
                            variant="outlined"
                            fullWidth
                            name='descripcion'
                            value={formik.values.descripcion}
                            error={formik.errors.descripcion && Boolean(formik.errors.descripcion)}
                            helperText={formik.touched.descripcion && formik.errors.descripcion}
                            onChange={formik.handleChange}
                        />
                        {!Cargando ?
                            <Typography align="right">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Actualizar
                                </Button>
                            </Typography>

                            :

                            <Typography align="right">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submit}>
                                    <i class="fa fa-refresh fa-spin" style={{ marginRight: '10px' }}></i>Guardando
                                </Button>
                            </Typography>

                        }

                    </form>
                </div>
            </Paper>

        </Container>
    );
}