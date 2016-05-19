
import React, { Component } from 'react';
import { Provider} from 'react-redux';
import configureStore from './configureStore';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import { MainLayout, Main, MissingPage } from './components';
import {VideoPlayer, CountDown} from './containers';

const store = configureStore();


render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={MainLayout}>
				<IndexRoute component={VideoPlayer}/>
				<Route path="counter" component={ CountDown }/>
				<Route path="*" component={MissingPage}/>
			</Route>
		</Router>
	</Provider>
), document.getElementById('container'));
