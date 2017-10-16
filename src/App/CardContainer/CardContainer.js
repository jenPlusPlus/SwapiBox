import React, { Component } from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

class CardContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
  
    this.props.makeAPICall();

  }

  getCardData() {
    const mapped = this.props.cardData.map( (item, index) => {

      if (this.props.favorites.filter(card => {
        return item.name === card.name;
      }).length > 0) {
        return (<Card cardType={this.props.cardData.cardType}
          cardData={this.props.cardData[index]}
          key={item.name}
          updateFavorites={this.props.updateFavorites}
          isFavorite={'is-favorite'}/>);
      } else {
        return (<Card cardType={this.props.cardData.cardType}
          cardData={this.props.cardData[index]}
          key={item.name}
          updateFavorites={this.props.updateFavorites}
          isFavorite={''}/>);
      }
    });

    if (this.props.cardData.length <= 0
      && this.props.cardType === 'favorites') {
      return (
        <div className="card-container">
          'No favorite cards found.'
        </div>
          );
    } else  {
      return (
        <div className="card-container">
          {mapped}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="card-container-wrapper">
        {this.getCardData()}
      </div>
    );
  }
}


CardContainer.propTypes = {
  cardData: PropTypes.array,
  cardType: PropTypes.string,
  updateFavorites: PropTypes.func,
  favorites: PropTypes.array,
  makeAPICall: PropTypes.func
};

export default CardContainer;
