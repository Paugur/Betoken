import React from "react";
import { FooterContainer, LeftOptions, RightOptions } from "./footer.styles";

const Footer = ({ leftComponents, rightComponents }) => {
  return (
    <FooterContainer>
      <LeftOptions>{leftComponents}</LeftOptions>
      <RightOptions>{rightComponents}</RightOptions>
    </FooterContainer>
  );
};

export default Footer;
