import * as actionTypes from './actions/actionTypes';

const initialSate = {
    userLogged: ''
}



const reducer = (state = initialSate,action) => {
    switch ( action.type ) {
        case actionTypes.AUTH_SUCCES:
            return {
                userLogged: action.login
            };

        case actionTypes.LOG_OFF:
            return {
                userLogged: ''
            };
    }
    return state;
};

export default reducer;