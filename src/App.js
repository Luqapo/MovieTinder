import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './containers/NavBar/NavBar';
import MovieTinder from './containers/MovieTinder/MovieTinder';
import AddMovie from './components/AddMovie/AddMovie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/add-movie" component={AddMovie} />
          <Route path="/" component={MovieTinder} />
        </Switch>
      </div>
    );
  }
}

export default App;
