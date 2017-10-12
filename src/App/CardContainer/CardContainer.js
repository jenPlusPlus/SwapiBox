import React from 'react'
import Card from '../Card/Card'

const CardContainer = ({ cardData, cardType, updateFavorites }) => {
  const mapped = cardData.map( (item, index) => {
    return <Card cardType={cardData.cardType} cardData={cardData[index]} key={index + Date.now()} updateFavorites={updateFavorites}/>
  });
  return (
    <div>
      {mapped}
    </div>
  )
};

export default CardContainer;
