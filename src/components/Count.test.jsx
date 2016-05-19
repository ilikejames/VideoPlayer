
import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'


import Count from './Count'


function setup() {
	let props = {
		running : false,
		value : 1,
		toggleCounter : expect.createSpy()
	}

	let renderer = TestUtils.createRenderer()
	renderer.render(<Count {...props}/>)
	let output = renderer.getRenderOutput()

	return {
		props,
		output,
		renderer
	}

}

describe('components/Counter', () => {

	it('Should render a h2 with a button', () => {

		const { output } = setup();

		expect(output.type).toBe('h2');

		let [status, value, button ] = output.props.children;
		expect(button.type).toBe('button');

	});

	it('Should call onToggle handler when the button is clicked', () => {

		const { output, props } = setup();

		let [status, value, button ] = output.props.children;
		expect(props.toggleCounter.calls.length).toBe(0);
		button.props.onClick();
		expect(props.toggleCounter.calls.length).toBe(1);

	});
});

