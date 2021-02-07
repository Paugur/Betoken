import {
    MEDIA_YOUTUBE,
    MEDIA_TWITTER,
    MEDIA_REDDIT,
    MEDIA_AMAZON
} from '../../types/media/media.types'

export const setApiKey = key => ({
    type: 'SET_API_KEY',
    payload: key
})

export const clearApiKey = () => ({
    type: 'CLEAR_API_KEY',
    payload: ""
})

export const setMediaYoutube = () => ({
    type: 'SET_MEDIA_YOUTUBE',
    payload: MEDIA_YOUTUBE
})

export const setMediaTwitter = () => ({
    type: 'SET_MEDIA_TWITTER',
    payload: MEDIA_TWITTER
})

export const setMediaReddit = () => ({
    type: 'SET_MEDIA_REDDIT',
    payload: MEDIA_REDDIT
})

export const setMediaAmazon = () => ({
    type: 'SET_MEDIA_AMAZON',
    payload: MEDIA_AMAZON
})