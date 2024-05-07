import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home.tsx';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
reportWebVitals();
