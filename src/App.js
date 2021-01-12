import React from 'react'
<<<<<<< HEAD
import { Route } from 'react-router-dom'
import Navigation from './views/navigation/navigation'
=======
>>>>>>> e51f546216339b7a668af7e5e592259b1a71f401
import HomePage from './views/homepage/homepage';
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <Route exact={false} path='/'>
          <Navigation />
        </Route>
        <Route exact path='/' component={HomePage} />
=======
        <HomePage />
>>>>>>> e51f546216339b7a668af7e5e592259b1a71f401
      </div>
    );
  }
}

export default App;