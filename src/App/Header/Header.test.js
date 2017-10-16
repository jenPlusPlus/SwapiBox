import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import fetchMock from 'fetch-mock';
import renderer from 'react-test-renderer';
import { withRouter } from 'react-router';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Route } from 'react-router-dom';

describe('Header', () => {
  const mkFun = jest.fn();
  let wrapper = shallow(
    <Header
      activeButton={'people'}
      numFavorites={1}
      getPeople={mkFun}
      getPlanets={mkFun}
      getVehicles={mkFun}
    />);

  it('should match the Card snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
