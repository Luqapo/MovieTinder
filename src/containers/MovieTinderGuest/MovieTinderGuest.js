import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Clear from '@material-ui/icons/Clear';
import Done from '@material-ui/icons/Done';

import Movie from '../../components/Movie/Movie';
import { styles } from '../MovieTinder/MovieTinderStyles';
import { url } from '../../config/config';

class MovieTinder extends Component{
    state = {
        movies: null,
        movieToRender: null,
        counter: 0
    }

    componentDidMount(){
        fetch(`${url}/api/movie`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    movies: resp,
                    movieToRender: resp[0]
                })
            })
            .catch(err => {
                alert('Network error');
            })
    }

    handleReject = () => {
        this.changeMovie();
    }

    handleAccept = () => {   
        this.changeMovie();
    }

    changeMovie = () => {
        let newCounter = this.state.counter + 1;
        let newMovie = this.state.movies[newCounter];
        this.setState({
            movieToRender: newMovie,
            counter: newCounter
        })
    }

    render(){
        const { classes } = this.props;

        return (
            <Paper className={classes.root} elevation={4}>
                <div className={classes.movie}>
                    {this.state.movieToRender ? <Movie movie={this.state.movieToRender}/> 
                            : <h3>No more movies in database.</h3>}
                    <div className={classes.buttons}>
                        <Button variant="outlined" 
                                color="primary" 
                                className={classes.button} 
                                onClick={this.handleAccept}>
                            <Done className={classes.leftIcon} />
                            Accept
                        </Button>
                        <Button variant="outlined" 
                                color="secondary" 
                                className={classes.button}
                                onClick={this.handleReject}>
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