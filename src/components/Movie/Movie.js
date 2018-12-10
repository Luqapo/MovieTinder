import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { styles } from './MovieStyles';

const Movie = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <h1>{props.movie.title}
                <span>{`(${props.movie.rating})`}</span>
            </h1>
            <div className={classes.movie}>
                <img src={props.movie.imageURL} 
                     alt="Star Wars" 
                     className={classes.img}/>
                <h5>
                    {props.movie.summary} 
                </h5>
            </div>
        </div>
    )
}

Movie.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Movie);