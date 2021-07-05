import React from "react";
import { Header, LeftOptions, RightOptions } from "./navigation.styles";

const Navigation = ({ leftComponents, rightComponents }) => {
  return (
    <Header>
      <LeftOptions>{leftComponents}</LeftOptions>
      <RightOptions>{rightComponents}</RightOptions>
    </Header>
  );
};

export default Navigation;
