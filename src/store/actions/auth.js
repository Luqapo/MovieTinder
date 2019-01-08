import * as actionTypes from './actionTypes';
import { url } from '../../config/config';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSucces = (login, token) => {
    return {
        type: actionTypes.AUTH_SUCCES,
        login: login,
        token: token
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
            .then( resp => {
                    dispatch(authSucces(login, resp.token));
                })
            .catch(error => {
                    alert(error);
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
        .then( resp => {
                dispatch(authSucces(login, resp.token));
            })
        .catch(error => {
                alert(error);
            })
    };
};

export const userLogOff = () => {
    return dispatch => {
        dispatch( authStart());
        fetch(`${url}/api/auth/logoff`, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then( () => {
                dispatch(logOff());
            })
        .catch(error => {
                alert(error);
            })
    };
};