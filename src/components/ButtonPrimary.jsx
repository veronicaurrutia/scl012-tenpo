import React from 'react';
import PropTypes from 'prop-types'
import '../assets/css/button.css'


const ButtonPrimary = ({title, onClick}) => {
    return (
        <button className = 'button' onClick = {onClick}>
        {title}
        </button>
    )
}

ButtonPrimary.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default ButtonPrimary;