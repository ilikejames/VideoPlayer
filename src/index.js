
import React, { Component } from 'react';
import { Provider} from 'react-redux';
import configureStore from './configureStore';

import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import { MainLayout, Main, Counter, MissingPage } from './components';



import {VideoPlayer} from './containers';

const store = configureStore();

console.log(VideoPlayer);

render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={MainLayout}>
				<IndexRoute component={VideoPlayer}/>
				<Route path="counter" component={Counter}/>
				<Route path="*" component={MissingPage}/>
			</Route>
		</Router>
	</Provider>
), document.getElementById('container'));
