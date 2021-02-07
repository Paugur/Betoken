import React from 'react';
import { useSelector } from 'react-redux';
import {
    MEDIA_YOUTUBE,
    MEDIA_TWITTER,
    MEDIA_REDDIT,
    MEDIA_AMAZON
} from '../../types/media/media.types'
import {
    YoutubeIconStyled,
    TwitterIconStyled,
    RedditIconStyled,
    AmazonIconStyled
} from './media-icon.styles';

const MediaIcon = () => {
    const { mediaPref } = useSelector(state => state.userReducer);
    switch (mediaPref) {
        case MEDIA_YOUTUBE:
            return (
                <YoutubeIconStyled />
            )
        case MEDIA_TWITTER:
            return (
                <TwitterIconStyled />
            )
        case MEDIA_REDDIT:
            return (
                <RedditIconStyled />
            )
        case MEDIA_AMAZON:
            return (
                <AmazonIconStyled />
            )
        default:
            return (
                <YoutubeIconStyled />
            )
    }
}

export default MediaIcon;