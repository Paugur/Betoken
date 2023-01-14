import {
  CLIENT_API_KEY_ACTIONS,
  CLIENT_SET_MEDIA_PREF_ACTIONS,
} from "./client.types";
import { MEDIA } from "../../constants/media/media.constants";

export const setApiKey = (key) => ({
  type: CLIENT_API_KEY_ACTIONS.SET_KEY,
  payload: key,
});

export const clearApiKey = () => ({
  type: CLIENT_API_KEY_ACTIONS.CLEAR_KEY,
  payload: "",
});

export const setMediaYoutube = () => ({
  type: CLIENT_SET_MEDIA_PREF_ACTIONS.YOUTUBE,
  payload: MEDIA.YOUTUBE,
});

export const setMediaTwitter = () => ({
  type: CLIENT_SET_MEDIA_PREF_ACTIONS.TWITTER,
  payload: MEDIA.TWITTER,
});

export const setMediaReddit = () => ({
  type: CLIENT_SET_MEDIA_PREF_ACTIONS.REDDIT,
  payload: MEDIA.REDDIT,
});

export const setMediaAmazon = () => ({
  type: CLIENT_SET_MEDIA_PREF_ACTIONS.AMAZON,
  payload: MEDIA.AMAZON,
});
