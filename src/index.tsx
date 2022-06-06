import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle} from 'styled-components';
import {HashRouter} from 'react-router-dom';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    background: linear-gradient(180deg, #E6D4DE 0%, #9890C7 100%);
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <HashRouter>
          <Global/>
          <App />
      </HashRouter>
  </React.StrictMode>
);


