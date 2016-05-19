import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { MainLayout, Main, MissingPage } from './components';
import { VideoPlayer, CountDown } from './containers';


export const routes = (
	<Route path="/" component={MainLayout}>
		<IndexRoute component={VideoPlayer}/>
		<Route path="counter" component={CountDown}/>
		<Route path="*" component={MissingPage}/>
	</Route>
)
