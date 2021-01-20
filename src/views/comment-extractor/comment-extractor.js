import React from 'react';
import Logo from '../../components/logo/logo'
import { useDispatch } from 'react-redux'
import { startLoading } from '../../redux/loading/loading.actions'
import './comment-extractor.css'


const CommentExtractor = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Logo />
            <input
                placeholder="API Key"
            />
            <input
                placeholder="Video Id"
            />
            <button onClick={() => dispatch(startLoading())}>Query</button>
        </div>
    )
}

export default CommentExtractor;