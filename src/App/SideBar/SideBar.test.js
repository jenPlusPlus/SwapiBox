import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './SideBar';
import fetchMock from 'fetch-mock';
import renderer from 'react-test-renderer';
import { withRouter } from 'react-router';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Route } from 'react-router-dom';

describe('SideBar', () => {
  const mkFun = jest.fn();
  let wrapper = shallow(<SideBar film={{
                          releaseDate: "2002-05-16",
                          scrollText: "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Co…",
                          title: "Attack of the Clones"
  }}


                              />);

it('should match the Card snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
