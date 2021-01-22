import React from 'react';
import Logo from '../../components/logo/logo'
import Extractor from '../../api/comment-extractor/extractor'
import './comment-extractor.css'


const CommentExtractor = () => {
    return (
        <div>
            <Logo className="logo" />
            <Extractor />
        </div>
    )
}

export default CommentExtractor;
