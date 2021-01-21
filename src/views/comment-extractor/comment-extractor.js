import React from 'react';
import Logo from '../../components/logo/logo'
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import { useDispatch, useSelector } from 'react-redux'
import { setApiKey } from '../../redux/user/user.actions'
import { setMediaId } from '../../redux/media/media.actions'
import { startLoading, cancelLoading } from '../../redux/loading/loading.actions'
import { setComments } from '../../redux/media/media.actions'
import { youtubeExtractor } from '../../api/comment-extractor/youtube-extractor'
import './comment-extractor.css'


const CommentExtractor = () => {
    const { mediaId } = useSelector(state => state.mediaReducer);
    const { apiKey } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const onKeyChange = (event) => {
        dispatch(setApiKey(event.target.value))
    }

    const onIdChange = (event) => {
        dispatch(setMediaId(event.target.value))
    }

    return (
        <div>
            <Logo className="logo" />
            <Input
                name='apiKey'
                type="text"
                label="API Key"
                value={apiKey}
                inputChange={onKeyChange}
            />
            <Input
                name="mediaId"
                type="text"
                label="Video ID"
                value={mediaId}
                inputChange={onIdChange}
            />
            <div className="center">
                <Button onClick={() => {
                    dispatch(startLoading());
                    youtubeExtractor(mediaId, apiKey).then(response => {
                        response.json();
                    }).then(comments => {
                        dispatch(setComments(comments));
                        dispatch(cancelLoading());
                    }).catch(error => {
                        dispatch(cancelLoading());
                        alert('Something went wrong');
                    })
                }} label="Query" />
            </div>
        </div>
    )
}

export default CommentExtractor;