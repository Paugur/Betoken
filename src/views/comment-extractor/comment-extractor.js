import React, { useEffect, useState } from 'react';
import Logo from '../../components/logo/logo'
import './comment-extractor.css'


const CommentExtractor = () => {
    return (
        <div>
            <Logo />
            <input
                placeholder="API Key"
            />
            <input
                placeholder="Video Id"
            />
        </div>
    )
}

export default CommentExtractor;