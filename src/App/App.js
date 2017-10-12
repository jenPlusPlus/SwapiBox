import React, { Component } from 'react';
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
      film:{},
      favorites: []
    };
    this.getVehicles = this.getVehicles.bind(this);
    this.getPlanets = this.getPlanets.bind(this);
    this.getPeople = this.getPeople.bind(this);
    this.updateFavorites = this.updateFavorites.bind(this);
  }

  componentDidMount() {
    this.getFilm();
    this.getPeople();
    this.getVehicles();
    this.getPlanets();
    this.getFavoritesFromLocalStorage();
  }

  getFavoritesFromLocalStorage() {
    if (localStorage.length > 0) {
      this.setState({
        favorites: JSON.parse(localStorage.getItem('favorites'))
      });
    }
  }

  updateFavorites(cardData) {
    let favorites = this.state.favorites;
    if (favorites.includes(cardData) === true ) {
      favorites = favorites.filter(card => {

        return card.name !== cardData.name;
      });
    } else {
      favorites.push(cardData);
    }
    this.setState( {
      favorites: favorites
    }, () => localStorage.setItem('favorites', JSON.stringify(favorites)));
  }

  getPeople() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(peopleData => {
        return peopleData.results;
      })
      .then(peopleArray => {
        let peopleWithHomeworld = peopleArray.map(person => {
          return fetch(person.homeworld)
            .then(result => result.json())
            .then(jsonResult =>
              Object.assign({}, person, {homeworld: jsonResult.name},
                {population: jsonResult.population})
            );
        });

        Promise.all(peopleWithHomeworld)
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
                this.cleanPeopleData(forState);
              });
          });
      });
  }

  cleanPeopleData(peopleDataArray) {
    const cleanedPeopleDataArray = peopleDataArray.reduce( (acc, person) => {
      acc.push({
        name: person.name,
        homeworld: person.homeworld,
        species: person.species,
        homeworldPopulation: person.population,
        cardType: 'people'
      });
      return acc;
    }, []);
    this.setState({
      people: cleanedPeopleDataArray
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
            this.cleanPlanetData(forState);
          });
      });
  }

  cleanPlanetData(planetDataArray) {
    const cleanedPlanetDataArray = planetDataArray.reduce( (acc, planet) => {
      acc.push({
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: planet.residents,
        cardType: 'planets'
      });
      return acc;
    }, []);
    this.setState( {
      planets: cleanedPlanetDataArray
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
          numPassengers: vehicle.passengers,
          cardType: 'vehicles'
        };
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
      })
      .catch(error => alert(error));
  }

  render() {
    return (

      <div className="app-wrapper-div">
        <Route exact path='/'
          render={ () =>
            <div className="home-message">
              <Header numFavorites={this.state.favorites.length}/>
              <SideBar film={this.state.film} />
              <CardContainer cardData={[]}
                updateFavorites={this.updateFavorites}
                numFavorites={this.state.favorites.length}/>
            </div>
          }
        />
        <Route exact path='/people'
          render={ () =>
            <div className="people">
              <Header activeButton={'People'}
                numFavorites={this.state.favorites.length}/>
              <SideBar film={this.state.film} />
              <CardContainer cardData={this.state.people}
                cardType={'people'}
                updateFavorites={this.updateFavorites}
                numFavorites={this.state.favorites.length} />
            </div>
          }
        />
        <Route exact path='/vehicles'
          render={ () =>
            <div className="vehicles">
              <Header activeButton={'Vehicles'}
                numFavorites={this.state.favorites.length}/>
              <SideBar film={this.state.film} />
              <CardContainer cardData={this.state.vehicles}
                cardType={'vehicles'}
                updateFavorites={this.updateFavorites}
                numFavorites={this.state.favorites.length}/>
            </div>
          }
        />
        <Route exact path='/planets'
          render={ () =>
            <div className="planets">
              <Header activeButton={'Planets'}
                numFavorites={this.state.favorites.length}/>
              <SideBar film={this.state.film} />
              <CardContainer cardData={this.state.planets}
                cardType={'planets'}
                updateFavorites={this.updateFavorites}
                numFavorites={this.state.favorites.length}/>
            </div>
          }
        />
        <Route exact path='/favorites'
          render={ () =>
            <div className="favorites">
              <Header numFavorites={this.state.favorites.length}/>
              <SideBar film={this.state.film} />
              <CardContainer cardData={this.state.favorites}
                cardType={'favorites'}
                updateFavorites={this.updateFavorites}
                numFavorites={this.state.favorites.length}/>
            </div>
          }
        />
      </div>
    );
  }
}

export default App;
