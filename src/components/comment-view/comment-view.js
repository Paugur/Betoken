import React from 'react';
import YoutubeCommentView from './youtube-comment-view/youtube-comment-view'
import { useSelector } from 'react-redux';
import {
    MEDIA_YOUTUBE,
} from '../../types/media/media.types'

const CommentView = () => {
    const { mediaPref } = useSelector(state => state.userReducer);
    switch (mediaPref) {
        case MEDIA_YOUTUBE:
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