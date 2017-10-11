import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';

const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
