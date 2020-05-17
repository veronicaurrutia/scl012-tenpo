import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonPrimary from '../components/ButtonPrimary';
import verification from '../assets/css/verification.css'

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
        <h1 className='code-tittle'>Verificacion</h1>
        <p className='code-text'>Te hemos enviado un correo, favor ingresar codigo de validacion</p>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="Codigo-basic" label="Codigo" />
        </form>
        <div className='container-btn'>
            <ButtonPrimary   title='Ingresar'/>
            <ButtonPrimary title='Crear Cuenta'/>
        </div>
      </div>
    );
  };
  
export default Verification;
