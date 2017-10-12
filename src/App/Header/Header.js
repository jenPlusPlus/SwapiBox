import React from 'react'
import Button from './Button/Button'

const Header = ({ activeButton }) => {
  const peopleButtonTitle = 'People';
  const planetsButtonTitle = 'Planets';
  const vehiclesButtonTitle = 'Vehicles';

  return (
    <div>
      <Button  isActive={peopleButtonTitle === activeButton} buttonTitle={peopleButtonTitle} />
      <Button  isActive={planetsButtonTitle === activeButton} buttonTitle={planetsButtonTitle} />
      <Button  isActive={vehiclesButtonTitle === activeButton} buttonTitle={vehiclesButtonTitle}/>
    </div>
  );
};

export default Header;
