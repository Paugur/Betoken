const INITIAL_STATE = {
    loading: false
}

const loadingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'CANCEL_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}

export default loadingReducer;