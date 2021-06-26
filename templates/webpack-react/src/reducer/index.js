import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers';

import {createBrowserHistory} from 'history';
import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
export const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducer(history),
    composeEnhancer(applyMiddleware(thunk, routerMiddleware(history)))
)

export default store;