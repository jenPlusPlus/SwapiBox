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
      vehicles: [],
      film:{}
    };
    // console.log(this)
    this.getVehicles = this.getVehicles.bind(this);
    this.getPlanets = this.getPlanets.bind(this);
  }

  componentDidMount() {
    this.getFilm();
  }

  getPlanets() {
    fetch('https://swapi.co/api/planets/')
      .then(response => response.json())
      .then(planetData => {
        return planetData.results;
      })
      .then(planetArray => {
        const resolvedPlanetArray = planetArray.reduce( (acc, planet) => {
          const unResolvedResidentPromises = planet.residents
            .map( residentURL => {
              return fetch(residentURL)
                .then(result => result.json())
                .then(jsonResult => jsonResult.name);
            });
          const promiseResidents = Promise.all(unResolvedResidentPromises);
          const finishedPromiseResidents =
          promiseResidents.then( residentData => {
            const resolvedResidents = Object
              .assign({}, planet, {residents: residentData});
            return resolvedResidents;
          });
          acc.push(finishedPromiseResidents);
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

  getFilm(){
    const randomFilm =Math.floor(Math.random() * 7) + 1;
    fetch(`https://swapi.co/api/films/${randomFilm}`)
      .then(resultsFromAPI => resultsFromAPI.json())
      .then(filmJsonResults => {
        console.log(filmJsonResults);
        this.setState({
          film: {
            scrollText: filmJsonResults.opening_crawl,
            title: filmJsonResults.title,
            releaseDate: filmJsonResults.release_date
          }
        });
      });

  }

  render() {
    const allState= this.state;
    return (
      <div className="App">
        <Header getPlanets={this.getPlanets}
          getVehicles={this.getVehicles}/>
        <SideBar {... allState} />
      </div>
    );
  }
}

/* <Header />
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
<People /> */
export default App;
