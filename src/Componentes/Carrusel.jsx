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
                                            <CardActionArea>
                                                <CardMedia
                                                className={classes.media}
                                                image="./imagenes/endodoncia.jpeg"
                                                title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Endodoncia
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                
                                            <Button className={classes.aLink} variant="contained" size="small" >
                                                                Leer MAS
                                             </Button>
                                            </CardActions>
                                        </Card>

                            </Grid>
                            <Grid  xs={12} md={4}>



                                            <Card className={classes.root}>
                                                            <CardActionArea>
                                                                <CardMedia
                                                                className={classes.media}
                                                                image="./imagenes/implantologia.jpeg"
                                                                title="Contemplative Reptile"
                                                                />
                                                                <CardContent>
                                                                <Typography gutterBottom variant="h5" component="h2">
                                                                    Implantologia
                                                                </Typography>
                                                                <Typography variant="body2" color="textSecondary" component="p">
                                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                                    across all continents except Antarctica
                                                                </Typography>
                                                                </CardContent>
                                                            </CardActionArea>
                                                            <CardActions>
                                                               
                                                            <Button className={classes.aLink} variant="contained" size="small" >
                                                                Leer MAS
                                                                </Button>
                                                            </CardActions>
                                                        </Card>

                                        

                            </Grid>
                            <Grid  xs={12} md={4}>




                            <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                className={classes.media}
                                                image="./imagenes/odontopediatria.jpeg"
                                                title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Odontopediatria
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                              
                                            <Button className={classes.aLink} variant="contained" size="small" >
                                                                Leer MAS
                                                                </Button>
                                            </CardActions>
                                        </Card>

                         

                            </Grid>
                        </Grid>

                    </Paper>
                  

                    <Paper elevation={0} >
                        <Grid container>
                            <Grid xs={12} md={4}>

                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                className={classes.media}
                                                image="./imagenes/endodoncia.jpeg"
                                                title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Endodoncia
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                
                                            <Button className={classes.aLink} variant="contained" size="small" >
                                                                Leer MAS
                                             </Button>
                                            </CardActions>
                                        </Card>

                            </Grid>
                            <Grid  xs={12} md={4}>



                                            <Card className={classes.root}>
                                                            <CardActionArea>
                                                                <CardMedia
                                                                className={classes.media}
                                                                image="./imagenes/implantologia.jpeg"
                                                                title="Contemplative Reptile"
                                                                />
                                                                <CardContent>
                                                                <Typography gutterBottom variant="h5" component="h2">
                                                                    Implantologia
                                                                </Typography>
                                                                <Typography variant="body2" color="textSecondary" component="p">
                                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                                    across all continents except Antarctica
                                                                </Typography>
                                                                </CardContent>
                                                            </CardActionArea>
                                                            <CardActions>
                                                               
                                                            <Button className={classes.aLink} variant="contained" size="small" >
                                                                Leer MAS
                                                                </Button>
                                                            </CardActions>
                                                        </Card>

                                        

                            </Grid>
                            <Grid  xs={12} md={4}>




                            <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                className={classes.media}
                                                image="./imagenes/odontopediatria.jpeg"
                                                title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Odontopediatria
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>
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
