import React from 'react'
import '../assets/css/home.css';
import welcome from '../assets/img/img1.svg'
import logo from '../assets/img/logoBlanco.svg'
import ButtonPrimary from './ButtonPrimary';

const Home = () => {
  return (
    <div className='container-home'>
    <div className='container-img'>
        <img className='img-home' src={welcome}/>
        <img className='logo' style={{width:'15em'}} src={logo}/>
    </div>
    <h1 className='text-home'>¡Bienvenido!</h1>
    <div>
        <p className='body-home'>Ahora tienes tu cuenta digital gratuita</p>
        <p className='body-home'>Recuerda que ahora puedes activar tu <strong>Tarjeta Tenpo Mastercard prepago,</strong> para usarla como metodo de pago en compras
        internacionales y mucho mas.</p>            
    </div>
   
    <div className='container-button-home'>
      <ButtonPrimary title='HOME'/>
    </div>
</div>
  )
}

export default Home
