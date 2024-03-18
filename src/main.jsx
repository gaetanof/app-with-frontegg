// HOSTED;

import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-y7i7twzeyimf.frontegg.com',
  clientId: '0970e534-33c1-4fb5-bd2a-21a76a1dd26f',
};

const authOptions = {
  keepSessionAlive: true, // Uncomment this in order to maintain the session alive
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FronteggProvider
    contextOptions={contextOptions}
    hostedLoginBox={true}
    authOptions={authOptions}
  >
    <App />
  </FronteggProvider>
);

//EMBEDDED

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';

// import { FronteggProvider } from '@frontegg/react';

// const contextOptions = {
//   baseUrl: 'https://app-y7i7twzeyimf.frontegg.com',
// };

// const authOptions = {
//   // keepSessionAlive: true // Uncomment this in order to maintain the session alive
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <FronteggProvider
//     contextOptions={contextOptions}
//     hostedLoginBox={true}
//     authOptions={authOptions}
//   >
//     <App />
//   </FronteggProvider>
// );
