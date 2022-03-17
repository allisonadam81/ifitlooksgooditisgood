import React, { Component } from 'react';
import QuoteButton from './QuoteButton.jsx'

import Username from './Username.jsx';
import GenerateQuoteButton from './QuoteButton.jsx';

const Container = props => (
      <div  className='container'>
        <h1>rip solo project</h1>
        <div className='quote-text'>{props.quote}</div>
        <QuoteButton 
          fetchQuoteClick = {props.fetchQuoteClick}
        />
      </div>
    )



export default Container;