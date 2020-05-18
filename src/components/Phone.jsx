import React from 'react'
import '../assets/css/validationWS.css'
import mic from '../assets/img/mic.svg';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import ButtonPrimary from './ButtonPrimary';



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

const ValidationWS = () => {

    const classes = useStyles();

    return (
        <>
        <div className='container-validationWS'>
            <h1>Ingresa tu numero de celular</h1>
            <p>Te enivaremos un codigo para validar el numero.</p>
          <form className={classes.root} noValidate autoComplete="off">
              <div className='container-clave'>
                  <TextField id="standard-basic" label="+569" />
                  <img src={mic}/>
              </div>
          </form>
        </div>
        <div className='validation-buttons'>
            <Link to='/ws'>
            <ButtonPrimary title='VALIDAR POR  WHATSAPP'/>
            </Link>
            <Link to="/sms">
                <ButtonPrimary title='VALIDAR POR SMS'/>
            </Link>
          </div>
      </>
    )
}

export default ValidationWS;
