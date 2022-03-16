import React, { Component } from 'react';
import LoginContainer from './client/login/LoginContainer.jsx'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <LoginContainer/>
    )
  }

}

export default App