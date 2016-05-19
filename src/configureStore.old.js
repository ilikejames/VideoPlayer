import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
//import rootReducer from './reducers'
import { FetchData, reducer as fetching } from 'redux-fetch-data';


const loggerMiddleware = createLogger()

export default function configureStore(reducer, initialState) {
	return createStore(
		reducer,
		initialState,
		applyMiddleware(
		  thunkMiddleware,
		  loggerMiddleware
		)
	)
}
