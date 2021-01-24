import React from 'react'
import { Route } from 'react-router-dom'
import LoadScreen from './views/load-screen/load-screen'
import Navigation from './views/navigation/navigation'
import HomePage from './views/homepage/homepage';
import CommentExtractor from './views/comment-extractor/comment-extractor'
import CommentDisplay from './views/comment-display/comment-display';
import { useSelector } from 'react-redux';
import { AppContainer } from './App.styles'

export const App = () => {

  const { loading } = useSelector(state => state.loadingReducer);

  return (
    <AppContainer>
      {
        loading
          ?
          <LoadScreen />
          :
          <div>
            <Route exact={false} path='/' component={Navigation} />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/search' component={CommentExtractor} />
            <Route exact path='/display' component={CommentDisplay} />
          </div>
      }
    </AppContainer>
  );
}

export default App;