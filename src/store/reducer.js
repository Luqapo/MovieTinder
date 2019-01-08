import * as actionTypes from './actions/actionTypes';

const initialSate = {
    userLogged: '',
    favoriteCount: 0,
    token: null
}

const reducer = (state = initialSate,action) => {
    switch ( action.type ) {
        case actionTypes.AUTH_SUCCES:
            return {
                ...state,
                userLogged: action.login,
                token: action.token
            };
        case actionTypes.LOG_OFF:
            return {
                ...state,
                userLogged: '',
                favoriteCount: 0,
                token: null
            };
        case actionTypes.SET_FAVORITE:
            return {
                ...state,
                favoriteCount: action.count
            };
        case actionTypes.ADD_FAVORITE:
            return {
                ...state,
                favoriteCount: action.newCount
            }
    }
    return state;
};

export default reducer;