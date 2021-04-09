import React from "react";
import { useSelector } from "react-redux";
import { MEDIA } from "../../constants/media/media.constants";
import {
  YoutubeIconStyled,
  TwitterIconStyled,
  RedditIconStyled,
  AmazonIconStyled,
  IconContainer,
} from "./media-icon.styles";

export const YoutubeIcon = ({ ...properties }) => (
  <IconContainer {...properties}>
    <YoutubeIconStyled />
  </IconContainer>
);

export const TwitterIcon = ({ ...properties }) => (
  <IconContainer {...properties}>
    <TwitterIconStyled />
  </IconContainer>
);

export const RedditIcon = ({ ...properties }) => (
  <IconContainer {...properties}>
    <RedditIconStyled />
  </IconContainer>
);

export const AmazonIcon = ({ ...properties }) => (
  <IconContainer {...properties}>
    <AmazonIconStyled />
  </IconContainer>
);

const MediaIcon = ({ ...properties }) => {
  const { mediaPref } = useSelector((state) => state.clientReducer);
  switch (mediaPref) {
    case MEDIA.YOUTUBE:
      return <YoutubeIcon {...properties} />;
    case MEDIA.TWITTER:
      return <TwitterIcon {...properties} />;
    case MEDIA.REDDIT:
      return <RedditIcon {...properties} />;
    case MEDIA.AMAZON:
      return <AmazonIcon {...properties} />;
    default:
      return <YoutubeIcon {...properties} />;
  }
};

export default MediaIcon;
