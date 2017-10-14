import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fetchMock from 'fetch-mock';
import renderer from 'react-test-renderer';
import { withRouter } from 'react-router';
import { shallow, mount, render } from 'enzyme';
import { BrowserRouter as Router, Route } from 'react-router-dom';


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
      homeworld: "Tatooine",
      homeworldPopulation: "200000",
      name: "Luke Skywalker",
      species:["Human"]
    }]
  };

  const mockVehicles = {
    results: [{
      class: "wheeled",
      model:  "Digger Crawler",
      name: "Sand Crawler",
      numPassengers: "30"
    }]
  };

  const mockPlanets = {
    results: [{
      climate: "temperate",
      name: "Alderaan",
      population: "2000000000",
      residents:["Leia Organa",
        "Bail Prestor Organa",
        "Raymus Antilles"],
      terrain: "grasslands, mountains"
    }]
  };

  const mockSpecies = {
    name: "Wookie"
  };

  const mockFilms = [{
    releaseDate: "2002-05-16",
    scrollText: "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Co…",
    title: "Attack of the Clones"
  }];

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
    body: mockPeople
  });

  fetchMock.get('https://swapi.co/api/people/68/', {
    status: 200,
    body: mockPeople
  });

  fetchMock.get('https://swapi.co/api/people/81/', {
    status: 200,
    body: mockPeople
  });

  fetchMock.get('https://swapi.co/api/people/26/', {
    status: 200,
    body: mockPeople
  });

  fetchMock.get('https://swapi.co/api/people/30/', {
    status: 200,
    body: mockPeople
  });

  fetchMock.get('https://swapi.co/api/people/3/', {
    status: 200,
    body: mockPeople
  });

  fetchMock.get('https://swapi.co/api/people/34/', {
    status: 200,
    body: mockPeople
  });

  fetchMock.get('https://swapi.co/api/people/55/', {
    status: 200,
    body: mockPeople
  });

  fetchMock.get('https://swapi.co/api/people/74/', {
    status: 200,
    body: mockPeople
  });

  fetchMock.get('https://swapi.co/api/people/74/', {
    status: 200,
    body: mockPeople
  });

  fetchMock.get('https://swapi.co/api/people/72/', {
    status: 200,
    body: mockPeople
  });

  fetchMock.get('https://swapi.co/api/people/73/', {
    status: 200,
    body: mockPeople
  });

  fetchMock.get('https://swapi.co/api/people/63/', {
    status: 200,
    body: mockPeople
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
    body: mockPlanets
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
    body: mockPlanets
  });

  fetchMock.get('https://swapi.co/api/planets/20/', {
    status: 200,
    body: mockPlanets
  });



  afterEach(() => {
    // expect(fetchMock.calls().unmatched).toEqual([]);
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
    ReactDOM.render(<Router history={history}><App />
    </Router>, div);
  });

  it('Sets state with data after component mounts', async () => {
    const wrapper = mount(<Router history={history}><App />
    </Router>);
    const peopleButton =wrapper.find('.People-button');

    await pause();
    expect(wrapper.state().people).toEqual([]);

    peopleButton.simulate('click');

    await pause();
    expect(wrapper.state().people).toEqual(mockPeople.results);

  });

  it('Sets state with data after component mounts', async () => {
    const wrapper = mount(<Router history={history}><App />
    </Router>);
    const vehiclesButton =wrapper.find('.Vehicles-button');

    await pause();
    expect(wrapper.state().vehicles).toEqual([]);

    vehiclesButton.simulate('click');

    await pause();
    expect(wrapper.state().vehicles).toEqual(mockVehicles.results);
  });

  it('Sets state with data after component mounts', async () => {
    const wrapper = mount(<Router history={history}><App />
    </Router>);
    const planetsButton =wrapper.find('.Planets-button');

    await pause();
    expect(wrapper.state().planets).toEqual([]);

    planetsButton.simulate('click');

    await pause();
    expect(wrapper.state().planets).toEqual(mockPlanets.results);
  });


  it('Sets state with data after component mounts', async () => {
    const wrapper = mount(<Router history={history}><App />
    </Router>);
    await pause();
    expect(wrapper.state().film).toEqual(mockFilms);
  });

});
