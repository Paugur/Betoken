import React from "react";
import logo from "../../assets/paugur.svg";
import { FloatingContainer, LogoContainer } from "./logo.styles";

const Logo = ({ ...props }) => {
  return (
    <FloatingContainer>
      <LogoContainer src={logo} alt="Paugur" {...props} />
    </FloatingContainer>
  );
};

export default Logo;
