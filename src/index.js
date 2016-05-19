
import React, { Component } from 'react';
import { Provider} from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import { FetchData, reducer as fetching } from 'redux-fetch-data';
import {combineReducers} from 'redux';

import configureStore from './configureStore';
import {routes} from './routes';
import { songs, counter } from './reducers'


const initialState = window && window.__INITIAL_STATE__;
const store = configureStore(combineReducers({ fetching, songs, counter }), initialState);

render((
	<Provider store={store} key="provider">
		<Router
			history={browserHistory}
			render={ props => <FetchData {...props}/> }
			routes={routes}/>
	</Provider>
), document.getElementById('container'));
