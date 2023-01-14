import React from "react";
import { LinkStyled } from "./link.styles";

const Link = ({ children, disabled, ...properties }) => {
  return !disabled ? (
    <LinkStyled {...properties}>{children}</LinkStyled>
  ) : (
    <LinkStyled as="div" disabled>
      {children}
    </LinkStyled>
  );
};

export default Link;
