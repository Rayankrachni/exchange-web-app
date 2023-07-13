import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';
import { ThemeProvider } from './Context';
import store from './store/index';
import { Provider } from 'react-redux';
import ConnectionStatus from './ConnectionStauts';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <ThemeProvider>
     <Provider store={store}>
       <App />
    </Provider>
  </ThemeProvider>,
);


