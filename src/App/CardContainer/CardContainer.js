import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({ cardData, cardType, updateFavorites, favorites }) => {

  const mapped = cardData.map( (item, index) => {

    if (favorites.filter(card => {
      return item.name === card.name;
    }).length > 0) {
      return (<Card cardType={cardData.cardType}
        cardData={cardData[index]}
        key={item.name}
        updateFavorites={updateFavorites}
        isFavorite={'is-favorite'}/>);
    } else {
      return (<Card cardType={cardData.cardType}
        cardData={cardData[index]}
        key={item.name}
        updateFavorites={updateFavorites}
        isFavorite={''}/>);
    }
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
  updateFavorites: PropTypes.func,
  favorites: PropTypes.array
};

export default CardContainer;
