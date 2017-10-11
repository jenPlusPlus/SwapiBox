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
      people: [],
      planets: [],
      vehicles: [],
      film:{}
    };
    this.getVehicles = this.getVehicles.bind(this);
    this.getPlanets = this.getPlanets.bind(this);
    this.getPeople =this.getPeople.bind(this);
  }

  componentDidMount() {
    this.getFilm();

  }

  getPeople() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(peopleData => {
        return peopleData.results;
      })
      .then(peopleArray => {
        const peopleArrayToResolve = [];
        let peopleWithHomeworld = peopleArray.map(person => {
          return fetch(person.homeworld)
            .then(result => result.json())
            .then(jsonResult =>
              Object.assign({}, person, {homeworld: jsonResult.name},
                {population: jsonResult.population})
            );
        });

        const resolvedPeopleArray = Promise.all(peopleWithHomeworld)
          .then(promiseResult => {
            const finalPeopleArray = promiseResult.reduce( (acc, person) => {
              const unresolvedSpeciesPromises = person.species
                .map( speciesURL => {
                  return fetch(speciesURL)
                    .then(result => result.json())
                    .then(jsonResult => jsonResult.name);
                });
              const promiseSpecies = Promise.all(unresolvedSpeciesPromises);
              const finishedSpecies = promiseSpecies
                .then( speciesData => {
                  const resolvedSpecies = Object
                    .assign({}, person, {species: speciesData});
                  return resolvedSpecies;
                });
              acc.push(finishedSpecies);
              return acc;
            }, []);
            return finalPeopleArray;
          }).then(finalPeopleArray => {
            Promise.all(finalPeopleArray)
              .then(dataSet => {
                const forState = dataSet.map(personObject=>{
                  return personObject;
                });
                this.setState({
                  people: forState
                });
              });
          });
      });
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
    const allData= this.state;
    return (
      <div className="top-app-wrapper">

        <Route exact path='/'
          render={ () =>
            <div className="home-message">
              <Header getPlanets={this.getPlanets}
                getVehicles={this.getVehicles}
                getPeople={this.getPeople}/>
              <SideBar {... allData} />
              <CardContainer {...allData}/>
            </div>
          }
        />
        <Route exact path='/people'
          render={ () =>
            <div className="people">
              <Header getPlanets={this.getPlanets}
                getVehicles={this.getVehicles}/>
              <SideBar {... allData} />
              <CardContainer {...allData}/>
            </div>
          }
        />
        <Route exact path='/vehicle'
          render={ () =>
            <div className="vehicle">
              <Header getPlanets={this.getPlanets}
                getVehicles={this.getVehicles}/>
              <SideBar {... allData} />
              <CardContainer {...allData}/>
            </div>
          }
        />
        <Route exact path='/planet'
          render={ () =>
            <div className="planet">
              <Header getPlanets={this.getPlanets}
                getVehicles={this.getVehicles}/>
              <SideBar {... allData} />
              <CardContainer {...allData}/>
            </div>
          }
        />
        <p>SWAPI BOX!</p>
      </div>
    );
  }
}



{/* <div className="App">
  <Header getPlanets={this.getPlanets}
    getVehicles={this.getVehicles}/>
  <SideBar {... allData} />
  <CardContainer {...allData}/>
</div> */}
export default App;
