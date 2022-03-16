import React, { Component } from 'react';

import Password from './Password.jsx';
import Username from './Username.jsx';
import LoginButton from './LoginButton.jsx';
import SignUpText from './SignUpText.jsx';
import { json } from 'express';

class LoginContainer extends Component{
  constructor(props){
    super(props)

  }



  render() {
    return(
      <div  className='login-container'>
        <h1>Login</h1>
        <Username/>
        <Password/>
        <LoginButton/>
        <SignUpText/>
      </div>
    )
  }
}



export default LoginContainer;