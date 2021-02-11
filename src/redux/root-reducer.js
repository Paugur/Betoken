import { combineReducers } from "redux";

import loadingReducer from "./loading/loading.reducer";
import mediaReducer from "./media/media.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  loadingReducer,
  mediaReducer,
  userReducer,
});
