import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './utils/store'; // Path to your store file
import App from './App';
import './index.css';
import 'primeicons/primeicons.css'; // Don't forget your icons!

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);