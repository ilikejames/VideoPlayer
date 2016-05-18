
import { COUNTER_TICK, COUNTER_STARTED, COUNTER_STOPPED } from '../actions/counter';


const defaultState = {
	isRunning : false,
	value : 0
}

export default function songs(state = defaultState, action) {
	switch(action.type) {

		case COUNTER_STARTED:
			return {
				...state,
				isRunning : true
			}

		case COUNTER_STOPPED:
			return {
				...state,
				isRunning : false
			}

		case COUNTER_TICK :
			return {
				...state,
				value : state.value + action.amount
			}

		default:
			return {
				...state
			}
	}
}
