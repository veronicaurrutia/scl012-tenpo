import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
<div>
<h1 className='text-Valida'>Datos personales</h1>
      <TextField id="standard-basic" label="Ocupación" />
      <TextField id="standard-basic" label="Nacionalidad" />
      <TextField id="standard-basic" label="Region" />
      <TextField id="standard-basic" label="Comuna" />
      <TextField id="standard-basic" label="Direccion" />
        <ButtonPrimary title='Crear Usuario'/>
        </div>
        </form>
  );
}