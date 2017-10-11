import React from 'react'

const Header = ({getPlanets, getVehicles}) => {
  const planetClickHandle = () => {
    getPlanets();
  };

  const vehiclesClickHandle = () => {
    getVehicles();
  };
  return (
    <div>
      <button>
      People
      </button>
      <button onClick={planetClickHandle}>
      Planets
      </button>
      <button onClick={vehiclesClickHandle}>
      Vehicles
      </button>
    </div>
  );
};

export default Header;
