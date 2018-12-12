import * as actionTypes from './actionTypes';
import { url } from '../../config/config';

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
            .then( () => {
                    dispatch(authSucces(login));
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
        .then( () => {
                dispatch(authSucces(login));
            })
        .catch(error => {
                alert(error);
            })
    };
};