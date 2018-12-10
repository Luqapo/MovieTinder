import * as actionTypes from './actionTypes';
import { url } from '../../config/consfig';

export const addFavrite = () => {
    return {
        type: actionTypes.ADD_FAVORITE
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
        fetch(`${url}/api/favorites`)
            .then( resp => resp.json())
            .then(function (response) {
                    dispatch(setFavorite(response.length));
                })
            .catch(function (error){
                    alert(error);
                })
    };
}