import React from 'react'
import { useStyles } from './Estilos';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'


const CarruselItem = ({ title, descripcion, imagen,count }) => {
    const classes = useStyles();
    return (
        <Grid xs={12} md={12/count}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={"./imagenes/" + imagen}
                    title="Ortodoncia"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {descripcion}
                    </Typography>
                </CardContent>

                <CardActions>

                    {/* <Button className={classes.aLink} variant="contained" size="small" >
                                                                Leer MAS
                                             </Button> */}
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CarruselItem