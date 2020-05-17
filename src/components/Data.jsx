import React from 'react';
import '../assets/css/Data.css';
import ButtonPrimary from './ButtonPrimary';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
  {
    label: 'Comuna',
  },
  {
    value: 'Comuna',
    label: 'Santiago',
  },
  {
    value: 'Comuna',
    label: 'La florida',
  },
];

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
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
<div>
<h1 className='text-Valida'>Datos personales</h1>
      <TextField id="standard-basic" label="Ocupación" />
      <TextField id="standard-basic" label="Nacionalidad" />
      <TextField id="standard-basic" label="Region" />
          <TextField
          id="standard-select-currency-native"
          select
          label="Comuna"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
     
      <TextField id="standard-basic" label="Direccion" />
        <ButtonPrimary title='Crear Usuario'/>
        </div>
        </form>
  );
}