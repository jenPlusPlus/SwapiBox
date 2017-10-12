import React from 'react'

const Button = ({ buttonTitle, isActive }) => {
  if (isActive) {
    return (
      <div className="button-wrapper">
        <a href={`/${buttonTitle.toLowerCase()}`}>
          <button className='active'>
            {buttonTitle}
          </button>
        </a>
      </div>
    );
  } else {
    return (
      <div className="button-wrapper">
        <a href={`/${buttonTitle.toLowerCase()}`}>
          <button className='button-inactive'>
            {buttonTitle}
          </button>
        </a>
      </div>
    );
  }
};

export default Button;
