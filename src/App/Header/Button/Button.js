import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ buttonTitle, isActive, numFavorites, apiCall }) => {
  if (isActive) {
    return (
      <div className="button-wrapper">
        <Link to={`/${buttonTitle.toLowerCase()}`} onClick={apiCall}>
          <button className='active button'>
            {buttonTitle}
          </button>
        </Link>
      </div>
    );
  } else {

    if (buttonTitle === 'Favorites') {
      return (
        <div className="button-wrapper">
          <Link to={`/${buttonTitle.toLowerCase()}`} >
            <button className="button button-inactive">
              {buttonTitle}
              <span> : </span>
              {numFavorites}
            </button>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="button-wrapper">
          <Link to={`/${buttonTitle.toLowerCase()}`} onClick={apiCall}>
            <button className="button button-inactive">
              {buttonTitle}
            </button>
          </Link>
        </div>
      );
    }
  }
};

Button.propTypes = {
  buttonTitle: PropTypes.string,
  isActive: PropTypes.boolean,
  numFavorites: PropTypes.number
};

          // <a href={`/${buttonTitle.toLowerCase()}`}>

export default Button;
