export const setComments = comments => ({
    type: 'SET_COMMENTS',
    payload: comments
})

export const clearComments = () => ({
    type: 'CLEAR_COMMENTS',
    payload: []
})

export const setMediaId = id => ({
    type: 'SET_MEDIA_ID',
    payload: id
})

export const clearMediaId = () => ({
    type: 'CLEAR_MEDIA_ID',
    payload: ""
})

export const setCreatorInfo = info => ({
    type: 'SET_CREATOR_INFO',
    payload: info
})

export const clearCreatorInfo = () => ({
    type: 'CLEAR_CREATOR_INFO',
    payload: []
})

export const setVideoInfo = info => ({
    type: 'SET_VIDEO_INFO',
    payload: info
})

export const clearVideoInfo = () => ({
    type: 'CLEAR_VIDEO_INFO',
    payload: []
})