import React, { Component } from 'react';
import People from './People.js';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import CardContainer from './CardContainer/CardContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideBar />
        <Route exact path='/'
          render={ () =>
            <div className="home-message">
              <CardContainer />
            </div>
          }
        />
        <Route exact path='/people'
          render={ () =>
            <div className="people">
              <CardContainer />
            </div>
          }
        />
        <Route exact path='/vehicle'
          render={ () =>
            <div className="vehicle">
              <CardContainer />
            </div>
          }
        />
        <Route exact path='/planet'
          render={ () =>
            <div className="planet">
              <CardContainer />
            </div>
          }
        />
        <p>SWAPI BOX!</p>
        <People />
      </div>
    );
  }
}

export default App;
