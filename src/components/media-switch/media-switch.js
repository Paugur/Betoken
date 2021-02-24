import React, { useState } from "react";
import {
  YoutubeIcon,
  TwitterIcon,
  RedditIcon,
  AmazonIcon,
} from "../media-icon/media-icon";
import { useDispatch } from "react-redux";
import { MEDIA } from "../../constants/media/media.constants";
import {
  setMediaYoutube,
  setMediaTwitter,
  setMediaReddit,
  setMediaAmazon,
} from "../../redux/user/user.actions";
import {
  clearCreatorInfo,
  clearVideoInfo,
  clearMediaId,
  clearComments,
} from "../../redux/media/media.actions";
import {
  PopUpContent,
  PreferanceContainer,
  MediaIconStyled,
} from "./media-switch.styles";

export const SwitchPopUp = ({ toggle }) => {
  const dispatch = useDispatch();
  const changePref = (media) => {
    toggle();
    dispatch(clearComments());
    dispatch(clearCreatorInfo());
    dispatch(clearMediaId());
    dispatch(clearVideoInfo());
    switch (media) {
      case MEDIA.YOUTUBE:
        dispatch(setMediaYoutube());
        break;
      case MEDIA.TWITTER:
        dispatch(setMediaTwitter());
        break;
      case MEDIA.REDDIT:
        dispatch(setMediaReddit());
        break;
      case MEDIA.AMAZON:
        dispatch(setMediaAmazon());
        break;
      default:
        break;
    }
  };
  return (
    <PreferanceContainer>
      <h1>Choose Prefered Media</h1>
      <YoutubeIcon onClick={() => changePref(MEDIA.YOUTUBE)} />
      <TwitterIcon onClick={() => changePref(MEDIA.TWITTER)} />
      <RedditIcon onClick={() => changePref(MEDIA.REDDIT)} />
      <AmazonIcon onClick={() => changePref(MEDIA.AMAZON)} />
    </PreferanceContainer>
  );
};

const MediaSwitch = () => {
  const [switcher, setSwitcher] = useState(false);
  const toggleSwitch = () => {
    setSwitcher(!switcher);
  };
  return (
    <div>
      <MediaIconStyled onClick={toggleSwitch} />
      <PopUpContent
        isOpen={switcher}
        onRequestClose={toggleSwitch}
        contentLabel="Change Media Preference"
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.25)",
          },
        }}
      >
        <SwitchPopUp toggle={toggleSwitch} />
      </PopUpContent>
    </div>
  );
};

export default MediaSwitch;
