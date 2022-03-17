import React, { Component } from 'react';

import Password from './Password.jsx';
import Username from './Username.jsx';
import GenerateQuoteButton from './LoginButton.jsx';
import SignUpText from './SignUpText.jsx';

class LoginContainer extends Component{
  constructor(props){
    super(props)

  }

  render() {
    return(
      <div  className='login-container'>
        <h1>rip solo project</h1>
        <GenerateQuoteButton className='quote-button'/>
      </div>
    )
  }
}



export default LoginContainer;