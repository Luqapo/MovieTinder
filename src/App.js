import React, { Component } from 'react';
import './App.css';

import NavBar from './containers/NavBar/NavBar';
import MovieTinder from './containers/MovieTinder/MovieTinder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MovieTinder />
      </div>
    );
  }
}

export default App;
