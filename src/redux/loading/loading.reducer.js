import { LOADING_APP_ACTIONS } from './loading.types';

const INITIAL_STATE = {
    loading: false
}

const loadingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING_APP_ACTIONS.START:
            return {
                ...state,
                loading: action.payload
            }
        case LOADING_APP_ACTIONS.CANCEL:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}

export default loadingReducer;