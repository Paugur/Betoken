import { MEDIA_YOUTUBE } from '../../types/media/media.types'

const INITIAL_STATE = {
    apiKey: "",
    mediaPref: MEDIA_YOUTUBE
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
        case 'SET_MEDIA_YOUTUBE':
            return {
                ...state,
                mediaPref: action.payload
            }
        case 'SET_MEDIA_TWITTER':
            return {
                ...state,
                mediaPref: action.payload
            }
        case 'SET_MEDIA_REDDIT':
            return {
                ...state,
                mediaPref: action.payload
            }
        case 'SET_MEDIA_AMAZON':
            return {
                ...state,
                mediaPref: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;