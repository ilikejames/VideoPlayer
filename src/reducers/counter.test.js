
import reducer from './counter';
import expect from 'expect';
import {COUNTER_TICK, COUNTER_STARTED, COUNTER_STOPPED} from 'actions/counter';

describe('reducers/counter', () => {

	it('Should start the counter', () => {

	});

	it('Should return the default state', () => {
		let state = reducer(undefined, {});
		expect(state).toEqual({
			isRunning : false,
			value : 0
		});
	});

	it('Should return state with isRunning when action is COUNTER_START', () => {

		let state = reducer(undefined, { type : COUNTER_STARTED});

		expect(state).toEqual({
			isRunning : true,
			value : 0
		});

	});

	it('Should return state with isRunning when action is COUNTER_STOP', () => {

		let state_start = reducer(undefined, { type : COUNTER_STARTED});
		let state_stop = reducer(state_start, { type : COUNTER_STOPPED});

		expect(state_start).toEqual({
			isRunning : true,
			value : 0
		});

		expect(state_stop).toEqual({
			isRunning : false,
			value : 0
		});

	});

	it('Should increment value on a COUNTER_TICK', () => {

		let state_start = reducer(undefined, { type : COUNTER_STARTED });
		let state_tick = reducer(state_start, { type : COUNTER_TICK, amount : 1 });

		expect(state_tick).toEqual({
			isRunning : true,
			value : 1
		});

	});


});
