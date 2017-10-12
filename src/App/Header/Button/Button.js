import React from 'react'

const Button = ({ buttonTitle, buttonAction}) => {
  return (
    <div>
      <a href={`/${buttonTitle.toLowerCase()}`}>
        <button>
          {buttonTitle}
        </button>
      </a>
    </div>
  );
};

export default Button;
