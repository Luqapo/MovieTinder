import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

import NavBar from './containers/NavBar/NavBar';
import MovieTinder from './containers/MovieTinder/MovieTinder';
import MovieTinderGuest from './containers/MovieTinderGuest/MovieTinderGuest';
import AddMovie from './components/AddMovie/AddMovie';
import FavoriteMovies from './containers/FavoriteMovies/FavoriteMovies';

import * as actions from './store/actions/auth';

export class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    const userLogin = localStorage.getItem('login');
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      this.props.logOff();
      return;
    }
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    
      this.props.authStart(userLogin, token);
      this.setAutoLogout(remainingMilliseconds);
  }

  setAutoLogout = milliseconds => {
    setTimeout(() => {
      this.props.logOff();
    }, milliseconds);
  };

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

const mapDispatchToProps = dispatch => {
  return {
      authStart: (userLogin, userToken) => dispatch ( actions.authSucces (userLogin, userToken)),
      logOff: () => dispatch ( actions.logOff())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));