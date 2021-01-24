import React from 'react';
import { CommentContainer } from './comment.styles'

const Comment = ({ label, ...properties }) => {
    return (
        <CommentContainer {...properties}>
            {label}
        </CommentContainer>
    )
}

export default Comment;