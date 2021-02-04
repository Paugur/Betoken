import React from 'react';
import YoutubeCommentView from './youtube-comment-view/youtube-comment-view'
import { useSelector } from 'react-redux';

const CommentView = () => {
    const { mediaPref } = useSelector(state => state.userReducer);
    switch (mediaPref) {
        case 'Youtube':
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