import styled, { css } from "styled-components";
import { MEDIA_COLORS } from "../../constants/colors/colors.constants";
import {
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillRedditSquare,
  AiFillAmazonSquare,
} from "react-icons/ai";

const iconStyles = css`
  font-size: 3.5em;
  cursor: pointer;
  color: white;
`;

export const YoutubeIconStyled = styled(AiFillYoutube)`
  ${iconStyles}
  :hover {
    color: ${MEDIA_COLORS.YOUTUBE};
  }
`;

export const TwitterIconStyled = styled(AiFillTwitterSquare)`
  ${iconStyles}
  :hover {
    color: ${MEDIA_COLORS.TWITTER};
  }
`;

export const RedditIconStyled = styled(AiFillRedditSquare)`
  ${iconStyles}
  :hover {
    color: ${MEDIA_COLORS.REDDIT};
  }
`;

export const AmazonIconStyled = styled(AiFillAmazonSquare)`
  ${iconStyles}
  :hover {
    color: ${MEDIA_COLORS.AMAZON};
  }
`;

export const IconContainer = styled.div`
  display: inline-block;
  font-size: 2em;
`;
