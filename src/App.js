import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

import NavBar from './containers/NavBar/NavBar';
import MovieTinder from './containers/MovieTinder/MovieTinder';
import MovieTinderGuest from './containers/MovieTinderGuest/MovieTinderGuest';
import AddMovie from './components/AddMovie/AddMovie';
import FavoriteMovies from './containers/FavoriteMovies/FavoriteMovies';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/add-movie" component={AddMovie} />
          <Route path="/favorite" component={FavoriteMovies} />
          <Route path="/" component={ this.props.userIn ? MovieTinder : MovieTinderGuest } />
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

export default withRouter(connect(mapStateToProps)(App));