import React from 'react'
import '../assets/css/welcome.css';
import welcome from '../assets/img/welcome.svg'
import ButtonPrimary from './ButtonPrimary';



const Welcome = () => {
    return (
        <div className='container-welcome'>
            <div className='container-img'>
                <img src={welcome}/>
            </div>
            <h1 className='text-welcome'>Hola! Bienvenido a Tenpo</h1>
            <div className='body-welcome'>
                <p>Tu nueva <strong>cuenta digital GRATIS</strong> ¡Abrela en sólo tres minutos y maneja tu dinero como quieras desde tu celular!</p>
            </div>
                <ButtonPrimary title='Crear Usuario'/>
                <ButtonPrimary title='Iniciar Sesión' />
        </div>
    )
}

export default Welcome
