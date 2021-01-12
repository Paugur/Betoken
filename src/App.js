import React from 'react'
import { Route } from 'react-router-dom'
import Navigation from './views/navigation/navigation'
import HomePage from './views/homepage/homepage';
import CommentExtractor from './views/comment-extractor/comment-extractor'
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact={false} path='/'>
          <Navigation />
        </Route>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/start' component={CommentExtractor} />
      </div>
    );
  }
}

export default App;