import React, { Component } from 'react';

import WeatherAppComponent from './components/WeatherAppComponent';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Weather Report app based on React</h1>
        </div>
        <WeatherAppComponent />
      </div>
    );
  }
}

export default App;
