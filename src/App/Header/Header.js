import React from 'react';
import Button from './Button/Button';
import PropTypes from 'prop-types';

const Header = ({ buttonIsOn, numFavorites,
  getPeople, getPlanets, getVehicles}) => {
  const peopleButtonTitle = 'People';
  const planetsButtonTitle = 'Planets';
  const vehiclesButtonTitle = 'Vehicles';
  const favoritesButtonTitle = 'Favorites';

  return (
    <div className="header">

      <Button  buttonIsOn={favoritesButtonTitle === buttonIsOn}
        buttonTitle={favoritesButtonTitle}
        numFavorites={numFavorites}/>
      <Button  buttonIsOn={peopleButtonTitle === buttonIsOn}
        buttonTitle={peopleButtonTitle}
        apiCall={getPeople}/>
      <Button  buttonIsOn={planetsButtonTitle === buttonIsOn}
        buttonTitle={planetsButtonTitle}
        apiCall={getPlanets}/>
      <Button  buttonIsOn={vehiclesButtonTitle === buttonIsOn}
        buttonTitle={vehiclesButtonTitle}
        apiCall={getVehicles}/>
    </div>
  );
};

Header.propTypes = {
  buttonIsOn: PropTypes.string,
  numFavorites: PropTypes.number,
  getPeople: PropTypes.func,
  getPlanets: PropTypes.func,
  getVehicles: PropTypes.func
};

export default Header;
