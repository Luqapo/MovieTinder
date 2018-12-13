import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { styles } from './MovieStyles';

export const Movie = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <h1>{props.movie.title}
                <span>{`(${props.movie.rating})`}</span>
            </h1>
            <div className={classes.movie}>
                <img src={props.movie.imageURL} 
                     alt={props.movie.title} 
                     className={classes.img}/>
                <p>
                    {props.movie.summary} 
                </p>
            </div>
        </div>
        
    )
}

Movie.propTypes = {
    classes: PropTypes.object.isRequired,
    movie: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Movie);