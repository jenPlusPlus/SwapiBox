import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import CardContainer from './CardContainer/CardContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      planets: []
    }
  }

  componentDidMount() {
   this.getPlanets();
 }

 getPlanets() {
   fetch('https://swapi.co/api/planets/')
     .then(response => response.json())
     .then(returnData => {
       const planets = returnData.results.map((planet, index) => {
         return Object.assign({}, {name: planet.name,
                            Terrain: planet.terrain,
                            Population: planet.population,
                            Climate: planet.climate,
                            residents: planet.residents});
       });
       return planets;
     })
     .then(planetArray => planetArray.reduce((acc, planet) => {
       let updatedPlanet
       if(planet.residents.length){
         if(planet.residents.length){
        const namesArray = planet.residents.map( residentURL => {
           return fetch(residentURL)
           .then(resp => resp.json())
           .then(newResponse =>
             newResponse.name)
         })
         const resolvedNamesArray = Promise.all(namesArray)
         const namesForPlanetObject = resolvedNamesArray.then(
           names => names.map(name=>{
             return name
           })
         )
         console.log(resolvedNamesArray);
         updatedPlanet = Object.assign({}, planet, {residents: namesForPlanetObject})
       } }
       else{
         updatedPlanet = Object.assign({}, planet, {residents: []})
       }
         acc.push(updatedPlanet)
         return acc
     }, [] ))
     .then( finalPlanetArray =>{
       this.setState({
         planets: finalPlanetArray
       })
     })


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
        <p>SWAPI BOX!</p> */}
      </div>
    );
  }
}

export default App;
