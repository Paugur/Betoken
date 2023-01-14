import React from "react";
import YoutubeAPI from "./youtube-extractor/youtube-extractor";
import { useSelector } from "react-redux";
import { MEDIA } from "../../constants/media/media.constants";

const Extractor = () => {
  const { mediaPref } = useSelector((state) => state.clientReducer);
  switch (mediaPref) {
    case MEDIA.YOUTUBE:
      return <YoutubeAPI />;
    default:
      return <YoutubeAPI />;
  }
};

export default Extractor;
