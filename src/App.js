import React, { Suspense, lazy } from "react";

import LoadScreen from "./views/load-screen/load-screen";

import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

import { AppContainer } from "./App.styles";

const Navigation = lazy(() => import("./views/navigation/navigation"));
const HomePage = lazy(() => import("./views/homepage/homepage"));
const CommentExtractor = lazy(() =>
  import("./views/comment-extractor/comment-extractor")
);
const CommentDisplay = lazy(() =>
  import("./views/comment-display/comment-display")
);
const Footer = lazy(() => import("./views/footer/footer"));

export const App = () => {
  const { loading } = useSelector((state) => state.loadingReducer);

  return (
    <AppContainer>
      {loading ? (
        <LoadScreen />
      ) : (
        <Suspense fallback={<LoadScreen />}>
          <Route exact={false} path="/" component={Navigation} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={CommentExtractor} />
          <Route exact path="/display" component={CommentDisplay} />
          <Route exact={false} path="/" component={Footer} />
        </Suspense>
      )}
    </AppContainer>
  );
};

export default App;
