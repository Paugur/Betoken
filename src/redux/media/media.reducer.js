const INITIAL_STATE = {
    comments: [],
    creatorInfo: [],
    videoInfo: [],
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
        case 'SET_CREATOR_INFO':
            return {
                ...state,
                creatorInfo: action.payload
            }
        case 'CLEAR_CREATOR_INFO':
            return {
                ...state,
                creatorInfo: action.payload
            }
        case 'SET_VIDEO_INFO':
            return {
                ...state,
                videoInfo: action.payload
            }
        case 'CLEAR_VIDEO_INFO':
            return {
                ...state,
                videoInfo: action.payload
            }
        default:
            return state;
    }
}

export default commentReducer;