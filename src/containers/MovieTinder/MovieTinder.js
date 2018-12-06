import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Clear from '@material-ui/icons/Clear';
import Done from '@material-ui/icons/Done';

import Movie from '../../components/Movie/Movie';
import { styles } from './MovieTinderStyles';

class MovieTinder extends Component{
    render(){
        const { classes } = this.props;

        return (
            <Paper className={classes.root} elevation={4}>
                <div className={classes.movie}>
                    <Movie />
                    <div className={classes.buttons}>
                        <Button variant="outlined" color="primary" className={classes.button}>
                            <Done className={classes.leftIcon} />
                            Accept
                        </Button>
                        <Button variant="outlined" color="secondary" className={classes.button}>
                            Reject
                            <Clear className={classes.rightIcon} />
                        </Button>
                    </div>
                </div>
            </Paper>
        )
    }
}

MovieTinder.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(MovieTinder);