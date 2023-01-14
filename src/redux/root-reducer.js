import { combineReducers } from "redux";

import loadingReducer from "./loading/loading.reducer";
import mediaReducer from "./media/media.reducer";
import clientReducer from "./client/client.reducer";

export default combineReducers({
  loadingReducer,
  mediaReducer,
  clientReducer,
});
