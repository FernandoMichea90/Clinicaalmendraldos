import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Grid } from '@material-ui/core';
import { data } from '../../Data/Card';
import { useStyles } from './Estilos';
import CarruselItem from './CarruselItem';

const Carrusel = () => {
  const classes = useStyles();
  const tarjetasPorGrupo = 4;
  const totalGrupos = Math.ceil(data.length / tarjetasPorGrupo);
  const grupos = [];

  for (let i = 0; i < totalGrupos; i++) {
    const startIndex = i * tarjetasPorGrupo;
    const endIndex = startIndex + tarjetasPorGrupo;
    const tarjetasDelGrupo = data.slice(startIndex, endIndex);
    const CantidadTarjeta= tarjetasDelGrupo.length;

    grupos.push(
      <Paper elevation={0} key={i}>
        <Grid container>
          {tarjetasDelGrupo.map((objeto) => (
            <CarruselItem
              key={objeto.title} // Asegúrate de proporcionar una clave única
              title={objeto.title}
              descripcion={objeto.descripcion}
              imagen={objeto.imagen}
             count={CantidadTarjeta}
            />
          ))}
        </Grid>
      </Paper>
    );
  }

  return (
    <div className={classes.principal}>
      <Carousel autoPlay={true} animation="slide">
        {grupos}
      </Carousel>
    </div>
  );
};

export default Carrusel;
