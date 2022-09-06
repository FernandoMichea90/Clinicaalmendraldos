import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Grid,makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
   
    principal:{
        '& button:focus':{
            backgroundColor: "#2ab7a9",
            color: "#ffffff"
      
          },
          '& .MuiButton-root:hover	': {
          
            color: "#5fced6",
            background: "#fff",
            border: "1px solid"
      
            },
            '& .CarouselItem': {

                [theme.breakpoints.down("md")]:{
                        margin:"auto 11px"             

                }
          
                },
          

    },

   
    root: {
      maxWidth: 345,
      height:'428px',
      margin:"10px auto"
    },
    media: {
      height: 200,
    },
    aLink:{
        textTransform:"uppercase",
        
        color:"#ffffff",
        backgroundColor:"rgb(95,206,214)"
    
    },
   
  }));
const Carrusel = () => {

const classes=useStyles()

    return (
        <div className={classes.principal}>
            <Carousel autoPlay={false} animation="slide">
                    <Paper elevation={0} >
                        <Grid container>
                            <Grid xs={12} md={4}>

                                        <Card className={classes.root}>
                                           
                                                <CardMedia
                                                className={classes.media}
                                                image="./imagenes/Ortodoncia.jpeg"
                                                title="Ortodoncia"
                                                />
                                                <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Ortodoncia
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    La ortodoncia es la rama de la odontología que se encarga de los problemas de los dientes y la mandíbula. La atención dental con ortodoncia incluye el uso de dispositivos, tales como los aparatos (Brackets), para: Enderezar los dientes.                           
                                                </Typography>
                                                </CardContent>
                                            
                                            <CardActions>
                                                
                                            <Button className={classes.aLink} variant="contained" size="small" >
                                                                Leer MAS
                                             </Button>
                                            </CardActions>
                                        </Card>

                            </Grid>
                            <Grid  xs={12} md={4}>



                                            <Card className={classes.root}>
                                                           
                                                                <CardMedia
                                                                className={classes.media}
                                                                image="./imagenes/Implantologia.jpeg"
                                                                title="Contemplative Reptile"
                                                                />
                                                                <CardContent>
                                                                <Typography gutterBottom variant="h5" component="h2">
                                                                    Implantologia
                                                                </Typography>
                                                                <Typography variant="body2" color="textSecondary" component="p">
                                                                 La opción más estética, funcional y semejante a un diente natural, para remplazar uno o más dientes ausentes, cuando estos se han perdido por diversas causas. Un implante dental es un perno metálico que reemplaza la parte de la raíz de un diente faltante.
                                                                </Typography>
                                                                </CardContent>
                                                            
                                                            <CardActions>
                                                               
                                                            <Button className={classes.aLink} variant="contained" size="small" >
                                                                Leer MAS
                                                                </Button>
                                                            </CardActions>
                                                        </Card>

                                        

                            </Grid>
                            <Grid  xs={12} md={4}>




                            <Card className={classes.root}>
                                           
                                                <CardMedia
                                                className={classes.media}
                                                image="./imagenes/Odontologia_estetica.jpeg"
                                                title="Odontologia estetica"
                                                />
                                                <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Odontología Estética
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                La Estética Dental u odontología cosmética se fundamenta en dar belleza extra a los dientes.  Un buen plan de odontología estética o Estética Dental  permite corregir esos pequeños defectos de manera rápida y sin traumatismos.
                                                </Typography>
                                                </CardContent>
                                            
                                            <CardActions>
                                              
                                            <Button className={classes.aLink} variant="contained" size="small" >
                                                                Leer MAS
                                                                </Button>
                                            </CardActions>
                                        </Card>

                         

                            </Grid>
                        </Grid>

                    </Paper>
               
            
            
            </Carousel>
        </div>
    )
}

export default Carrusel
