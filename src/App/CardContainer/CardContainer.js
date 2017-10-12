import React from 'react'
import Card from '../Card/Card'

const CardContainer = ({ cardData }) => {

  return (
    <div>
      Card Container!
      <Card cardData={cardData} />
    </div>
  )
};

export default CardContainer;
