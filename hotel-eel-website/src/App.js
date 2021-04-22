import React from 'react';
import './App.css';
import {Homepage} from './Components/Homepage';
import {Header} from './Components/Header';

const App = () => {
  return (
    <div className="app">
      <h1> Hotel Eel Website</h1>
      <Header />
      <Homepage />
    </div>
  );
}

export { App };