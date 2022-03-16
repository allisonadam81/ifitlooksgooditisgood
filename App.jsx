import React, { Component } from 'react';
import LoginContainer from './login/LoginContainer.jsx'

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