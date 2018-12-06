import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { styles } from './MovieStyles';

const Movie = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <h1>Star Wars
                <span>(7.9/10)</span>
            </h1>
            <div className={classes.movie}>
                <img src="https://cdn3.movieweb.com/i/article/bNWjlxGFZ7Dlx8GV7F1sTvvCzctzVu/738:50/Star-Wars-9-Rumors-Traitor-Twist.jpg" 
                     alt="Star Wars" 
                     className={classes.img}/>
            </div>
        </div>
    )
}

Movie.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Movie);