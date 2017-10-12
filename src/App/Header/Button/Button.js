import React from 'react'

const Button = ({ buttonTitle, isActive, numFavorites }) => {
  if (isActive) {
    return (
      <div>
        <a href={`/${buttonTitle.toLowerCase()}`}>
          <button className='active'>
            {buttonTitle}
          </button>
        </a>
      </div>
    );
  } else {
    if (buttonTitle === 'Favorites') {
      return (
        <div>
          <a href={`/${buttonTitle.toLowerCase()}`}>
            <button>
              {buttonTitle}
              <span> : </span>
              {numFavorites}
            </button>
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <a href={`/${buttonTitle.toLowerCase()}`}>
            <button>
              {buttonTitle}
            </button>
          </a>
        </div>
      );
    }
  }
};

export default Button;
