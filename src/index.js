import 'babel-polyfill';
import {Router, browserHistory} from 'react-router';
import React from 'react';
import { render } from  'react-dom';
import App from './components/App';
import './styles/style.css';

render (
  <App />,
  document.getElementById('app')
);
