import React, { Component } from 'react';

import Merchants from './dashboard/components/Merchants';
import MerchantForm from './dashboard/components/MerchantForm';

import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <Merchants />
        <MerchantForm />
      </div>
    );
  }
}

export default App;
