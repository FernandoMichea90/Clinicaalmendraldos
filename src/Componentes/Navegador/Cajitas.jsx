import React from 'react'
import {Grid, makeStyles} from '@material-ui/core'
import Descripcion from './descripcion'
import implantes  from '../../imagen/implantes.png'

const useStyles=makeStyles((theme)=>({


    root:{


 position:"absolute",   
 bottom:"0",
 height:"150px",
 width:"250px",
 
overflow:"hidden",
}
    ,


 caja:{

    width:"100vw",


    
    '&  .MuiGrid-grid-xs-2': {
       
       
    },'&  .boxuno': {
       
    width:"auto",
    height:"100%",
    position:"relative",
    background:"rgb(226,168,46)",
    marginTop:"42%",
    transition:"1s",
    padding:"10px"
   
    },'&  .boxuno:hover': {
       
        width:"auto",
        height:"100%",
        position:"relative",
        background:"rgb(226,168,46)",
        marginTop:"0%",
       
        },





 },
 inicio:{

    width:"250px",
    height:"50%",
    position:"relative",
    background:"#000000"


 },
 boxuno:{

    width:"auto",
    height:"100%",
    position:"relative",
    background:"rgb(226,168,46)",
    marginTop:"25%",
    
   

 },
 boxdos:{

    width:"auto",
    height:"100%",
    position:"relative",
    background:"rgb(95,206,214)"



 },
 boxtres:{

    width:"auto",
    height:"100%",
    position:"relative",
    background:"#f50057"


 },
 boxcuatro:{

    width:"auto",
    height:"100%",
    position:"relative",
    background:"rgb(154,115,220)"


 },
 boxcinco:{

    width:"auto",
    height:"100%",
    position:"relative",
    background:"rgb(34,96,136)"


 },
    
    

    



}))

const Cajitas = () => {



   const implantes={
         titulo:"implantes",
         texto:"lorem ipsum",
         imagen:'./imagenes/implantes.png'


   }
   const estetica={
      titulo:"estetica",
      texto:"lorem ipsum",
      imagen:'./imagenes/estetica.png'


}
const ortodoncia={
   titulo:"ortodoncia",
   texto:"lorem ipsum",
   imagen:'./imagenes/ortodoncia.png'


}
const odontopediatra={
   titulo:"odontopediatria",
   texto:"lorem ipsum",
   imagen:'./imagenes/odontopediatria.png'


}




const clases=useStyles()




    return (
    
            

               
                    <div className={clases.caja}>

                        <Grid container >


                            <Grid  xs={3}>


                                        <div className={clases.root}>  
                                                <div  className="boxuno" style={{background:"rgb(226,168,46)"}} >
                                                    <Descripcion objeto={implantes}></Descripcion>

                                                </div>
                                        </div>
                                    
                            </Grid>        
                            <Grid  xs={3}>
                            <div className={clases.root}>  
                                    <div className="boxuno" style={{background:"rgb(95,206,214)"}}>

                                    <Descripcion objeto={estetica}></Descripcion>

                                    </div>
                            </div>
                                                 
                            </Grid>     
                            <Grid  xs={3}>     
                                    <div className={clases.root}>  
                                            <div className="boxuno" style={{background:"#f50057"}}>

                                            <Descripcion objeto={ortodoncia}></Descripcion>
                                            </div>
                                    </div>        
                            </Grid> 
                            <Grid  xs={3}>         
                                        <div className={clases.root}>  
                                                <div className="boxuno" style={{background:"rgb(34,96,136)"}}>

                                                <Descripcion objeto={odontopediatra}></Descripcion>
                                                </div>
                                        </div>    
                            </Grid> 
                          
                           
                         
                        
                        
                        
                        </Grid>
                        
                        </div>


                    
                    
           

                
    )
}

export default Cajitas
