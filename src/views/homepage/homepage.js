import React from 'react'
import Logo from '../../components/logo/logo'
import './homepage.css'

const HomePage = () => {
    return (
        <div>
            <Logo className='homelogo' />
            <span>
                <b>AI Based Comment Analyzation Tool</b>
            </span>
        </div>
    )
}

export default HomePage;