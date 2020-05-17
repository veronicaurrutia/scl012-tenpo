import React from 'react';
import '../assets/css/Data.css';
import ButtonPrimary from './ButtonPrimary';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
  {
    label: '',
  },
  {
    value: 'Comuna',
    label: 'Cerrillo',
  },
  {
    value: 'Comuna',
    label: 'Cerro navia',
  },
  {
    value: 'Comuna',
    label: 'Conchali',
  },
  {
    value: 'Comuna',
    label: 'El bosque',
  }, 
  {
    value: 'Comuna',
    label: 'Estacion central',
  },
  {
    value: 'Comuna',
    label: 'Huechuraba',
  },
  {
    value: 'Comuna',
    label: 'Independencia',
  },
  {
    value: 'Comuna',
    label: 'La cisterna',
  },
  {
    value: 'Comuna',
    label: 'La florida',
  },
  {
    value: 'Comuna',
    label: 'La pintana',
  },
  {
    value: 'Comuna',
    label: 'La granja',
  },
  {
    value: 'Comuna',
    label: 'La reina',
  },
  {
    value: 'Comuna',
    label: 'Las condes',
  },{
    value: 'Comuna',
    label: 'Lo barnechea',
  },
  {
    value: 'Comuna',
    label: 'Lo espejo',
  },{
    value: 'Comuna',
    label: 'Lo prado',
  },
  {
    value: 'Comuna',
    label: 'Macul',
  },
  {
    value: 'Comuna',
    label: 'Maipu',
  },
  {
    value: 'Comuna',
    label: 'Nuñoa',
  },{
    value: 'Comuna',
    label: 'Pedro aguirre Cerda',
  },
  {
    value: 'Comuna',
    label: 'Peñalolen',
  },{
    value: 'Comuna',
    label: 'Providencia',
  },
  {
    value: 'Comuna',
    label: 'Pudahuel',
  },{
    value: 'Comuna',
    label: 'Quilicura',
  },
  {
    value: 'Comuna',
    label: 'Quinta normal',
  },
  {
    value: 'Comuna',
    label: 'Recoleta',
  },
  {
    value: 'Comuna',
    label: 'Renca',
  },
  {
    value: 'Comuna',
    label: 'San miguel',
  },
  {
    value: 'Comuna',
    label: 'San joaquin',
  },
  {
    value: 'Comuna',
    label: 'San Ramon',
  },
  {
    value: 'Comuna',
    label: 'Santiago',
  },
  {
    value: 'Comuna',
    label: 'Vitacura',
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
  const [currency, setCurrency] = React.useState('comuna');

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
          id="standard-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          <TextField
          id="standard-select-currency-native"
          select
          label="Comuna"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
     
      <TextField id="standard-basic" label="Direccion" />
        <Link to="/validation">
        <ButtonPrimary title='Crear Usuario'/>
        </Link>
        </div>
        </form>
  );
}