import {
    MEDIA_SET_ACTIONS,
    MEDIA_CLEAR_ACTIONS
} from './media.types';

const INITIAL_STATE = {
    comments: [],
    creatorInfo: [],
    videoInfo: [],
    mediaId: ""
}

const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MEDIA_SET_ACTIONS.COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        case MEDIA_CLEAR_ACTIONS.COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        case MEDIA_SET_ACTIONS.MEDIA_ID:
            return {
                ...state,
                mediaId: action.payload
            }
        case MEDIA_CLEAR_ACTIONS.MEDIA_ID:
            return {
                ...state,
                mediaId: action.payload
            }
        case MEDIA_SET_ACTIONS.CREATOR_INFO:
            return {
                ...state,
                creatorInfo: action.payload
            }
        case MEDIA_CLEAR_ACTIONS.CREATOR_INFO:
            return {
                ...state,
                creatorInfo: action.payload
            }
        case MEDIA_SET_ACTIONS.VIDEO_INFO:
            return {
                ...state,
                videoInfo: action.payload
            }
        case MEDIA_CLEAR_ACTIONS.VIDEO_INFO:
            return {
                ...state,
                videoInfo: action.payload
            }
        default:
            return state;
    }
}

export default commentReducer;