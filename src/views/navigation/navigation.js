import React from "react";
import { useSelector } from "react-redux";
import Link from "../../components/link/link";
import { Header, LeftOptions, RightOptions } from "./navigation.styles";

const Navigation = () => {
  const { comments } = useSelector((state) => state.mediaReducer);
  return (
    <Header>
      <LeftOptions>
        <Link to="/search">Query</Link>
        <Link to="/display" disabled={comments.length === 0}>
          Analyze
        </Link>
      </LeftOptions>
      <RightOptions>
        <Link to="/about">About</Link>
      </RightOptions>
    </Header>
  );
};

export default Navigation;
