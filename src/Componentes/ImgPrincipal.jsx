import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@material-ui/core'
import { makeStyles, Grid } from '@material-ui/core'
import logo from '../imagen/exportar.png'
import transbank from '../imagen/transbank.png'
import plaza from '../imagen/plaza.jpg'
import CompCarrusel from './Home/CompCarrusel'
import Sillon from '../imagen/sillon.jpg'
import Entrada from '../imagen/entrada.jpg'


const useStyles = makeStyles((theme) => ({


    root: {


    },



    imagenPrincipal: {

        width: '100%',


        [theme.breakpoints.down('xs')]: {
            height: "600px"
        },
        [theme.breakpoints.up('sm')]: {
            height: '100vh',
        },
        [theme.breakpoints.up('md')]: {
            height: '100vh',
            maxHeight: '810px'
        }

    },
    divPrincipal: {
        height: "100vh",
        minHeight: "600px",
        maxHeight: "721px"

    },
    divTransbank: {
        [theme.breakpoints.up("sm")]: {
            height: "100%",
            width: "100%",
            position: "relative"
        },


    },
    imagenTransbank: {
        display: "block",
        height: "150px",
        margin: "250px auto",
        [theme.breakpoints.down("sm")]: {
            margin: "100px auto",
            width: "300px",
            height: "unset"
        },
        [theme.breakpoints.up("md")]: {
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            margin: "auto"
        }
    },

    colorPrueba: {
        color: "#f44336"
    },
    promocionUno: {

        color: "#3f51b5",
        background: "#ffffff99",
        height: "300px",
        width: "369px",
        position: "absolute",
        top: "25%",
        left: "35%",
        padding: "35px",
        borderRadius: "25px",
        [theme.breakpoints.down("xs")]: {

            width: "93vw",
            margin: "auto 5vw",
            left: "0"

        }, [theme.breakpoints.down("sm")]: {

            width: "93vw",
            margin: "auto auto",
            left: "0",
            right: "0"

        }


    },


    boton: {
        position: "absolute",
        top: "57%",
        left: "0",
        right: "0",
        color: "#FFFFFF",
        borderColor: "#FFFFFF",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100px"
    },

    divEntrada: {

        [theme.breakpoints.only("sm")]: {
            overflow: "hidden"
        }

    },



    margenLogo: {
        margin: "225px 15px 250px 10px",

        [theme.breakpoints.down("xs")]: {


            position: "absolute",
            bottom: "-200px",
            color: "rgb(0 0 0 / 87%)",
            background: "#ddd",
            borderRadius: "6px",
            margin: "190px 15px 250px 10px",




        }

    },
    logo: {
        width: "88%",


    },
    divTres: {

        [theme.breakpoints.down("sm")]: {
            position: "absolute",
            width: "100vw",
            top: "400px",
            left: "0"

        },
        [theme.breakpoints.down("xs")]: {
            position: "absolute",
            width: "100vw",
            top: "38vh",
            left: "0"

        }
    },
    estilo: {

        [theme.breakpoints.down("xs")]: {

            // height: "600px",
        }
    }, imagenEntrada: {


        width: "100%",

        [theme.breakpoints.down("xs")]: {

            height: "600px"

        },
        [theme.breakpoints.only("sm")]: {

            width: "unset",
            marginTop: "64px",
            height: "100vh",
            maxHeight: "801px"



        }

    },


    centro: {
        width: "100%",
        position: "absolute",
        fontSize: "52px",
        textAlign: "center",
        top: "37%",
        fontWeight: "normal",
        fontFamily: 'Lato',
        color: "#ffffff",
        [theme.breakpoints.down('sm')]: {
            top: "9vh",
            fontSize: "35px",
        },
    }
}
))



export default function Example(props) {
    const clases = useStyles();

    var autoPlay = false;
    var timeout = 1000;


    return (

        <div className={clases.root + " nav_relative"}>
            <Carousel className={clases.estilo} navButtonsAlwaysVisible={false} autoPlay={autoPlay} indicators={false} timeout={timeout}>


                <Paper>
                 <div className={clases.divPrincipal}>
                    <CompCarrusel imagen={Sillon}></CompCarrusel>
                </div>
                </Paper>
                <Paper>
                 <div className={clases.divPrincipal}>
                    <CompCarrusel imagen={Entrada}></CompCarrusel>
                </div>
                </Paper>

            </Carousel>


        </div>

    )
}

