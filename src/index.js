import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App.js';
import './scss/index.scss';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
serviceWorker.unregister();