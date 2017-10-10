import React, { Component } from 'react';

class People extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        name: '',
        homeworld: '',
        species: '',
        population: null
      }
    };
  }
  componentDidMount() {
    let name = '';
    let species = '';
    let speciesURL = '';
    let homeworld = '';
    let homeworldURL = '';
    let population = null;
    let populationURL = '';
    
    const personPromise = fetch('https://swapi.co/api/people/1/')
      .then((response) => response.json()) // Transform the data into json
      .then((jsonResponse) => {
        speciesURL = jsonResponse.species[0];
        homeworldURL = jsonResponse.homeworld;
        console.log('speciesURL: ', speciesURL);
        console.log('homeworldURL: ', homeworldURL);
        name = jsonResponse.name;

        const homeworldPromise = fetch(homeworldURL)
          .then((response) => response.json()) // Transform the data into json
          .then((jsonResponse) => {
            homeworld = jsonResponse.name;
            console.log('homeworld', homeworld);
          })
          .catch((error) => {
            alert(error);
          // console.log('API ERROR: ', error);
          });

        const speciesPromise = fetch(speciesURL)
          .then((response) => response.json()) // Transform the data into json
          .then((jsonResponse) => species = jsonResponse.name)
          .catch((error) => {
            alert(error);
          // console.log('API ERROR: ', error);
          });

        this.setState( {person:
                    {name: name,
                      species: species,
                      homeworld: homeworld,
                      population: population}});

      })
      .catch((error) => {
        alert('PERSON ERROR!!');
        // console.log('API ERROR: ', error);
      });

    // const homeworldPromise = fetch(homeworldURL)
    //   .then((response) => response.json()) // Transform the data into json
    //   .then((jsonResponse) => {
    //     this.setState( {person: {homeworld: jsonResponse.name}});
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   // console.log('API ERROR: ', error);
    //   });


    // const speciesPromise = fetch(speciesURL)
    //   .then((response) => response.json()) // Transform the data into json
    //   .then((jsonResponse) => this.setState( {person: {species: jsonResponse}}))
    //   .catch((error) => {
    //     alert(error);
    //   // console.log('API ERROR: ', error);
    //   });
  }
  render() {
    return (
      <div className="API">
        <p>Name: {this.state.person.name}</p>
        <p>Homeworld: {this.state.person.homeworld}</p>
        <p>Species: {this.state.person.species}</p>
        <p>Population of homeworld: {this.state.person.population}</p>
      </div>
    );
  }
}

export default People;
