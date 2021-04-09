import React from "react";
import axios from "axios";
import { websitePrefix } from "../../../constants/api/api.constants";
import Input from "../../../components/input/input";
import Button from "../../../components/button/button";
import { useDispatch, useSelector } from "react-redux";
import { setApiKey } from "../../../redux/client/client.actions";
import { setMediaId } from "../../../redux/media/media.actions";
import {
  startLoading,
  cancelLoading,
} from "../../../redux/loading/loading.actions";
import {
  setComments,
  setVideoInfo,
  setCreatorInfo,
} from "../../../redux/media/media.actions";
import { ButtonContainer, InputContainer } from "./youtube-extractor.styles";

export const youtubeExtractor = (mediaId, apiKey) => {
  return axios({
    url: websitePrefix + "api/youtube-extractor/" + mediaId + "/" + apiKey,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
  });
};

const YoutubeAPI = () => {
  const { mediaId } = useSelector((state) => state.mediaReducer);
  const { apiKey } = useSelector((state) => state.clientReducer);
  const dispatch = useDispatch();

  const onKeyChange = (event) => {
    dispatch(setApiKey(event.target.value));
  };

  const onIdChange = (event) => {
    dispatch(setMediaId(event.target.value));
  };

  const onButtonRequest = () => {
    dispatch(startLoading());
    youtubeExtractor(mediaId, apiKey)
      .then((response) => {
        dispatch(setVideoInfo(response.data.video));
        dispatch(setCreatorInfo(response.data.channel));
        dispatch(setComments(JSON.parse(response.data.comments)));
        dispatch(cancelLoading());
      })
      .catch((error) => {
        dispatch(cancelLoading());
        alert("Something went wrong, Recorded " + error);
      });
  };

  return (
    <div>
      <InputContainer>
        <Input
          name="apiKey"
          type="text"
          label="API Key"
          value={apiKey}
          inputChange={onKeyChange}
        />
        <Input
          name="mediaId"
          type="text"
          label="Video ID"
          value={mediaId}
          inputChange={onIdChange}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={onButtonRequest} label="Query" />
      </ButtonContainer>
    </div>
  );
};

export default YoutubeAPI;
