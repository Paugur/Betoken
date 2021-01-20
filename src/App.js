import React from 'react'
import { Route } from 'react-router-dom'
import Navigation from './views/navigation/navigation'
import HomePage from './views/homepage/homepage';
import CommentExtractor from './views/comment-extractor/comment-extractor'
import LoadScreen from './views/load-screen/load-screen'
import { useSelector } from 'react-redux';
import './App.css';

export const App = () => {
  const loading = useSelector(state => state.loading);
  return (
    <div className="App">
      {
        loading
          ?
          <LoadScreen />
          :
          <div>
            <Route exact={false} path='/'>
              <Navigation />
            </Route>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/search' component={CommentExtractor} />
          </div>
      }
    </div>
  );
}

export default App;