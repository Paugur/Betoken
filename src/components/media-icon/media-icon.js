import React from 'react';
import { useSelector } from 'react-redux';
import { MEDIA } from '../../constants/media/media.constants'
import {
    YoutubeIconStyled,
    TwitterIconStyled,
    RedditIconStyled,
    AmazonIconStyled
} from './media-icon.styles';

const MediaIcon = () => {
    const { mediaPref } = useSelector(state => state.userReducer);
    switch (mediaPref) {
        case MEDIA.YOUTUBE:
            return (
                <YoutubeIconStyled />
            )
        case MEDIA.TWITTER:
            return (
                <TwitterIconStyled />
            )
        case MEDIA.REDDIT:
            return (
                <RedditIconStyled />
            )
        case MEDIA.AMAZON:
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