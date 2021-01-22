const INITIAL_STATE = {
    apiKey: "",
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_API_KEY':
            return {
                ...state,
                apiKey: action.payload
            }
        case 'CLEAR_API_KEY':
            return {
                ...state,
                apiKey: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;