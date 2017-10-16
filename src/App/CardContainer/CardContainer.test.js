import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import fetchMock from 'fetch-mock';
import renderer from 'react-test-renderer';
import { withRouter } from 'react-router';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Route } from 'react-router-dom';

describe('CardContainer', () => {
  const mkFun = jest.fn();
  let wrapper = shallow(<CardContainer cardData={[{
    cardType: "people",
    homeworld:"Tatooine",
    homeworldPopulation: "200000",
    name: "Luke Skywalker",
    species:["Human"]
  }]}
    cardType={'people'}
    updatedFavorites={mkFun}
    numFavorites={1}
    favorites={[{
      cardType: "people",
      homeworld:"Tatooine",
      homeworldPopulation: "200000",
      name: "Luke Skywalker",
      species:["Human"]
    }]}
    makeAPICall={mkFun}
                        />);

  it('should match the Card snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
