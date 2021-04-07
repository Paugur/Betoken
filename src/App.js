import React, { Suspense, lazy } from "react";

import LoadScreen from "./views/load-screen/load-screen";

import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

import { ROUTES } from "./constants/routes/routes.constants";
import { AppContainer } from "./App.styles";

const HomePage = lazy(() => import("./views/homepage/homepage"));
const CommentExtractor = lazy(() =>
  import("./views/comment-extractor/comment-extractor")
);
const CommentDisplay = lazy(() =>
  import("./views/comment-display/comment-display")
);

export const App = () => {
  const { loading } = useSelector((state) => state.loadingReducer);

  return (
    <AppContainer>
      {loading ? (
        <LoadScreen />
      ) : (
        <Suspense fallback={<LoadScreen />}>
          <Route exact path={ROUTES.BASE} component={HomePage} />
          <Route exact path={ROUTES.QUERY} component={CommentExtractor} />
          <Route exact path={ROUTES.DISPLAY} component={CommentDisplay} />
        </Suspense>
      )}
    </AppContainer>
  );
};

export default App;
