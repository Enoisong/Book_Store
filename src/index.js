import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytic endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
