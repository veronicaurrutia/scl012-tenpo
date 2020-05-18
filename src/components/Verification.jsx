import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonPrimary from '../components/ButtonPrimary';
import '../assets/css/verification.css'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const Verification = () => {
    const classes = useStyles();
    return (
      <div className="container-code">
        <h1 className='code-tittle'>Te hemos enviado un correo</h1>
        <p className='code-text'>Ingresa a continuación el código que te enviamos</p>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="Codigo-basic" label="Codigo" />
        </form>
        <div className='container-btn'>
          <ButtonPrimary   title='ENVIAR CÓDIGO DE NUEVO'/>
          <Link to="/home">
            <ButtonPrimary   title='CONOCER TENPO'/>
          </Link>
          <Link to="/id">
            <ButtonPrimary title='CREAR CUENTA DIGITAL'/>
          </Link>
        </div>
      </div>
    );
  };
  
export default Verification;
