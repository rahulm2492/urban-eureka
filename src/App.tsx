import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="spinning-loader"></div>

        <div className="outer-circle">
          <div className="ball"></div>
          <div className="inner-circle"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
