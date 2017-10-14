import React from 'react';
import Button from './Button/Button';
import PropTypes from 'prop-types';

const Header = ({ activeButton, numFavorites,
  getPeople, getPlanets, getVehicles}) => {
  const peopleButtonTitle = 'People';
  const planetsButtonTitle = 'Planets';
  const vehiclesButtonTitle = 'Vehicles';
  const favoritesButtonTitle = 'Favorites';

  return (
    <div className="header">
<<<<<<< HEAD
      <Button  isActive={false}
        buttonTitle={'Favorites'}
=======
      <Button  isActive={favoritesButtonTitle === activeButton}
        buttonTitle={favoritesButtonTitle}
>>>>>>> add active state to favorites button
        numFavorites={numFavorites}/>
      <Button  isActive={peopleButtonTitle === activeButton}
        buttonTitle={peopleButtonTitle}
        apiCall={getPeople}/>
      <Button  isActive={planetsButtonTitle === activeButton}
        buttonTitle={planetsButtonTitle}
        apiCall={getPlanets}/>
      <Button  isActive={vehiclesButtonTitle === activeButton}
        buttonTitle={vehiclesButtonTitle}
        apiCall={getVehicles}/>
    </div>
  );
};

Header.propTypes = {
  activeButton: PropTypes.string,
  numFavorites: PropTypes.number,
  getPeople: PropTypes.number,
  getPlanets: PropTypes.number,
  getVehicles: PropTypes.number
};

export default Header;
