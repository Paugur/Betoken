import React from 'react';
import Logo from '../../components/logo/logo'
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import { useDispatch, useSelector } from 'react-redux'
import { startLoading } from '../../redux/loading/loading.actions'
import './comment-extractor.css'


const CommentExtractor = () => {
    const { mediaId } = useSelector(state => state.mediaReducer);
    const { apiKey } = useSelector(state => state.userReducer)
    const dispatch = useDispatch();

    return (
        <div>
            <Logo className="logo" />
            <Input
                name='apiKey'
                type="text"
                label="API Key"
                value={apiKey}
            />
            <Input
                name="mediaId"
                type="text"
                label="Video ID"
                value={mediaId}
            />
            <div className="center">
                <Button onClick={() => dispatch(startLoading())} label="Query" />
            </div>
        </div>
    )
}

export default CommentExtractor;