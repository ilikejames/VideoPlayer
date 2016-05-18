
import { FETCH_SONGS, FETCH_SONGS_INPROGRESS, FETCH_SONGS_COMPLETE } from '../actions/songs';


const defaultState = {
	currentPlaying : null,
	isFetching : false,
	items : []
}

export default function songs(state = defaultState, action) {
	switch(action.type) {

		case FETCH_SONGS :
			return {
				...state
			}

		case FETCH_SONGS_INPROGRESS :
			return {
				...state,
				isFetching : true
			}

		case FETCH_SONGS_COMPLETE :
			return {
				...state,
				isFetching : false,
				items : state.items.concat(action.items),
				lastUpdate : action.receivedAt
			}

		default :
			return state;

	}
}
