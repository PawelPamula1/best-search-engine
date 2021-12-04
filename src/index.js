import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import { BrowserRouter } from 'react-router-dom';
import { ResultContextProvider } from './contexts/ResultContextProvider';

import App from './App';

ReactDOM.render(
  <ResultContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ResultContextProvider>,
  document.getElementById('root')
);
