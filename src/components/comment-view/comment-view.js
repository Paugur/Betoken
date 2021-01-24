import React from 'react';
import { useSelector } from 'react-redux';
import { DisplayContainer } from './comment-view.styles';
import Comment from '../comment/comment';

const CommentView = () => {
    const { comments } = useSelector(state => state.mediaReducer);
    return (
        <DisplayContainer>
            {
                comments.map(comment => (
                    <Comment key={comment.commentId} label={comment.commentString} />
                ))
            }
        </DisplayContainer>
    )
}

export default CommentView;