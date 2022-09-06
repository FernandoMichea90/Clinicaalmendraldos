import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../../src/css/principal.css'
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'
import Whatsapp from '../Componentes/Whatsapp';
import Navegador from '../Componentes/Navegador';
import Contacto from '../Componentes/Contacto'
import Cajitas from '../Componentes/Navegador/Cajitas'
import Cajon from '../Componentes/Navegador/Cajon'
import ImgPrincipal from "../Componentes/ImgPrincipal"
import { makeStyles, Typography, Hidden } from "@material-ui/core"
import Servicios from '../Componentes/Servicios'
import Carrusel from '../Componentes/Carrusel';
import Iconos from '../Componentes/Iconos';
import Dentistas from '../Componentes/Dentistas';
import Reservar from '../Componentes/Reservar';
import Mapa from '../Componentes/Mapa'
import Cajitasdos from '../Componentes/Navegador/Cajitasdos'


const estilos = makeStyles((theme) => ({
  divPadre: {
    position: "relative",
    marginTop:'94px'
  },
  separador: {
    borderColor: "#5fced6",

    border: "1px solid",
    color: "#5fced6",
    margin: "0px"
  },
  fontColor: {
    color: "#5fced6"
  },
  fontColordos: {
    color: "#9e9e9e"
  },

}))

function Principal() {

  const clases = estilos()


  //Actualizar State


  const [contacto, guardarContacto] = useState({})
  const [error, setError] = useState({
    consulta: '',
    nombre: '',
    correo: ''

  });

  //state para abrir el menu 
  const [abrir, setabrir] = useState(false)

  const accionAbrir = () => {
    setabrir(!abrir)
  }



  const actualizarState = e => {

    guardarContacto({

      ...contacto, [e.target.name]: e.target.value
    })


  }


  var cerrado = true

  function menu() {

    if (cerrado) {

      cerrado = false;
      document.getElementById("nave-gador").className = "navegador navegadorResponsive-open";
      console.log("esta abierto");

    } else {
      document.getElementById("nave-gador").className = "navegador navegadorResponsive-close";
      cerrado = true
      console.log("esta cerrado");

    }

  }



  // window.onscroll = function() {
  //   var y = window.scrollY;
  //   if(y>740)
  //   {
  //       document.getElementById("nave").className = "navbar-fixed";
  //   }else
  //   {
  //       document.getElementById("nave").classList.remove('navbar-fixed');

  //   }
  //   };



  const imagen =
    "https://lh3.googleusercontent.com/KOTDJn-fHFLpog1ZoVcruQlX12cFGtyIMJqJkDCsAJT41V1cMo9B6hNlp8bF5sQsg-5t6B3Q=w1080-h608-p-no-v0"

  // envio del correo 
  const mandarCorreo = async e => {
    e.preventDefault();

    let prueba = true;

    try {







      console.log(contacto.nombre);
      console.log(error);




      if (!contacto.nombre) {


        error.nombre = "<p>ingrese el nombre</p>"

        console.log("paso por el nombre");

        // setError(error)
        prueba = false;


      } else {
        prueba = true
        error.nombre = ""
      }

      if (!contacto.consulta) {


        error.consulta = "<p>ingrese la consulta</p>"




        //setError(error.asunto)
        prueba = false;


      } else {
        prueba = true
        error.consulta = ""
      }


      if (!contacto.correo) {


        error.correo = "<p>ingrese el correo</p>"


        setError(error)
        prueba = false;


      } else {
        prueba = true
        error.correo = ""
      }

      if (!prueba) {
        setError
          ({
            consulta: error.consulta,
            nombre: error.nombre,
            correo: error.correo
          })
      }


      let mensaje = error.consulta + error.nombre + error.correo;






      console.log("es el error");
      console.log(error);




      if (error.nombre === "" && error.consulta === "" && error.correo === "") {
        const respuesta = await clienteAxios.post('/gmail', contacto)

        Swal.fire(
          'Exito!',
          'Correo enviado',
          'success'

        )



        guardarContacto({
          nombre: '', correo: '', consulta: ''
        })


      } else {
        Swal.fire(
          '',
          `${mensaje}`,
          'info'

        )
      }


    } catch (error) {

      Swal.fire(
        'Error!',
        'Correo no enviado',
        'success'

      )


    }



  }





  useEffect(() => {

    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {})
    //Carrusel init 


    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true
    });



    var para = document.querySelectorAll('.parallax');
    M.Parallax.init(para, {});
  }, [error])


  return (

    <div  id="inicio">
      <Navegador accionAbrir={accionAbrir}  ></Navegador>

      <div className={clases.divPadre}>
        <ImgPrincipal></ImgPrincipal>

        {/* <Hidden mdDown>
          <Cajitas></Cajitas>
        </Hidden> */}

      </div>
      <Reservar>  </Reservar>
      {/* <Hidden lgUp>
        <Cajitasdos></Cajitasdos>
      </Hidden> */}

      <div name="servicios" id='servicios' style={{ paddingTop: "150px" }}>
        <Servicios></Servicios>



      </div>

      {/* <div name="especialidades" id='especialidades' style={{ paddingTop: "180px" }} >
        <hr className={clases.separador}></hr>


        <Typography className={clases.fontColor} align="center" variant="h5" >
          Cuida tu salud bucal con nosotros
        </Typography>

        <Typography className={clases.fontColordos} align="center" variant="h4" >
          Especialidas Odontologicas
        </Typography>


        <div style={{ margin: "150px auto" }}>
          <Carrusel></Carrusel>

        </div>
      </div> */}
      <div style={{ margin: "150px auto " }}>

        <Iconos></Iconos>

      </div>
      <div name="equipo" id="equipo_clinico" style={{ paddingTop: "150px", paddingBottom: "150px" }}>
        <Dentistas></Dentistas>
      </div>
      <div name="ubicacion" id="ubicacion" style={{ paddingTop: "150px" }}>
        <Mapa></Mapa>
      </div>
      <div name="contacto" id="contacto" className="divContacto  pruebaContacto page-footer">
        <hr className={clases.separador}></hr>
        <Contacto>

        </Contacto>

        <Whatsapp></Whatsapp>
        <Cajon variant="temporary" open={abrir} onClose={accionAbrir}></Cajon>

        <div class="row bottomCero">
          <div class="col s12">
            <div class="copyright">
              <hr></hr>
              © 2022 All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Principal;
