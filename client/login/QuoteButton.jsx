import React from 'react';

const QuoteButton = props => (
  <button onClick={() => props.fetchQuoteClick()}>My Button is real</button>
)

export default QuoteButton