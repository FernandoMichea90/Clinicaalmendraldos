import React, { useEffect, useState } from 'react'
import { Grid, Typography, makeStyles, Hidden } from '@material-ui/core'
import { getSubMenu } from '../../Firebase/FuncFirebase'


const useStyles = makeStyles((theme) => ({

    root: {
        position: "fixed",
        top: "92px",
        width: "100%",
        background: "white",
        zIndex: "10"

    },
    divLink: {
        color: "#8a8989",



        "& :hover": {
            backgroundColor: "rgb(96,207,212)",
            color: "#ffffff",
        }


    }

}))





const Opciones = () => {

    const classes = useStyles()
    const [SubMenu, setsubMenu] = useState([])

    useEffect(() => {
        // llamar los datos de la base de datos 


        const obtenerSubMenu = async () => {
            var response = await getSubMenu()
            setsubMenu(response);
        }
        obtenerSubMenu();
    }, [])


    return (
        <Hidden mdDown>
            <div className={classes.root}>

                <Grid container>
                    {
                        SubMenu.map((item) =>

                            <Grid xs={2}>
                                <div className={classes.divLink}>
                                    <a href={item.link} style={{color: '#8a8989'}} >
                                    <Typography align="center" variant="subtitle1" > {item.titulo}</Typography>
                                    </a>
                                </div>
                            </Grid>

                        )
                    }


                </Grid>








            </div>
        </Hidden>
    )
}

export default Opciones
