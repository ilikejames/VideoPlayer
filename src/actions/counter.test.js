
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'
import sinon from 'sinon'
import * as actions from './counter'


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)


describe('actions/counter', () => {

	it('startCounter should dispatch COUNTER_STARTED and COUNTER_TICK after 1 second', () => {

		const expectedActions = [
			{ type : actions.COUNTER_STARTED },
			{ type : actions.COUNTER_TICK, amount : 1}
		];
		const clock = sinon.useFakeTimers();
		const store = mockStore({ counter : {} });

		store.dispatch(actions.startCounter());

		clock.tick(1100);

		expect(store.getActions()).toEqual(expectedActions);

		clock.restore();

	});


	it('toggleCounter should dispatch COUNTER_STARTED when not isRunning', () => {

		const expectedActions = [
			{ type : actions.COUNTER_STARTED },
			{ type : actions.COUNTER_TICK, amount : 1},
		];
		const clock = sinon.useFakeTimers();
		const store = mockStore({ counter : {} });

		store.dispatch(actions.toggleCounter());
		clock.tick(1100);

		expect(store.getActions()).toEqual(expectedActions);

		clock.restore();

	});


	it('toggleCounter should dispatch COUNTER_STOPPED when is already running', () => {

		const expectedActions = [
			{ type : actions.COUNTER_STOPPED },
		];
		const clock = sinon.useFakeTimers();
		const store = mockStore({ counter : { isRunning : true} });

		store.dispatch(actions.toggleCounter());
		clock.tick(1100);

		expect(store.getActions()).toEqual(expectedActions);

		clock.restore();

	});
});
