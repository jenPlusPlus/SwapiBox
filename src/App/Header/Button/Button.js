import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ buttonTitle, buttonIsOn, numFavorites, apiCall }) => {
  if (buttonIsOn) {
    if (buttonTitle === 'Favorites') {
      return (
        <div className="button-wrapper">
          <Link to={`/${buttonTitle.toLowerCase()}`}
            onClick={apiCall} className={`${buttonTitle}-button`}>
            <button className={`button active`}>
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
          <Link to={`/${buttonTitle.toLowerCase()}`} >
            <button className={`button active ${buttonTitle}-button`}>
              {buttonTitle}
            </button>
          </Link>
        </div>
      );
    }
  }  else {
    if (buttonTitle === 'Favorites') {
      return (
        <div className="button-wrapper">
          <Link to={`/${buttonTitle.toLowerCase()}`} >
            <button className={`button button-inactive ${buttonTitle}-button`}>
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
          <Link to={`/${buttonTitle.toLowerCase()}`}
            onClick={apiCall} className={`${buttonTitle}-button`}>
            <button className={`button button-inactive`}>
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
  buttonIsOn: PropTypes.bool,
  numFavorites: PropTypes.number,
  apiCall: PropTypes.func
};


export default Button;
