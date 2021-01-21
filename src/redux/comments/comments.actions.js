export const setComments = comments => ({
    type: 'SET_COMMENTS',
    payload: comments
})

export const clearComments = () => ({
    type: 'CLEAR_COMMENTS',
    payload: []
})