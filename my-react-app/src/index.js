import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Body from './components/Body/Body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <NavBar />
    <Main />
    <Body />

  </React.StrictMode>
);

