import styled, { css } from "styled-components";

const descriptionMainColor = "white";
const descriptionSubColor = "gray";
const userInputColor = "black";

const filledStyles = css`
  top: -25px;
  font-size: 18px;
  color: ${descriptionMainColor};
`;

const small = css`
  width: 15%;
`;

const medium = css`
  width: 20%;
`;

const large = css`
  width: 35%;
`;

const size = ({ size }) => {
  switch (size) {
    case "small":
      return small;
    case "large":
      return large;
    default:
      return medium;
  }
};

export const Container = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.2em;
  }
`;

export const InputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${userInputColor};
  font-size: 18px;
  padding: 10px 10px 10px 10px;
  display: block;
  ${size}
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${filledStyles}
  }
`;

export const LabelContainer = styled.label`
  color: ${descriptionSubColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.filled {
    ${filledStyles}
  }
`;
