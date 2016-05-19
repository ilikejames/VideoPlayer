
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { reducer as fetching } from 'redux-fetch-data';
import { combineReducers } from 'redux';

import { songs, counter } from './reducers'

const loggerMiddleware = createLogger()
const initialState = window && window.__INITIAL_STATE__;


function configureStore(reducer, initialState) {
	return createStore(
		reducer,
		initialState,
		applyMiddleware(
		  thunkMiddleware,
		  loggerMiddleware
		)
	)
}


export const reducer = combineReducers({ fetching, songs, counter });
export const store = configureStore(reducer, initialState);
