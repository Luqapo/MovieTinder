import * as actionTypes from './actionTypes';
import { url } from '../../config/consfig';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSucces = (login) => {
    return {
        type: actionTypes.AUTH_SUCCES,
        login: login
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logOff = () => {
    return {
        type: actionTypes.LOG_OFF
    };
};

export const addUser = (login, password, email) => {

        return dispatch => {
            dispatch(authStart());
            fetch(`${url}/api/auth/register`, {
                method : 'POST',
                body : JSON.stringify({
                    login: login,
                    password: password,
                    email: email
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then( resp => resp.json())
            .then(function (response) {
                    dispatch(authSucces(login));
                })
            .catch(function (error) {
                    console.log(error);
                })
        }
};

export const auth = (login, password) => {
    return dispatch => {
        dispatch( authStart());
        fetch(`${url}/api/auth/login`, {
            method : 'POST',
            body : JSON.stringify({
                login: login,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then( resp => resp.json())
        .then(function (response) {
                dispatch(authSucces(login));
            })
        .catch(function (error){
                console.log(error);
                dispatch(authFail(error));
            })
    };
};