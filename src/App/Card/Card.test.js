import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import fetchMock from 'fetch-mock';
import renderer from 'react-test-renderer';
import { withRouter } from 'react-router';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Route } from 'react-router-dom';

describe('Card', () => {
  const mkFun = jest.fn();
  let wrapper = shallow(<Card cardType={'People'}
                              cardData={{
                                cardType: "people",
                                homeworld:"Tatooine",
                                homeworldPopulation: "200000",
                                name: "Luke Skywalker",
                                species:["Human"]
                              }}
                              key={1}
                              updatedFavorites={mkFun}
                              isFavorite={''}
                              />);

it('should match the Card snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
