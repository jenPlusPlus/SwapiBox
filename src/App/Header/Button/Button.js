import React from 'react'

const Header = ({getPlanets, getVehicles, buttonTitle, buttonAction}) => {
  return (
    <div>
      <button onClick={buttonAction}>
        {buttonTitle}
      </button>
    </div>
  );
};

export default Header;
