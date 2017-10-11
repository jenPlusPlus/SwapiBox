import React from 'react'
import Button from './Button/Button'

const Header = ({getPlanets, getVehicles}) => {

  return (
    <div>
      <Button  buttonTitle={'People'}/>
      <Button buttonAction={getPlanets} buttonTitle={'Planets'}/>
      <Button buttonAction={getVehicles} buttonTitle={'Vehicles'}/>
    </div>
  );
};

export default Header;
