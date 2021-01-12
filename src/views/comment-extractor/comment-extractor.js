import React from 'react';
import Logo from '../../components/logo/logo'
import { Input } from 'antd';
import './comment-extractor.css'


const CommentExtractor = () => {
    return (
        <div>
            <Logo />
            <Input
                size="large"
            />
        </div>
    )
}

export default CommentExtractor;