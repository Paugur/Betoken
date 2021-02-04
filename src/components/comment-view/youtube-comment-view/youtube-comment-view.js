import React from 'react';
import { useSelector } from 'react-redux';
import { DisplayContainer } from './youtube-comment-view.styles';
import Comment from '../../comment/comment';

const YoutubeCommentView = () => {
    const { comments } = useSelector(state => state.mediaReducer);
    return (
        <DisplayContainer>
            {
                comments.map(comment => (
                    <Comment key={comment.commentId} label={comment.commentString} sentiment={comment.commentSentiment} />
                ))
            }
        </DisplayContainer>
    )
}

export default YoutubeCommentView;