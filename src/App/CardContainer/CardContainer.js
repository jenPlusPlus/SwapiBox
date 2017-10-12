import React from 'react'
import Card from '../Card/Card'

const CardContainer = ({ cardData }) => {
  const mapped = cardData.map( (item, index) => {
    return <Card cardData={cardData} key={index + Date.now()}/>
  });
  return (
    <div>
      {mapped}
    </div>
  )
};

export default CardContainer;
