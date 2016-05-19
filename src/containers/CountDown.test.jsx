
import expect from 'expect'
import React from 'react';
import { connect, Provider } from 'react-redux'
import TestUtils from 'react-addons-test-utils'

import configureStore from 'configureStore';
import { CountDown } from './CountDown';


const store = configureStore();


function setup() {
	let props = {
	}

	let renderer = TestUtils.createRenderer()
	renderer.render((
		<Provider store={store}>
			<CountDown/>
		</Provider>
	))
	let output = renderer.getRenderOutput()

	return {
		props,
		output,
		renderer
	}

}


describe('containers/CountDown', () => {

	it('Should trigger toggleCounter', () => {
		const { output } = setup();
		debugger;
		expect(false).toBe(true)
	})

});
