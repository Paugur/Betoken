import React from 'react';
import { Link } from 'react-router-dom'
import './navigation.css';

const Navigation = () => {

    return (
        <div className='header'>
            <div className='starting'>
                <Link className='start' to='/search'>
                    Query
                </Link>
            </div>
            <div className='options'>
                <Link className='option' to='/about'>
                    About
                </Link>
            </div>
        </div>
    )
}

export default Navigation; 