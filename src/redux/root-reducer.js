import { combineReducers } from 'redux';

import loadingReducer from './loading/loading.reducer'
import commentReducer from './comments/comments.reducer'

export default combineReducers({
    loadingReducer,
    commentReducer
})