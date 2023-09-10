import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CompCarrusel from './Home/CompCarrusel';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  estilo: {
    [theme.breakpoints.down('xs')]: {
      // height: "600px",
    },
  },
}));

export default function Example(props) {
  const classes = useStyles();
  const autoPlay = false;
  const timeout = 1000;

  // Detecta el breakpoint actual
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  const carouselItems = [];

  // Mostrar imágenes para móvil
  if (isMobile) {
    for (let i = 1; i < 6; i++) {
      carouselItems.push(
        <Paper key={i}>
          <div className={classes.divPrincipal}>
            <CompCarrusel imagen={`./mobile/${i}.jpg`} blanco={true}></CompCarrusel>
          </div>
        </Paper>
      );
    }
  } else {
    // Mostrar imágenes para PC
    for (let i = 0; i < 10; i++) {
      carouselItems.push(
        <Paper key={i}>
          <div className={classes.divPrincipal}>
            <CompCarrusel imagen={`./banner/${i}.png`} blanco={true}></CompCarrusel>
          </div>
        </Paper>
      );
    }
  }

  return (
    <div className={classes.root}>
      <Carousel className={classes.estilo} navButtonsAlwaysVisible={false} autoPlay={autoPlay} indicators={false} timeout={timeout}>
        {carouselItems}
      </Carousel>
    </div>
  );
}
