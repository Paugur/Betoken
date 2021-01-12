import React from 'react'
import HomePage from './views/homepage/homepage';
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
