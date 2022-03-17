import React from 'react';

const QuoteButton = props => (
  <button className='btn' onClick={() => props.fetchQuoteClick()}>New Quote</button>
)

export default QuoteButton