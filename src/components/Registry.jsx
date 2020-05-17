import React from "react";
import "../assets/css/registry.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ButtonPrimary from './ButtonPrimary';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& label.Mui-focused": {
      color: "#00BAA4",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#00BAA4",
    },
   
  },
}));

const Registry = () => {
  const classes = useStyles();
  return (
    <div className="container-registry">
      <h1>Crear Usuario</h1>
      <p>XXXXXXXXXXXX</p>
      <p>XXXXXXXXXXXX</p>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Nombre" />
        <TextField id="standard-basic" label="Correo" />
        <TextField id="standard-basic" label="Clave" />
        <TextField id="standard-basic" label="Repetir Clave" />
      </form>
      <ButtonPrimary title='Válidar Correo'/>
    </div>
  );
};

export default Registry;
