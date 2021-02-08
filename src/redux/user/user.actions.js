import {
    USER_API_KEY_ACTIONS,
    USER_SET_MEDIA_PREF_ACTIONS
} from './user.types';
import { MEDIA } from '../../constants/media/media.constants';

export const setApiKey = key => ({
    type: USER_API_KEY_ACTIONS.SET_KEY,
    payload: key
})

export const clearApiKey = () => ({
    type: USER_API_KEY_ACTIONS.CLEAR_KEY,
    payload: ""
})

export const setMediaYoutube = () => ({
    type: USER_SET_MEDIA_PREF_ACTIONS.YOUTUBE,
    payload: MEDIA.YOUTUBE
})

export const setMediaTwitter = () => ({
    type: USER_SET_MEDIA_PREF_ACTIONS.TWITTER,
    payload: MEDIA.TWITTER
})

export const setMediaReddit = () => ({
    type: USER_SET_MEDIA_PREF_ACTIONS.REDDIT,
    payload: MEDIA.REDDIT
})

export const setMediaAmazon = () => ({
    type: USER_SET_MEDIA_PREF_ACTIONS.AMAZON,
    payload: MEDIA.AMAZON
})