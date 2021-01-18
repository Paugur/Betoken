import React from 'react'
import { Route } from 'react-router-dom'
import Navigation from './views/navigation/navigation'
import HomePage from './views/homepage/homepage';
import CommentExtractor from './views/comment-extractor/comment-extractor'
import LoadScreen from './views/load-screen/load-screen'
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        {
          false
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
}

export default App;