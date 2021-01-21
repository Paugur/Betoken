const INITIAL_STATE = {
    comments: []
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
        default:
            return state;
    }
}

export default commentReducer;