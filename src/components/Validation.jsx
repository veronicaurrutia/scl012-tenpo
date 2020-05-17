import ButtonPrimary from './ButtonPrimary';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function ValidationTextFields() {
  const classes = useStyles();

  return (
    
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <div><h1 className='text-Valida'>Te hemos enviado un mensaje</h1></div>
       
        <TextField
          Password
          id="Number-Password"
          label="Codigo"
        //   defaultValue="Hello World"
         
          />
        <br/>
         <ButtonPrimary title='Crear Usuario'/>
      </div>
    </form>
  );
}
