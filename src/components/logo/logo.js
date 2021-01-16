import React from 'react'
import logo from '../../img/paugur.svg'
import './logo.css'

const Logo = () => {
    return (
        <div className='floating'>
            <img src={logo} className="logo" alt="Paugur" />
        </div>
    )
}

export default Logo;