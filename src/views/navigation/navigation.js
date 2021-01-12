import React from 'react';
import { Link } from 'react-router-dom'
import './navigation.css';

const Navigation = () => {

    return (
        <div className='header'>
            <Link className='start' to='/start'>
                Get Started
            </Link>
            <div className='options'>
                <Link className='option' to='/about'>
                    About
                </Link>
            </div>
        </div>
    )
}

export default Navigation; 