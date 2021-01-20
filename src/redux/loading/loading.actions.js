export const startLoading = () => ({
    type: 'START_LOADING',
    payload: true
})

export const cancelLoading = () => ({
    type: 'CANCEL_LOADING',
    payload: false
})