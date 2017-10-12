import React from 'react';

const Card = ({ cardData, cardType }) => {
  if (cardType === 'people') {
    return (
      <div className='card'>
        <h3 className='people-name'>Name: <span>{cardData.name}</span></h3>
        <p className='people-homeworld'>Homeworld: <span>{cardData.homeworld}</span></p>
        <p className='people-species'>Species: <span>{cardData.species}</span></p>
        <p className='people-homeworld-population'>Homeworld Population: <span>{cardData.homeworldPopulation}</span></p>
      </div>
    );
  } else if (cardType === 'vehicles') {
    return (
      <div className='card'>
        <h3 className='vehicles-name'>Name: <span>{cardData.name}</span></h3>
        <p className='vehicles-model'>Model: <span>{cardData.model}</span></p>
        <p className='vehicles-class'>Class: <span>{cardData.class}</span></p>
        <p className='vehicles-num-passengers'>Number of Passengers: <span>{cardData.numPassengers}</span></p>
      </div>
    );
  } else if (cardType === 'planets') {
    return (
      <div className='card'>
        <h3 className='planets-name'>Name: <span>{cardData.name}</span></h3>
        <p className='planets-terrain'>Terrain: <span>{cardData.terrain}</span></p>
        <p className='planets-population'>Population: <span>{cardData.population}</span></p>
        <p className='planets-climate'>Climate: <span>{cardData.climate}</span></p>
        <p className='planets-residents'>Residents: <span>{cardData.residents}</span></p>
      </div>
    );
  }
};

export default Card;
