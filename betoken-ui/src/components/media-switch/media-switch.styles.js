import styled from "styled-components";
import Modal from "react-modal";
import MediaIcon from "../media-icon/media-icon";

export const PopUpContent = styled(Modal)`
  background-color: black;
  color: white;
  position: absolute;
  text-align: center;
  top: 20%;
  left: 29%;
  width: 40%;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid black;
  :focus {
    outline: none;
  }
`;

export const PreferanceContainer = styled.div`
  text-align: center;
`;

export const MediaIconStyled = styled(MediaIcon)`
  font-size: 1.2em;
`;
