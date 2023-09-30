import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



