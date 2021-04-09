import styled, { css } from "styled-components";

export const FloatingContainer = styled.div`
  animation-name: float;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  @keyframes float {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;

const mainFocus = css`
  height: 25vmin;
  padding-bottom: 20px;
`;

const smallFocus = css`
  height: 15vmin;
  padding-bottom: 20px;
`;

const getLogoStyles = (props) => {
  if (props.isMainFocus) {
    return mainFocus;
  } else {
    return smallFocus;
  }
};

export const LogoContainer = styled.img`
  ${getLogoStyles}
`;
