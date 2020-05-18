import React from 'react';
import '../assets/css/Data.css';
import ButtonPrimary from './ButtonPrimary';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import mic from '../assets/img/mic.svg';

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
    "& label.Mui-focused": {
      color: "#175C54",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#175C54",
    },
    "& .MuiFormControl-root": {
      width: '15em',
    }
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('comuna');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    
    <div className="container-data">
        <h1 >Datos personales</h1>
        <p>Estamos regulados por la <strong>Comición para el mercado financiero</strong>, por lo que necesitamos algunos datos extra para abrir la cuenta virtual</p>
    <form className={classes.root} noValidate autoComplete="off"> 
      <div className="container-da">
          <TextField id="standard-basic" label="Ocupación" />
          <img src={mic}/>
      </div>
      <div className="container-da">
        <TextField id="standard-basic" label="Nacionalidad" />
        <img src={mic}/>
      </div>
      <div className="container-da">
          <TextField id="standard-select-currency-native" select label="Comuna" value={currency} onChange={handleChange}
            SelectProps={{
              native: true,
            }}>
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
      </div>
          <TextField
            id="standard-select-currency-native"
            select
            label="Regiones"
            value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}>
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
      <div className="container-da">
        <TextField id="standard-basic" label="Direccion" />
        <img src={mic}/>
      </div>
      </form>
      <div className='data-button'>
        <Link to="/phone">
        <ButtonPrimary title='Continuar'/>
        </Link>
      </div>
    </div>
    
    
  );
}