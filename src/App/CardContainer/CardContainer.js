import React from 'react'
import Card from '../Card/Card'

const CardContainer = ({ cardData, cardType }) => {
  const mapped = cardData.map( (item, index) => {
    return <Card cardType={cardType} cardData={cardData[index]} key={index + Date.now()}/>
  });
  return (
    <div>
      {mapped}
    </div>
  )
};

export default CardContainer;
