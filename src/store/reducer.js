import * as actionTypes from './actions/actionTypes';

const initialSate = {
    userLogged: '',
    favoriteCount: 0
}



const reducer = (state = initialSate,action) => {
    switch ( action.type ) {
        case actionTypes.AUTH_SUCCES:
            return {
                ...state,
                userLogged: action.login
            };

        case actionTypes.LOG_OFF:
            return {
                ...state,
                userLogged: ''
            };
        case actionTypes.SET_FAVORITE:
            return {
                ...state,
                favoriteCount: action.count
            }
    }
    return state;
};

export default reducer;