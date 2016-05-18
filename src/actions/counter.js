
export const COUNTER_TICK = 'COUNTER_TICK';
export const COUNTER_STARTED = 'COUNTER_STARTED';
export const COUNTER_STOPPED = 'COUNTER_STOPPED';


let timerid;


function updateTimer(dispatch, counterValue) {
	dispatch({
		type : COUNTER_TICK,
		amount : 1
	});
}

export function startCounter() {
	return (dispatch, getState) => {
		const state = getState().counter;
		if(!state.isRunning) {
			timerid = setInterval(updateTimer.bind(this, dispatch, state.value || 0), 1000);
			dispatch({
				type : COUNTER_STARTED
			});
		}
	}
}

export function toggleCounter() {
	return (dispatch, getState) => {
		const state = getState().counter;
		debugger;
		if(!state.isRunning) {
			timerid = setInterval(updateTimer.bind(this, dispatch, state.value || 0), 1000);
			dispatch({
				type : COUNTER_STARTED
			});
		}
		else {
			clearInterval(timerid);
			dispatch({
				type : COUNTER_STOPPED
			});
		}
	}
}

