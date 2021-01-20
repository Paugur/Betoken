import React from 'react';
import Loading from '../../components/loading/loading'
import { useDispatch } from 'react-redux'
import { cancelLoading } from '../../redux/loading/loading.actions'
import './load-screen.css';

const LoadScreen = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Loading />
            <span>
                <b>Looking... Please Wait</b>
            </span>
            <button onClick={() => dispatch(cancelLoading())}>Cancel</button>
        </div>
    )
}

export default LoadScreen;