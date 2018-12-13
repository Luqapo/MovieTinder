import reducer from './reducer';
import * as actionTypes from './actions/actionTypes';

describe('reducer test', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            userLogged: '',
            favoriteCount: 0
        });
    });

    it('should return userLogged', () => {
        expect(reducer({
            userLogged: '',
            favoriteCount: 0
        }, {
            type: actionTypes.AUTH_SUCCES,
            login: 'Test'
        })).toEqual({
            userLogged: 'Test',
            favoriteCount: 0
        });
    });

    it('should return userLogged', () => {
        expect(reducer({
            userLogged: '',
            favoriteCount: 0
        }, {
            type: actionTypes.LOG_OFF
        })).toEqual({
            userLogged: '',
            favoriteCount: 0
        });
    });

    it('should return userLogged', () => {
        expect(reducer({
            userLogged: '',
            favoriteCount: 0
        }, {
            type: actionTypes.SET_FAVORITE,
            count: 6
        })).toEqual({
            userLogged: '',
            favoriteCount: 6
        });
    });

    it('should return userLogged', () => {
        expect(reducer({
            userLogged: '',
            favoriteCount: 0
        }, {
            type: actionTypes.ADD_FAVORITE,
            newCount: 7
        })).toEqual({
            userLogged: '',
            favoriteCount: 7
        });
    });
});