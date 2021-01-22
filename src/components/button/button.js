import React from 'react';
import './button.css'

const Button = ({ label, ...properties }) => {
    return (
        <button {...properties} className="stylebutton">
            {label}
        </button>
    )
}

export default Button;