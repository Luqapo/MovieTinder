import * as actionTypes from './actionTypes';
import { url } from '../../config/consfig';

export const addFavorite = (newCount) => {
    return {
        type: actionTypes.ADD_FAVORITE,
        newCount: newCount
    }
}

export const setFavorite = (count) => {
    return {
        type: actionTypes.SET_FAVORITE,
        count: count
    }
}

export const setFavoriteCount = () => {
    return dispatch => {
        fetch(`${url}/api/movie/status`)
            .then( resp => resp.json())
            .then(response => {
                    dispatch(setFavorite(response.length));
                })
            .catch( error => {
                    alert(error);
            })
    };
}