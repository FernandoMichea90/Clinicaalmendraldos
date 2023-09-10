import React from 'react';
import { makeStyles } from '@material-ui/core';

const CompCarrusel = (props) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      width: 'min(100% - 15px, 100%)',
      marginInline: 'auto',
    },
    imagen: {
      height:"1000px",
      width: '100%',
      backgroundImage: `url(${props.imagen})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: props.blanco ? '#ffffff' : '#5fced66b',
      [theme.breakpoints.down("lx")]: {
        height:"900px"
      },
      [theme.breakpoints.down("lg")]: {
        height:"85vh"
      },
      [theme.breakpoints.down("md")]: {
        height:"50vh"
      },

      [theme.breakpoints.down("sm")]: {
        height:"35vh"
      },
      [theme.breakpoints.down("xs")]: {
        height:"20vh"
      },


    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imagen}></div>
    </div>
  );
};

export default CompCarrusel;
