import React from "react";
import "../assets/css/registry.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ButtonPrimary from './ButtonPrimary';
import eye from '../assets/img/eye.svg';
import mic from '../assets/img/mic.svg';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      
    },
    "& label.Mui-focused": {
      color: "#175C54",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#175C54",
    },
    "& .MuiFormLabel-root": {
      fontSize: '20px',
    },
    "& .MuiInputBase-input": {
      height: '3em',
      padding: '10px',
    },
    "& .MuiFormControl-root": {
      width: '19em',
    }
   
  },
}));

const Registry = () => {
  const classes = useStyles();
  
  return (
    <>
    <div className="container-registry">
      <h1>Crea tu usuario</h1>
      <p> Recuerda que necesitamos un correo al que podamos comunicarnos contigo.</p>
     
      <form className={classes.root} noValidate autoComplete="off">
        <div className='container-clave'>
          <TextField id="standard-basic" label="Nombre" />
          <img src={mic}/>
        </div>
        <div className='container-clave'>
          <TextField id="standard-basic" label="Correo electrónico" />
          <img src={mic}/>
        </div>
        <div className='container-clave'>
        <TextField id="standard-basic" label="Ingresa tu clave" />
        <img src={eye}/>
        </div>
        <div className='container-clave'>
          <TextField id="standard-basic" label="Repetir clave" />
          <img src={eye}/>
        </div>
      </form>
    </div>
    <div className='container-button'>
      <Link to="/verificacion">
        <ButtonPrimary title='Continuar'/>
      </Link>

    </div>
     </>
  );
};

export default Registry;
