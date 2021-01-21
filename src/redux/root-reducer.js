import { combineReducers } from 'redux';

import loadingReducer from './loading/loading.reducer'
import mediaReducer from './media/media.reducer'

export default combineReducers({
    loadingReducer,
    mediaReducer
})