import React from 'react';
import Loading from '../../components/loading/loading'
import './load-screen.css';

const LoadScreen = () => {
    return (
        <div>
            <Loading />
            <span>
                <b>Looking... Please Wait</b>
            </span>
        </div>
    )
}

export default LoadScreen;