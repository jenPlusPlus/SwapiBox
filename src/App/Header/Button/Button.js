import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonTitle, isActive, numFavorites }) => {
  if (isActive) {
    return (
      <div className="button-wrapper">
        <a href={`/${buttonTitle.toLowerCase()}`}>
          <button className='active button'>
            {buttonTitle}
          </button>
        </a>
      </div>
    );
  } else {

    if (buttonTitle === 'Favorites') {
      return (
        <div className="button-wrapper">
          <a href={`/${buttonTitle.toLowerCase()}`}>
            <button className="button button-inactive">
              {buttonTitle}
              <span> : </span>
              {numFavorites}
            </button>
          </a>
        </div>
      );
    } else {
      return (
        <div className="button-wrapper">
          <a href={`/${buttonTitle.toLowerCase()}`}>
            <button className="button button-inactive">
              {buttonTitle}
            </button>
          </a>
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

export default Button;
