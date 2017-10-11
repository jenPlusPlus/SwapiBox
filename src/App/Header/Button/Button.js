import React from 'react'

const Header = ({getPlanets, getVehicles, buttonTitle, buttonAction}) => {
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
