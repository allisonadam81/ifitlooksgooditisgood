import React from 'react';

const FavoriteButton = props => (
  <button className='btn' onClick={() => props.favoriteQuoteClick(props.text, props.author)}>Favorite</button>
)

export default FavoriteButton;