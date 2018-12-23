import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Star from '@material-ui/icons/Star';
import Add from '@material-ui/icons/Add';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

import { styles } from './NavBarStyles';
import LoginModal from '../../components/LoginModal/LoginModal';
import * as actions from '../../store/actions/auth';

class NavBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    schowLog: false,
  };

  handleLogin = () => {
    this.setState({ schowLog: this.state.schowLog ? false : true });
    this.handleMenuClose();
  }

  handleLogOff = () => {
    this.props.logOff();
    this.setState({ schowLog: false });
    this.handleMenuClose();
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleAddMovie = () => {
    this.props.history.push('/add-movie');
    this.handleMenuClose();
  }

  handleFavorite = () => {
    this.props.history.push('/favorite');
    this.handleMenuClose();
  }

  handleMovieTinder = () => {
    this.props.history.push('/');
    this.handleMenuClose();
  }

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        { this.props.userIn ? <MenuItem onClick={this.handleLogOff}>LogOff</MenuItem> : 
                              <MenuItem onClick={this.handleLogin}>Login</MenuItem> }
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit" onClick={this.handleFavorite}>
            <Badge badgeContent={this.props.favoriteCount} color="secondary">
              <Star />
            </Badge>
          </IconButton>
          <p>My Favorit</p>
        </MenuItem>
        <MenuItem onClick={this.handleAddMovie}>
          <IconButton color="inherit">
              <Add />
          </IconButton>
          <p>Add movie</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              <Button onClick={this.handleMovieTinder} color="inherit">
                Movie Tinder
              </Button>
            </Typography>
            <div className={classes.grow} />
            { this.state.schowLog ? <LoginModal 
                                        handleLogOff={this.handleLogOff} 
                                        show={this.state.schowLog} 
                                        showHandle={this.handleLogin}/>
                                        : null }
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit" onClick={this.handleFavorite}>
                <Badge badgeContent={this.props.favoriteCount} color="secondary">
                  <Star />
                </Badge>
              </IconButton>
              <IconButton color="inherit" onClick={this.handleAddMovie}>
                  <Add />
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
      userIn: state.root.userLogged,
      favoriteCount: state.root.favoriteCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
      logOff: () => dispatch ( actions.userLogOff())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(NavBar)));