import {combineReducers} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
// import { history } from '.';

function name (state = null, action)  {

    switch (action.type) {
        case 'HOME_NAME':
            return action.payload
        default:
            return state
    }
}

function age (state = null, action)  {
    switch (action.type) {
        case 'HOME_AGE':
            return action.payload
        default:
            return state
    }
}

const reducer = (history) => combineReducers({
    name,
    age,
    router: connectRouter(history)
})
export default reducer;