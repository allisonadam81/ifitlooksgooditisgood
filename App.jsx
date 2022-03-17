import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginContainer from './client/login/LoginContainer.jsx'
import SignUpContainer from './client/signup/SignUpContainer.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      endpoint: '/',
      loggedIn: 'false',
      signUp: 'false'
    }
    this.endpoint = this.endpoint.bind(this);
  }

  endpoint () {
    fetch('/api')
      .then(data => JSON.parse(data))
      .then(

        
      )
      
    
    return;
  }

  componentDidMount(){

  }

  
  render () {
    const toRender = [];
    return (
      <div>
        <LoginContainer/>
      </div>
    )
  }

}

export default App