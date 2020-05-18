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
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
      outline: 'none',
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

  const [state, setState] = React.useState({
    acepto: true,
  });
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const { acepto} = state;
    return (
        <div>
            <h1>Rut y N° Documento</h1>
            <p>ingresa tu rut y n° Documento</p>
            <div>
      <Button onClick={handleOpen}>¿Donde lo encuentro?</Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h6" id="modal-title">
         geral
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
            sdsd
          </Typography>
          <SimpleModal />
        </div>
      </Modal>
    </div>
            <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="Rut-basic" label="Rut" />
                <TextField id="Documento-basic" label="N° Documento" />
            </form>
          <div className={classes.root}>
              <FormControlLabel
                  control={<Checkbox checked={acepto} onChange={handleChange('acepto')} value="acepto" />}
                  label="Acepto condiciones"
              />  
          </div>
          <ButtonPrimary title='Crear Cuenta'/>
      </div>

        </div>
    )
}

export default Id

