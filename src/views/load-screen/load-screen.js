import React from 'react';
import Loading from '../../components/loading/loading'
import { BoldSpan } from './load-screen.styles';

const LoadScreen = () => {
    return (
        <div>
            <Loading />
            <BoldSpan>
                Looking... Please Wait
            </BoldSpan>
        </div>
    )
}

export default LoadScreen;