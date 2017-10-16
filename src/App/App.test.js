import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fetchMock from 'fetch-mock';
import renderer from 'react-test-renderer';
import { Route } from 'react-router';
import { shallow, mount, render } from 'enzyme';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';


describe('App', () => {

  class LocalStorageMock {
    constructor() {
      this.store = {};
    }

    clear() {
      this.store = {};
    }

    getItem(key) {
      return this.store[key] || null;
    }

    setItem(key, value) {
      this.store[key] = value.toString();
    }

    removeItem(key) {
      delete this.store[key];
    }
  }

  global.localStorage = new LocalStorageMock;

  const mockPeople = {
    results: [{
      homeworld: "https://swapi.co/api/planets/1/",
      name: "Luke Skywalker",
      species:["https://swapi.co/api/species/1/"]
    }]
  };

  const mockPerson = {
    name: "Luke Skywalker",
    homeworld: "https://swapi.co/api/planets/1/",
    species: [
      "https://swapi.co/api/species/1/"
    ]
  };

  const mockVehicles = {
    results: [{
      vehicle_class: "wheeled",
      model:  "Digger Crawler",
      name: "Sand Crawler",
      passengers: "30"
    }]
  };

  const mockPlanets = {
    results: [{
      climate: "Arid",
      name: "Tatooine",
      population: "120000",
      residents:["https://swapi.co/api/people/1/"],
      terrain: "desert"
    }]
  };

  const mockPlanet = {
    name: "Yavin IV",
    climate: "temperate, tropical",
    terrain: "jungle, rainforests",
    population: "1000",
    residents: []
  };

  const mockSpecies = {
    name: "Human"
  };

  const mockFilms = {
    release_date: "2002-05-16",
    opening_crawl: "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Co…",
    title: "Attack of the Clones"
  };

    //film
  fetchMock.get('https://swapi.co/api/films/1', {
    status: 200,
    body: mockFilms
  });

  fetchMock.get('https://swapi.co/api/films/2', {
    status: 200,
    body: mockFilms
  });

  fetchMock.get('https://swapi.co/api/films/3', {
    status: 200,
    body: mockFilms
  });

  fetchMock.get('https://swapi.co/api/films/4', {
    status: 200,
    body: mockFilms
  });

  fetchMock.get('https://swapi.co/api/films/5', {
    status: 200,
    body: mockFilms
  });

  fetchMock.get('https://swapi.co/api/films/6', {
    status: 200,
    body: mockFilms
  });

  fetchMock.get('https://swapi.co/api/films/7', {
    status: 200,
    body: mockFilms
  });

  // planets
  fetchMock.get('https://swapi.co/api/planets/', {
    status: 200,
    body: mockPlanets
  });

  // people
  fetchMock.get('https://swapi.co/api/people/5/', {
    status: 200,
    body: mockPerson
  });

  fetchMock.get('https://swapi.co/api/people/68/', {
    status: 200,
    body: mockPerson
  });

  fetchMock.get('https://swapi.co/api/people/81/', {
    status: 200,
    body: mockPerson
  });

  fetchMock.get('https://swapi.co/api/people/26/', {
    status: 200,
    body: mockPerson
  });

  fetchMock.get('https://swapi.co/api/people/30/', {
    status: 200,
    body: mockPerson
  });

  fetchMock.get('https://swapi.co/api/people/3/', {
    status: 200,
    body: mockPerson
  });

  fetchMock.get('https://swapi.co/api/people/34/', {
    status: 200,
    body: mockPerson
  });

  fetchMock.get('https://swapi.co/api/people/55/', {
    status: 200,
    body: mockPerson
  });

  fetchMock.get('https://swapi.co/api/people/74/', {
    status: 200,
    body: mockPerson
  });

  fetchMock.get('https://swapi.co/api/people/74/', {
    status: 200,
    body: mockPerson
  });

  fetchMock.get('https://swapi.co/api/people/72/', {
    status: 200,
    body: mockPerson
  });

  fetchMock.get('https://swapi.co/api/people/73/', {
    status: 200,
    body: mockPerson
  });

  fetchMock.get('https://swapi.co/api/people/1/', {
    status: 200,
    body: mockPerson
  });

  fetchMock.get('https://swapi.co/api/people/63/', {
    status: 200,
    body: mockPerson
  });

  // vehicles
  fetchMock.get('https://swapi.co/api/vehicles/', {
    status: 200,
    body: mockVehicles
  });

  fetchMock.get('https://swapi.co/api/people/', {
    status: 200,
    body: mockPeople
  });

  //planets
  fetchMock.get('https://swapi.co/api/planets/1/', {
    status: 200,
    body: mockPlanet
  });

  fetchMock.get('https://swapi.co/api/species/1/', {
    status: 200,
    body: mockSpecies
  });

  fetchMock.get('https://swapi.co/api/species/2/', {
    status: 200,
    body: mockSpecies
  });

  fetchMock.get('https://swapi.co/api/planets/8/', {
    status: 200,
    body: mockPlanet
  });

  fetchMock.get('https://swapi.co/api/planets/20/', {
    status: 200,
    body: mockPlanet
  });

  const expectedPeopleState = [{
    cardType: "people",
    homeworld: "Tatooine",
    homeworldPopulation: "200000",
    name: "Luke Skywalker",
    species: ["Human"]
  }];

  const expectedPlanetState = [{
    cardType: "planets",
    climate: "temperate, tropical",
    name: "Yavin IV",
    population: "1000",
    residents: [],
    terrain: "jungle, rainforests"
  }];

  const expectedVehicleState = [{
    cardType: "vehicles",
    class: "wheeled",
    model: "Digger Crawler",
    name: "Sand Crawler",
    numPassengers: "30"
  }];

  const expectedFilmState = {
    releaseDate: "2002-05-16",
    scrollText: "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Co…",
    title: "Attack of the Clones"
  };

  const history = createHistory();

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });


  const pause = () => {
    return new Promise(res => {
      setTimeout(() => {
        res();
      });
    });
  };


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('Sets state with people data after going to /people page', async () => {
    const app = mount(<App />);
    await pause();

    expect(app.state('people')).toEqual([]);
    const linkToPeople = app.find('Link').at(1).find('a');

    linkToPeople.simulate('click');

    await pause();

    expect(app.state('people')).toEqual(expectedPeopleState);

  });

  it('Sets state with planet data after going to /planets page', async () => {
    const app = mount(<App />);
    await pause();

    expect(app.state('planets')).toEqual([]);
    const linkToPlanets = app.find('Link').at(2).find('a');

    linkToPlanets.simulate('click');

    await pause();

    expect(app.state('planets')).toEqual(expectedPlanetState);

  });

  it('Sets state with vehicle data after going to /vehicles page', async () => {
    const app = mount(<App />);
    await pause();

    expect(app.state('vehicles')).toEqual([]);
    const linkToVehicles = app.find('Link').at(3).find('a');

    linkToVehicles.simulate('click');

    await pause();

    expect(app.state('vehicles')).toEqual(expectedVehicleState);

  });


  it('Sets state with data after component mounts', async () => {
    const app = mount(<App />);
    await pause();
    expect(app.state('film')).toEqual(expectedFilmState);
  });

});
