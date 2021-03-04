import React from 'react'

const Formulario = () => {
    return (
        <div>


<div className="container">
    <div className="row">



    <div class="col s12 m6 l6 textoLeft">


<p>

</p>

</div>


    <div class="col s12 m6 l6 textoLeft">


      <p>
      </p>

    </div>
  </div>
    <div className="row">
         <div class="col s12 m6 l6">
           <form onSubmit={mandarCorreo}>
          <input placeholder="Nombre" value={contacto.nombre} name="nombre" onChange={actualizarState} >
          </input>

  
          <input placeholder="Correo" value={contacto.correo}name ="correo" onChange={actualizarState} >
          </input>
          <textarea name="consulta" value={contacto.consulta} onChange={actualizarState} placeholder="Mensaje" cols="45" ></textarea>  
          
          <button className="botonEnviar">
            Enviar
          </button>

          </form>
          </div>
          


         <div class="col s12 m6 l6 textoLeft  marginTop20">
           <span>

           <i class="fa fa-phone iconoContacto"></i>

             +56 9 7622 6069
           </span>
           <p>
           <i class="fa fa-envelope iconoContacto"></i>
             contacto@puertoweb.cl
           </p>
           <p>
           <i class="fa fa-home iconoContacto"></i>
             Dimalow 231 , Cerro alegre , Valparaiso
           </p>

          




           
         </div>

    </div>
    </div>



        </div>
    )
}

export default Formulario
