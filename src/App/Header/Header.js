import React from 'react'

const Header = ({getPlanets, getVehicles}) => {
  return (
    <div>
      <button>
      People
      </button>
      <button onClick={getPlanets}>
      Planets
      </button>
      <button onClick={getVehicles}>
      Vehicles
      </button>
    </div>
  );
};

export default Header;
