import React from 'react'
import Button from './Button/Button'

const Header = ({ activeButton, numFavorites }) => {
  const peopleButtonTitle = 'People';
  const planetsButtonTitle = 'Planets';
  const vehiclesButtonTitle = 'Vehicles';

  return (
    <div className="header">
      <Button  isActive={false} buttonTitle={'Favorites'} numFavorites={numFavorites}/>
      <Button  isActive={peopleButtonTitle === activeButton} buttonTitle={peopleButtonTitle} />
      <Button  isActive={planetsButtonTitle === activeButton} buttonTitle={planetsButtonTitle} />
      <Button  isActive={vehiclesButtonTitle === activeButton} buttonTitle={vehiclesButtonTitle}/>
    </div>
  );
};

export default Header;
