import React, { Component } from 'react';
import Password from './Password.jsx';
import Username from './Username.jsx';


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
      </div>
    )
  }
}



export default LoginContainer;