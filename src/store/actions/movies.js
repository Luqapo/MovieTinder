import * as actionTypes from './actionTypes';
import { url } from '../../config/config';

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

export const setFavoriteCount = (user) => {
    return dispatch => {
        fetch(`${url}/api//movie/favorite/${user}`)
            .then( resp => resp.json())
            .then(resp => {
                dispatch(setFavorite(resp.length));
            })
            .catch( error => {
                alert(error);
            })
    };
}