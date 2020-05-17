import React from 'react'
import { Link } from "react-router-dom";
import '../assets/css/welcome.css';
import welcome from '../assets/img/img1.svg'
import logo from '../assets/img/logoBlanco.svg'
import ButtonPrimary from './ButtonPrimary';



const Welcome = () => {
    return (
        <div className='container-welcome'>
            <div className='container-img'>
                <img className='img-welcome' src={welcome}/>
                <img className='logo' style={{width:'15em'}} src={logo}/>
            </div>
            <h1 className='text-welcome'>¡Hola!</h1>
            <div>
                <p className='body-welcome'>En tenpo puedes<strong>crear tu cuenta digital GRATIS,</strong> sin papeleos ni trámites burocráticos</p>
                <p className='body-welcome'>Tambien puedes activar tu <strong>tarjeta Tenpo Mastercard sin costo,</strong> para lo que necesites</p>            
            </div>
            <div className='container-button'>
                <Link to="/registrarse">
                    <ButtonPrimary title='Crear Usuario'/>
                </Link>
<<<<<<< HEAD
                <Link to="/data">
                <ButtonPrimary title='Iniciar Sesión' />
                </Link>
=======
                <button className='sigIn-btn'>Iniciar Sesión</button>
            </div>
>>>>>>> 7d1f73d675db4742dba5bb33640123af7492c81b
        </div>
    )
}

export default Welcome
