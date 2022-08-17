import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import  Paper from '@material-ui/core/Paper';
import Autocompletar from './Autocomplete';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CardSubmenu(props) {
  const classes = useStyles();

  const [card, setCard] = React.useState(false);

  React.useEffect(() => {
    setCard(props.item)
  }, [props.item])
  





  return (
    <Container component="div" maxWidth="md">
      <CssBaseline />     
      <Paper elevation={3} style={{padding:'50px',marginBottom:'50px'}}>
      <div className={classes.paper}>
       <form className={classes.form} noValidate>
          <TextField
            variant="outlined"  
            margin="normal"
            required
            fullWidth
            id="Titulo"
            label="Titulo"
            name="Titulo"
            autoComplete="Titulo"
            autoFocus
            value={card.titulo}
          />
          <Typography align="right">
          <Autocompletar></Autocompletar>
          </Typography>
          <Typography align="right">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Actualizar
          </Button>
          </Typography>
        </form>
      </div>
      </Paper>
      
    </Container>
  );
}