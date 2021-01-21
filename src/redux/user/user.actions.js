export const setApiKey = key => ({
    type: 'SET_API_KEY',
    payload: key
})

export const clearApiKey = () => ({
    type: 'CLEAR_API_KEY',
    payload: ""
})