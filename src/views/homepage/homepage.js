import React from 'react'
import Logo from '../../components/logo/logo'
import { Link } from 'react-router-dom'
import './homepage.css'

const HomePage = () => {
    return (
        <div>
            <Link to='/search'>
                <Logo />
            </Link>
            <span>
                <b>AI Based Comment Analyzation Tool</b>
            </span>
        </div>
    )
}

export default HomePage;