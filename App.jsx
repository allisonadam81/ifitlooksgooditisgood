import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Container from './client/login/Container.jsx'
// import SignUpContainer from './client/signup/SignUpContainer.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: {},
      quotesArray: []
    };
    this.fetchQuoteClick = this.fetchQuoteClick.bind(this);
    this.favoriteQuoteClick = this.favoriteQuoteClick.bind(this);
  }

  fetchQuoteClick() {
    const { quotesArray } = this.state;
    const arrIndex = [Math.floor(Math.random() * 1642)];
    const text = quotesArray[arrIndex].text;
    const author = quotesArray[arrIndex].author;
    if (!author) author = 'Michael O\'Halloran'
    this.setState({
      ...this.state,
      quote: { text, author }
    })
  }

  favoriteQuoteClick(text, author) {
    //console.log(`my text is ${text} and my author is ${author}`, 'I am here');
    fetch('/api/favorite', {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ text, author })
    })
    .then(data => data.json())
    .then(res => alert(res.message))
  }

  componentDidMount () {
    fetch('/api')
    .then(data => data.json())
    .then(data => {
      this.setState({
        quotesArray: data,
        quote: ''
      })
    })
    .then(() => this.fetchQuoteClick())
  }
  
  render () {
    const { quote } = this.state;
    return (
      <div>
        <Container
        fetchQuoteClick = {this.fetchQuoteClick}
        favoriteQuoteClick = {this.favoriteQuoteClick}
        quote = {quote}
        />
      </div>
    )
  }

}

export default App