import styled from "styled-components";

export const SignInContainer = styled.div`
  position: absolute;
  padding-top: 20px;
  width: 40%;
  height: 80%;
  left: 30vw;
  top: 2vw;
  background: rgba(35, 21, 120, 0.73);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputContainer = styled.div`
  transform: translate(32%, 50%);
`;

const color = ({ color }) => {
  return color;
};

export const BoldSpan = styled.span`
  font-weight: bold;
  font-size: 36px;
  color: ${color};
`;
