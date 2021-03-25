import React from "react";
import loading from "../../assets/loading.gif";
import { LoadingContainer } from "./loading.styles";

const Loading = () => {
  return (
    <div>
      <LoadingContainer src={loading} alt="Loading" />
    </div>
  );
};

export default Loading;
