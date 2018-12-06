import React, { Component } from 'react';

import Movie from '../../components/Movie/Movie';

class MovieTinder extends Component{
    render(){
        return (
            <div>
                <Movie />
                <div>
                    <button>Accept</button>
                    <button>Reject</button>
                </div>
            </div>
        )
    }
}

export default MovieTinder;