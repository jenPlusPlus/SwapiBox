import React, { Component } from 'react';
import People from './People.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>SWAPI BOX!</p>
        <People />
      </div>
    );
  }
}

export default App;
