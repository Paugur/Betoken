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