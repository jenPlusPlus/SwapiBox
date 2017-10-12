import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fetchMock from 'fetch-mock';
import renderer from 'react-test-renderer';
import { withRouter } from 'react-router';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Route } from 'react-router-dom';


describe('App', () => {

  const mockPeople = {

  };

  const mockVehicles = {

  };

  const mockPlanets = {

  }

  const mockSpecies = {

  }

  const mockFilms = {

  }

  beforeEach(() => {
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

  it.skip('Sets state with data after component mounts', async () => {

    const wrapper = mount(<App />);

    await pause();

    const groceriesOnDOM = wrapper.find('Grocery');

    expect(wrapper.state().groceries).toEqual(mockData.groceries);
    expect(groceriesOnDOM.length).toEqual(3);
  });

  it.skip('submits the correct data when adding a new grocery', async () => {
    fetchMock.post('/api/v1/groceries', {
      status: 200,
      body: mockData
    });

    const mockFn = jest.fn()

    const wrapper = mount(<AddGroceryForm updateGroceryList={ mockFn } />)

    const nameInput = wrapper.find('input[name="name"]');
    const qtyInput = wrapper.find('input[name="quantity"]');
    const formElem = wrapper.find('form');

    nameInput.simulate('change', {
      target: { name: 'name', value: 'Foo' }
    });

    qtyInput.simulate('change', {
      target: { name: 'quantity', value: '1000' }
    });

    formElem.simulate('submit');

    await pause();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

it.skip('submits the correct data when adding a new grocery', async () => {
    fetchMock.get('/api/v1/groceries', {
      status: 200,
      body: mockData2
    });

const wrapper = mount(<App />)


await pause()

fetchMock.post('/api/v1/groceries', {
  status: 200,
  body: mockData2
});


const nameInput = wrapper.find('input[name="name"]');
const qtyInput = wrapper.find('input[name="quantity"]');
const formElem = wrapper.find('input[name="quantity"]');


nameInput.simulate('change', {
  target: { name: 'name', value: 'Foo' }
});

qtyInput.simulate('change', {
  target: { name: 'quantity', value: '1000' }
});

formElem.simulate('click');

await pause()

expect(wrapper.state('groceries')).toEqual(mockData2.groceries)
});

})
