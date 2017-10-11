import React from 'react'
import Button from './Button/Button'

const Header = ({getPlanets, getVehicles, getPeople}) => {

  return (
    <div>
      <Button buttonAction={getPeople} buttonTitle={'People'}/>
      <Button buttonAction={getPlanets} buttonTitle={'Planets'}/>
      <Button buttonAction={getVehicles} buttonTitle={'Vehicles'}/>
    </div>
  );
};

export default Header;
