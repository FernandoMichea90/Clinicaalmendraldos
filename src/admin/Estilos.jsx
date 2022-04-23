import {makeStyles} from '@material-ui/core'
const Estilos = makeStyles((theme)=>({
    // Estilos login
container:{
    height:'100vh',
    width:'100%',
    position:'relative',
    minHeight:'789px'
},
verticalCenter:{
margin:'0',
position:'absolute',
left:'50%',
top:"40%",
width:'90%',
msTransform:'translate(-50%, -50%)',
transform: 'translate(-50%, -50%)'
},
image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:"#ffffff",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
  },
  margenVert10:{
      margin:'10px 0px'
  },
  margen20:{
      margin:'15px 0px' 
  },
  divRecomendado:{
    borderLeft: '5px solid #b7d637',
    padding:' 0 5px',
    margin:'15px 0px' 
    }


}))

export default Estilos
