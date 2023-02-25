import './index.css';
// react
import React from 'react';
import ReactDOM from 'react-dom/client';
// ? redux
import { Provider } from 'react-redux';
import { store } from 'redux/store';
// components
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
