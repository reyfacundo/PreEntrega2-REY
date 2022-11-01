import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles/index.css';
import App from './App.jsx';
import { CarritoProvider } from './context/CarritoContext';
// import './components/utils/bdd'
// import './components/utils/pruebas'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CarritoProvider>
);