import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import fetchMock from 'fetch-mock';
import renderer from 'react-test-renderer';
import { withRouter } from 'react-router';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Route } from 'react-router-dom';

describe('CARD', () => {
  const mkFun = jest.fn();
  let wrapper = shallow(<Button
                          isActive={false}
                          buttonTitle={'Favorites'}
                          numFavorites={0}
                          apiCall={mkFun}
                              />);

it('should match the Card snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
