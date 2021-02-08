import React from 'react';
import YoutubeCommentView from './youtube-comment-view/youtube-comment-view'
import { useSelector } from 'react-redux';
import { MEDIA } from '../../constants/media/media.constants'


const CommentView = () => {
    const { mediaPref } = useSelector(state => state.userReducer);
    switch (mediaPref) {
        case MEDIA.YOUTUBE:
            return (
                <YoutubeCommentView />
            )
        default:
            return (
                <YoutubeCommentView />
            )
    }
}

export default CommentView;