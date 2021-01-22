import React from 'react';
import loading from '../../img/loading.gif'
import './loading.css';

const Loading = () => {
    return (
        <div>
            <img src={loading} className="load" alt="Loading" />
        </div>
    )
}

export default Loading;