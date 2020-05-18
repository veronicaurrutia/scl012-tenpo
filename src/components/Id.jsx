import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ButtonPrimary from './ButtonPrimary';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import adelante from '../assets/img/adelante.png'
import detras from '../assets/img/detras.png'
import '../assets/css/id.css';

const useStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1.5),
      width: "36ch",
      left:"20px"
    },
    "& label.Mui-focused": {
      color: "#175C54",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#00BAA4",
    },
   
  },
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
  
const useStyles = makeStyles(theme => ({
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(6),
    outline: 'none',
    position:"absolute",
  },
}));
function SimpleModal() {
  const [open, setOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  return (
    <div >
      <img src={adelante}/>
      <img src={detras}/>
    </div>
      
  );
}
const Id = () => {
    const [open, setOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const classe = useStyle();

  return (
    <div className='container-id'>
      <h1 className='id-tittle'>Cédula de identidad</h1>
      <p className='id-text'>Con esta cuenta podrás cargar dinero, recargar o pagar a tus amigos.</p>
      <p className='id-text'>
        <strong>
          Para poder abrir esta cuenta necesitas tu RUT y el número de serie de tu cedula
          de identidad
        </strong>
      </p>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <SimpleModal />
          </div>
        </Modal>
      </div>
      <form className={classe.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="RUT" />
        <TextField id="standard-basic" label="Número de serie" />
      </form>
      <a href className='id-modal' onClick={handleOpen}><strong>¿Donde encuentro el numero de serie?</strong></a>
      
      <FormControlLabel
        className='id-check'
        value="end"
        control={<Checkbox color="primary" />}
        label="Acepto conforme los terminos y condiciones del servicio."
        labelPlacement="end"
      />
      <ButtonPrimary  title='CONTINUAR'/>
    </div>
  )
}

export default Id

{/* <div>
        <div className='id-form'>

        
       
        
        </div>
      </div>
       */}