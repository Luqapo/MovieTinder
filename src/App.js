import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './containers/NavBar/NavBar';
import MovieTinder from './containers/MovieTinder/MovieTinder';
import MovieTinderGuest from './containers/MovieTinderGuest/MovieTinderGuest';
import AddMovie from './components/AddMovie/AddMovie';

class App extends Component {
  render() {
    let MovieTinderContainer = MovieTinderGuest;
    if(this.props.userIn) {
      MovieTinderContainer = MovieTinder;
    } 
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/add-movie" component={AddMovie} />
          <Route path="/" component={MovieTinderContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      userIn: state.root.userLogged
  };
};

export default connect(mapStateToProps)(App);