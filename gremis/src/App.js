import React, { Component } from 'react';
import logo from './logo.svg';
import Client from './client/client';
import ClientForm from './client/clientForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div>
          <Client />
          <ClientForm />
        </div>

      </div>
    );
  }
}

export default App;
