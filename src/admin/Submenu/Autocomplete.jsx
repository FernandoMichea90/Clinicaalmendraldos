/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';


const useStyles = makeStyles((theme) => ({

  root: {
    '& input': {
      height: '11px !important'
    }
  },


}));

export default function Grouped(props) {

  const estilos = useStyles()
  const [Paginas, setPaginas] = useState([])
  const [Pagina, setPagina] = useState('test')


  useEffect(() => {
    if (props.Paginas.length > 0) {
      let options = props.Paginas.map((option) => {
        if (!option.pagina_bool) {
          const firstLetter = '#';
          return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
          };
        } 
      });

      setPaginas(options);
      setPagina(options[0]);
      console.log(options)
      console.log(props.card)
      if(props.card.Pagina==""){
        console.log(options)
        setPagina(options[0]);
      }else{
        options.map(row=>{
           if(row.Pagina==props.card.Pagina){

              setPagina(row)
           }
        })
      }

    }
  }, [props.Paginas])


  return (
    <div className={estilos.root}>
      <Autocomplete
        id="grouped-demo"
        options={Paginas.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(Paginas) => {
          if (Paginas.firstLetter === '#') {
            return "# - Posicion Pagina"
          } else {
            return Paginas.firstLetter
          }
        }}
        getOptionLabel={(Paginas) => Paginas.titulo}      
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            props.setCard({
              pagina: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
           
            props.setCard({
              pagina: newValue.inputValue,
            });
          } else {
            props.setCard({...props.card,'link':newValue?.ruta==undefined?'':newValue.ruta});
            props.formik.setFieldValue('link',newValue?.ruta==undefined?'':newValue.ruta)
            setPagina(newValue?.ruta==undefined?'':newValue)

            
          }
        }}
        
        value={Pagina}
       
        renderInput={(params) => <TextField {...params} label="Link" margin="normal" variant="outlined" error={props.formik.errors.link && Boolean(props.formik.errors.link)}
        helperText={props.formik.touched.link && props.formik.errors.link} />}
      />

    </div>
  );
}


