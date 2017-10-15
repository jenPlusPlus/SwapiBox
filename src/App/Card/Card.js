import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ cardData, cardType, updateFavorites, isFavorite }) => {


  if (cardData.cardType === 'people') {
    let mappedSpecies;
    if (cardData.species.length > 0) {
      mappedSpecies = cardData.species.map((species, index) => {
        return <li className='value' key={index + Date.now()}>{species}</li>;
      });
    } else {
      mappedSpecies = <span className='value'>Unknown</span>;
    }
    return (
      <div className='card'>
        <div className='card-title'>
          <h3 className='people-name card-name'>
            {cardData.name}</h3>
          <div className={`favorite ${isFavorite}`}
            onClick={updateFavorites.bind(this, cardData)}></div>
        </div>
        <div className='card-info'>
          <p className='people-homeworld label'>Homeworld:
            <span className='value'> {cardData.homeworld}</span></p>
          <div className='people-species'>
            <ul><span className='label'>Species: </span>{mappedSpecies}</ul>
          </div>
          <p className='people-homeworld-population label'>Homeworld Population:
            <span className='value'> {cardData.homeworldPopulation}</span></p>
        </div>
      </div>
    );
  } else if (cardData.cardType === 'vehicles') {
    return (
      <div className='card'>
        <div className='card-title'>
          <h3 className='vehicles-name card-name'>
            {cardData.name}</h3>
          <div className={`favorite ${isFavorite}`}
            onClick={updateFavorites.bind(this, cardData)}></div>
        </div>
        <div className='card-info'>
          <p className='vehicles-model label'>Model:
            <span className='value'> {cardData.model}</span>
          </p>
          <p className='vehicles-class label'>Class:
            <span className='value'> {cardData.class}</span>
          </p>
          <p className='vehicles-num-passengers label'>Number of Passengers:
            <span className='value'> {cardData.numPassengers}</span></p>
        </div>
      </div>
    );
  } else if (cardData.cardType === 'planets') {
    let mappedResidents;
    if (cardData.residents.length > 0) {
      mappedResidents = cardData.residents.map((resident, index) => {
        return <li className='value' key={index + Date.now()}>{resident}</li>;
      });
    } else {
      mappedResidents = <span className='value'>Unknown</span>;
    }
    return (
      <div className='card'>
        <div className='card-title'>
          <h3 className='planets-name card-name'>
            {cardData.name}</h3>
          <div className={`favorite ${isFavorite}`}
            onClick={updateFavorites.bind(this, cardData)}></div>
        </div>
        <div className='card-info'>
          <p className='planets-terrain label'>Terrain:
            <span className='value'> {cardData.terrain}</span></p>
          <p className='planets-population label'>Population:
            <span className='value'> {cardData.population}</span></p>
          <p className='planets-climate label'>Climate:
            <span className='value'> { cardData.climate}</span></p>
          <div className='planets-residents'>
            <ul><span className='label'>Residents: </span>
              <div className='residents-list-container'>{mappedResidents}
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

Card.propTypes = {
  cardData: PropTypes.object,
  cardType: PropTypes.string,
  updateFavorites: PropTypes.func,
  isFavorite: PropTypes.string
};
export default Card;
