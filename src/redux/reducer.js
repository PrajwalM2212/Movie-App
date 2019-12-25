import {combineReducers} from 'redux'

function movies(state = [], action) {
    if (action.type === 'LOAD_MOVIES') {
        return action.movies;
    } else {
        return state;
    }
}

const rootReducer = combineReducers({movies});
export default rootReducer;
