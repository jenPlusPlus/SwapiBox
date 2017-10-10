import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import CardContainer from './CardContainer/CardContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      planets: [],
    }
  }

  componentDidMount() {
    this.getPlanets();
  }

  getPlanets() {
    fetch('https://swapi.co/api/planets/')
      .then(response => response.json())
      .then(planetData => {
        console.log('planetData.results: ', planetData.results);
        return planetData.results
        })
        .then(planetArray => {
          return planetArray.map( planet => {
            const unResolvedResidentPromises = planet.residents.map( residentURL => {
              return fetch(residentURL)
              .then(result => result.json())
              .then(jsonResult => jsonResult.name)
            });
            const promiseAll = Promise.all(unResolvedResidentPromises);
            promiseAll.then( residentData => {
              return Object.assign({}, planet, {residents: residentData})
            })
          });

        })
        .then(finalPlanetArray => {
          this.setState({
            planets: finalPlanetArray
          })
        })


  }

  // compnentDidMount(){
  //   fetch('http://localhost:3001/api/frontend-staff')
  //   .then(res => res.json())
  //   .then(staffData => staffData.bio)
  //   .then(staffArray => {
  //     const unResovedPromises = staffArray.map(member => {
  //       return fetch(member.info).then(res => res.json())
  //     })
  //     const promiseAll = Promise.all(unResovedPromises)
  //     promiseAll.then(data => {
  //       const finalArray = data.map((bio, i) => {
  //         return Object.assign({}, bio, staffArray[i])
  //       })
  //       this.setState({
  //         staff: finalArray
  //       })
  //     })
  //   })
  // }

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
