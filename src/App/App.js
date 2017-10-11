import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import CardContainer from './CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      vehicles: []
    };
  }

  componentDidMount() {
    this.getPlanets();
    this.getVehicles();
  }

  getPlanets() {
    fetch('https://swapi.co/api/planets/')
      .then(response => response.json())
      .then(planetData => {
        return planetData.results;
      })
      .then(planetArray => {
        let resolvedResidents;
        let resolvedPlanetArray;
        resolvedPlanetArray = planetArray.reduce( (acc, planet) => {
          const unResolvedResidentPromises = planet.residents.
            map( residentURL => {
              return fetch(residentURL)
                .then(result => result.json())
                .then(jsonResult => jsonResult.name);
            });
          const promiseAll = Promise.all(unResolvedResidentPromises);
          const finishedPromise = promiseAll.then( residentData => {
            resolvedResidents = Object
              .assign({}, planet, {residents: residentData});
            return resolvedResidents;
          });
          acc.push(finishedPromise);
          return acc;
        }, []);
        return resolvedPlanetArray;
      })
      .then(finalPlanetArray => {
        Promise.all(finalPlanetArray)
          .then(dataSet => {
            const forState = dataSet.map(planetObject=>{
              return planetObject;
            });
            this.setState({
              planets: forState
            });
          });
      });
  }

  getVehicles() {
    fetch('https://swapi.co/api/vehicles/')
      .then(response => response.json())
      .then(vehicleArray => vehicleArray.results.map( vehicle => {
        return {
          name: vehicle.name,
          model: vehicle.model,
          class: vehicle.vehicle_class,
          numPassengers: vehicle.passengers};
      }))
      .then(cleanedVehicleArray => {
        this.setState({
          vehicles: cleanedVehicleArray
        });
      });
  }

  render() {
    return (
      <div className="App">
        {/* <Header />
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
        <People /> */}
      </div>
    );
  }
}

export default App;
