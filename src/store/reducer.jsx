import * as actionTypes from './actions/actionTypes';

const initialSate = {
    userLogged: '',
    token: null
}



const reducer = (state = initialSate,action) => {
    switch ( action.type ) {
        case actionTypes.AUTH_SUCCES:
            return {
                userLogged: action.login,
                token: action.token
            };

        case actionTypes.LOG_OFF:
            return {
                userLogged: '',
                token: null
            };
    }
    return state;
};

export default reducer;