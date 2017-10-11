import React from 'react'

const Header = ({ buttonTitle, buttonAction}) => {
  console.log(buttonAction);
  return (
    <div>
      <a href={`/${buttonTitle}`}>
      <button onClick={buttonAction}>
        {buttonTitle}
      </button>
    </a>
    </div>
  );
};

export default Header;
