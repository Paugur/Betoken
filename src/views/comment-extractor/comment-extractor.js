import React from 'react';
import Logo from '../../components/logo/logo'
import Input from '../../components/input/input'
import { useDispatch } from 'react-redux'
import { startLoading } from '../../redux/loading/loading.actions'
import './comment-extractor.css'


const CommentExtractor = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Logo />
            <Input
                type="text"
                label="API Key"
                value={ }
            />
            <Input
                type="text"
                label="API Key"
                value={ }
            />
            <button onClick={() => dispatch(startLoading())}>Query</button>
        </div>
    )
}

export default CommentExtractor;