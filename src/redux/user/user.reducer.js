import {
    USER_API_KEY_ACTIONS,
    USER_SET_MEDIA_PREF_ACTIONS
} from './user.types';
import { MEDIA } from '../../constants/media/media.constants';

const INITIAL_STATE = {
    apiKey: "",
    mediaPref: MEDIA.YOUTUBE
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_API_KEY_ACTIONS.SET_KEY:
            return {
                ...state,
                apiKey: action.payload
            }
        case USER_API_KEY_ACTIONS.CLEAR_KEY:
            return {
                ...state,
                apiKey: action.payload
            }
        case USER_SET_MEDIA_PREF_ACTIONS.YOUTUBE:
            return {
                ...state,
                mediaPref: action.payload
            }
        case USER_SET_MEDIA_PREF_ACTIONS.TWITTER:
            return {
                ...state,
                mediaPref: action.payload
            }
        case USER_SET_MEDIA_PREF_ACTIONS.REDDIT:
            return {
                ...state,
                mediaPref: action.payload
            }
        case USER_SET_MEDIA_PREF_ACTIONS.AMAZON:
            return {
                ...state,
                mediaPref: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;