import counterReducer from './counter.js';
import loggedReducer from './isLogged.js';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counterReducer: counterReducer,
    loggedReducer: loggedReducer,
})
export default allReducers;