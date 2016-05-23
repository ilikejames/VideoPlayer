
import expect from 'expect'
import React from 'react';
import { connect, Provider } from 'react-redux'
import TestUtils from 'react-addons-test-utils'
import * as shallowTest from 'react-shallow-testutils'
import { CountDown, default as ConnectedCountDown } from './CountDown'
import Count from 'components/Count'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { toggleCounter } from '../actions/'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)



describe('containers/<CountDown/>', () => {


	function setup() {

		const props = { }
		const renderer = TestUtils.createRenderer()
		renderer.render(<CountDown {...props}/>)
		const output = renderer.getRenderOutput()
		const count = shallowTest.findWithType(output, Count)

		return {
			output,
			count,
			props
		}
	}

	it('Should render the <CountDown/> component with the correct initial properties', () => {

		const { count } = setup();

		expect(count).toExist();
		expect(count.props).toInclude({
			value : 0,
			running : false
		});
		expect(typeof count.props.toggleCounter).toBe('function');

	});

	it('Should dispatch(toggleCounter()) when child component handler called', () => {

		const store = mockStore({ counter : {}, dispatch : expect.createSpy() });
		const spy = expect.spyOn(store, 'dispatch');
		const output = TestUtils.renderIntoDocument((
			<ConnectedCountDown store={store}/>
		))
		const count = TestUtils.findRenderedComponentWithType(output, Count)

		count.props.toggleCounter();

		expect(count).toExist();
		expect(spy).toHaveBeenCalledWith(toggleCounter());

	});


});
