import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({ cardData, cardType, updateFavorites }) => {
  const mapped = cardData.map( (item, index) => {
    return <Card cardType={cardData.cardType}
      cardData={cardData[index]}
      key={index + Date.now()}
      updateFavorites={updateFavorites}/>;
  });


  if (cardData.length <= 0 && cardType === 'favorites') {
    return (
      <div className="card-container-wrapper">
        No favorite cards found.
      </div>
    );
  } else  {
    return (
      <div className="card-container-wrapper">
        {mapped}
      </div>
    );
  }
};

CardContainer.propTypes = {
  cardData: PropTypes.array,
  cardType: PropTypes.string,
  updateFavorites: PropTypes.func
};

export default CardContainer;
