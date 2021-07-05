import { LOADING_APP_ACTIONS } from "./loading.types";

export const startLoading = () => ({
  type: LOADING_APP_ACTIONS.START,
  payload: true,
});

export const cancelLoading = () => ({
  type: LOADING_APP_ACTIONS.START,
  payload: false,
});
