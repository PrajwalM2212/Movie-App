import {combineReducers} from 'redux'

function movies(state = [], action) {
    if (action.type === 'LOAD_MOVIES') {
        return [...state, ...action.movies];
    } else if (action.type === 'SEARCH') {
        console.log(action.movies);
        return [...action.movies];
    } else {
        return state;
    }
}

function page(state = 1, action) {
    if (action.type === 'LOADED') {
        return state + 1;
    } else {
        return state;
    }
}

const rootReducer = combineReducers({movies, page});
export default rootReducer;
