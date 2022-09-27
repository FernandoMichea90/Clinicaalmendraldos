import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   '& header': {
    margin:'64px 0px 64px 0px',
    boxShadow:'none',
    borderBottom: 'solid 1px #e0e0e0',
    
   }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
            {props.titulo}
          </Typography>

            {
              props.button && <Button variant="contained" color="primary" onClick={props.funcionBoton}>Create</Button>


            }
            
        </Toolbar>
      </AppBar>
    </div>
  );
}
