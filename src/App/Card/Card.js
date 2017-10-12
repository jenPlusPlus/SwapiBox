import React from 'react';

const Card = ({ cardData, cardType, updateFavorites }) => {


  if (cardData.cardType === 'people') {
    let mappedSpecies;
    if (cardData.species.length > 0) {
      mappedSpecies = cardData.species.map((species, index) => {
        return <li key={index + Date.now()}>{species}</li>;
      });
    } else {
      mappedSpecies = <span>Unknown</span>;
    }
    return (
      <div className='card'>
        <h3 className='people-name card-name'>
          Name: <span>{cardData.name}</span></h3>
        <button className='favorite' onClick={updateFavorites.bind(this, cardData)}>Fave</button>
        <p className='people-homeworld'>Homeworld:
          <span>{cardData.homeworld}</span></p>
        <p className='people-species'>Species: <ul>{mappedSpecies}</ul></p>
        <p className='people-homeworld-population'>Homeworld Population:
          <span>{cardData.homeworldPopulation}</span></p>
      </div>
    );
  } else if (cardData.cardType === 'vehicles') {
    return (
      <div className='card'>
        <h3 className='vehicles-name card-name'>
          Name: <span>{cardData.name}</span></h3>
        <button className='favorite' onClick={updateFavorites.bind(this, cardData)}>Fave</button>
        <p className='vehicles-model'>Model: <span>{cardData.model}</span></p>
        <p className='vehicles-class'>Class: <span>{cardData.class}</span></p>
        <p className='vehicles-num-passengers'>Number of Passengers:
          <span>{cardData.numPassengers}</span></p>
      </div>
    );
  } else if (cardData.cardType === 'planets') {
    let mappedResidents;
    if (cardData.residents.length > 0) {
      mappedResidents = cardData.residents.map((resident, index) => {
        return <span key={index + Date.now()}>{resident}</span>;
      });
    } else {
      mappedResidents = <span>Unknown</span>;
    }
    return (
      <div className='card'>
        <h3 className='planets-name card-name'>
          Name: <span>{cardData.name}</span></h3>
        <button className='favorite' onClick={updateFavorites.bind(this, cardData)}>Fave</button>
        <span className='planets-terrain label'>Terrain:
          <br />
          <span className='value'>{cardData.terrain}</span></span>
        <span className='planets-population label'>Population:
          <br />
          <span className='value'>{cardData.population}</span></span>
        <span className='planets-climate label'>Climate:
          <br />
          <span className='value'>{cardData.climate}</span></span>
        <span className='planets-residents label'>Residents:
          <ul className='value'>{mappedResidents}</ul></span>
      </div>
    );
  }
};

export default Card;
