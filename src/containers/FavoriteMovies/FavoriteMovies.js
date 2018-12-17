import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

import { url } from '../../config/config';
import { styles } from './FavoriteMoviesStyles';

class FavoriteMovies extends Component {

    state = {
        favoriteMovies: null
    }

    componentDidMount() {
        if(this.props.userIn){
        fetch(`${url}/api/movie/favorite/${this.props.userIn}`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    favoriteMovies: resp
                })
            })
            .catch(err => alert(`Network error! ${err}`))
        }
    }

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {this.props.userIn ? null : 
                    <Typography variant="h2" 
                                className={classes.marginTop}>
                        LogIn to use all futures.
                    </Typography>}
                {this.state.favoriteMovies ? this.state.favoriteMovies.map(favoriteMovie => (
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <div className={classes.column}>
                                <Typography className={classes.heading}>{favoriteMovie.title}</Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.secondaryHeading}>{`Rating ${favoriteMovie.rating}`}</Typography>
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.details}>
                            <Typography >{favoriteMovie.summary}</Typography>
                        </ExpansionPanelDetails>
                        <Divider />
                    </ExpansionPanel>)) : null}
            </div>
        )
    }
}

FavoriteMovies.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = state => {
    return {
        userIn: state.root.userLogged
    };
  };

export default connect(mapStateToProps)(withStyles(styles)(FavoriteMovies));