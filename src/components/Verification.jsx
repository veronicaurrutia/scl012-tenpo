import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonPrimary from '../components/ButtonPrimary';
import '../assets/css/verification.css'
import { Link } from 'react-router-dom';
import mic from '../assets/img/mic.svg';


const useStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },

    "& .MuiFormLabel-root": {
      fontSize: '20px',
    },
    "& .MuiInputBase-input": {
      padding: '10px',
    },
    "& .MuiFormControl-root": {
      width: '19em',
    }
   
  },
}));
const Verification = () => {
    const classes = useStyle();
    return (
      <div className="container-code">
        <h1 className='code-tittle'>Te hemos enviado un correo</h1>
        <p className='code-text'>Ingresa a continuación el código que te enviamos</p>
        <div >
          <form className={classes.root}  noValidate autoComplete="off">
            <div className='container-img'>
              <TextField  id="Codigo-basic" label="Codigo" />
                <img src={mic}/>
            </div>
          </form>
        </div>
       
        <div className='container-btn'>
          <button className='code-btn'>ENVIAR CÓDIGO DE NUEVO</button>
          <Link to="/home">
            <ButtonPrimary  title='CONOCER TENPO'/>
          </Link>
          <Link to="/id">
            <ButtonPrimary title='CREAR CUENTA DIGITAL'/>
          </Link>
        </div>
      </div>
    );
  };
  
export default Verification;
