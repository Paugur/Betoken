const INITIAL_STATE = {
    comments: [],
    mediaId: ""
}

const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_COMMENTS':
            return {
                ...state,
                comments: action.payload
            }
        case 'CLEAR_COMMENTS':
            return {
                ...state,
                comments: action.payload
            }
        case 'SET_MEDIA_ID':
            return {
                ...state,
                mediaId: action.payload
            }
        case 'CLEAR_MEDIA_ID':
            return {
                ...state,
                mediaId: action.payload
            }
        default:
            return state;
    }
}

export default commentReducer;