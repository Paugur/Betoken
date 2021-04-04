import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const disabled = css`
  cursor: not-allowed;
  color: gray;
`;

const active = css`
  cursor: pointer;
  color: white;
`;

const cursor = (props) => {
  if (props.disabled) {
    return disabled;
  } else {
    return active;
  }
};

export const LinkStyled = styled(Link)`
  padding: 20px;
  text-decoration: none;
  ${cursor}
`;
