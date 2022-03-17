import React from 'react';
import App from './App.jsx';
import { render } from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

import styles from './application.scss'

render(
    <App></App>,
  document.querySelector('#root')
);

