import React from 'react';
import Extractor from '../../api/comment-extractor/extractor';
import Logo from '../../components/logo/logo';
import {
    CommentExtractorContainer
} from './comment-extractor.styles'


const CommentExtractor = () => {
    return (
        <CommentExtractorContainer>
            <Logo isMainFocus />
            <Extractor />
        </CommentExtractorContainer>
    )
}

export default CommentExtractor;
