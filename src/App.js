import React, { Component } from 'react';
import './App.css';

import NavBar from './containers/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Main page</h1>
      </div>
    );
  }
}

export default App;
