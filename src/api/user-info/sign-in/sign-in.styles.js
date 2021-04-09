import styled from "styled-components";
import Link from "../../../components/link/link";

export const SignInContainer = styled.div`
  position: absolute;
  padding-top: 20px;
  width: 35%;
  height: 60%;
  left: 30vw;
  top: 2vw;
  overflow: hidden;
  background: rgba(35, 21, 120, 0.73);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputContainer = styled.div`
  transform: translate(32%, -20%);
`;

const color = ({ color }) => {
  return color;
};

const size = ({ size }) => {
  if (size === null) {
    return 36;
  } else {
    return size;
  }
};

export const BoldSpan = styled.span`
  position: relative;
  font-weight: bold;
  font-size: ${size}px;
  color: ${color};
`;

export const LinkStyled = styled(Link)`
  font-size: 15px;
`;

export const SubmitContainer = styled.div`
  transform: translate(0%, -60%);
`;
