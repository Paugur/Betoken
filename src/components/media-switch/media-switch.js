import React, { useState } from 'react';
import MediaIcon from '../media-icon/media-icon';
import { IconButton } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {
    MEDIA_YOUTUBE,
    MEDIA_TWITTER,
    MEDIA_REDDIT,
    MEDIA_AMAZON
} from '../../types/media/media.types'
import {
    setMediaYoutube,
    setMediaTwitter,
    setMediaReddit,
    setMediaAmazon
} from '../../redux/user/user.actions'
import {
    clearCreatorInfo,
    clearVideoInfo,
    clearMediaId,
    clearComments
} from '../../redux/media/media.actions'
import {
    ClosePopUp,
    PopUpContainer,
    PopUpContent,
    YoutubeIconStyled,
    TwitterIconStyled,
    RedditIconStyled,
    AmazonIconStyled
} from './media-switch.styles'

export const SwitchPopUp = ({ toggle }) => {
    const dispatch = useDispatch();
    const toggleSwitch = () => {
        toggle();
    }
    const changePref = (media) => {
        toggle();
        dispatch(clearComments());
        dispatch(clearCreatorInfo());
        dispatch(clearMediaId());
        dispatch(clearVideoInfo());
        switch (media) {
            case MEDIA_YOUTUBE:
                dispatch(setMediaYoutube());
                break;
            case MEDIA_TWITTER:
                dispatch(setMediaTwitter());
                break;
            case MEDIA_REDDIT:
                dispatch(setMediaReddit());
                break;
            case MEDIA_AMAZON:
                dispatch(setMediaAmazon());
                break;
            default:
                break;
        }
    }
    return (
        <PopUpContainer>
            <PopUpContent>
                <ClosePopUp onClick={toggleSwitch}>
                    &times;
                </ClosePopUp>
                <h2>
                    Choose Prefered Media
                </h2>
                <IconButton onClick={() => changePref(MEDIA_YOUTUBE)}>
                    <YoutubeIconStyled />
                </IconButton>
                <IconButton onClick={() => changePref(MEDIA_TWITTER)}>
                    <TwitterIconStyled />
                </IconButton>
                <IconButton onClick={() => changePref(MEDIA_REDDIT)}>
                    <RedditIconStyled />
                </IconButton>
                <IconButton onClick={() => changePref(MEDIA_AMAZON)}>
                    <AmazonIconStyled />
                </IconButton>
            </PopUpContent>
        </PopUpContainer>
    )
}

const MediaSwitch = () => {
    const [switcher, setSwitcher] = useState(false);
    const toggleSwitch = () => {
        setSwitcher(!switcher);
    }
    return (
        <div>
            <IconButton onClick={toggleSwitch}>
                <MediaIcon />
            </IconButton>
            {
                switcher ?
                    <SwitchPopUp toggle={toggleSwitch} />
                    :
                    null
            }
        </div>
    )
}

export default MediaSwitch;