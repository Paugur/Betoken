import {
    MEDIA_SET_ACTIONS,
    MEDIA_CLEAR_ACTIONS
} from './media.types';

export const setComments = comments => ({
    type: MEDIA_SET_ACTIONS.COMMENTS,
    payload: comments
})

export const clearComments = () => ({
    type: MEDIA_CLEAR_ACTIONS.COMMENTS,
    payload: []
})

export const setMediaId = id => ({
    type: MEDIA_SET_ACTIONS.MEDIA_ID,
    payload: id
})

export const clearMediaId = () => ({
    type: MEDIA_CLEAR_ACTIONS.MEDIA_ID,
    payload: ""
})

export const setCreatorInfo = info => ({
    type: MEDIA_SET_ACTIONS.CREATOR_INFO,
    payload: info
})

export const clearCreatorInfo = () => ({
    type: MEDIA_CLEAR_ACTIONS.CREATOR_INFO,
    payload: []
})

export const setVideoInfo = info => ({
    type: MEDIA_SET_ACTIONS.VIDEO_INFO,
    payload: info
})

export const clearVideoInfo = () => ({
    type: MEDIA_CLEAR_ACTIONS.VIDEO_INFO,
    payload: []
})