import 'whatwg-fetch'

export const FETCH_SONGS = 'FETCH_SONGS';
export const FETCH_SONGS_INPROGRESS = 'FETCH_SONGS_INPROGRESS';
export const FETCH_SONGS_COMPLETE = 'FETCH_SONGS_COMPLETE'


function songsFetching() {
	return {
		type : FETCH_SONGS_INPROGRESS
	}
}


function songsFetched(json) {
	return {
	    type: FETCH_SONGS_COMPLETE,
	    items: json,
	    receivedAt: Date.now()
	}
}


function fetchSongs() {

	return dispatch => {

		dispatch(songsFetching());

		let p = new Promise((resolve, reject) => {

			setTimeout(() => {

				fetch(`/src/test_data/songs_response.json`)
				.then(r => {
					return r.json()
				})
				.then(json => {
					debugger;
					console.log('json', json);
					dispatch(songsFetched(json));
					resolve();
				})
				.catch(e => {
					reject(e);
				})
			}, 1000);

		});

		return p;

	}

}


function shouldFetch(state) {
	return state.songs && !state.songs.isFetching;
}


export function fetchSongsIfNeeded() {
  return (dispatch, getState) => {
  	const shouldFetch = getState().songs && !getState().songs.isFetching;
    if (shouldFetch) {
      return dispatch(fetchSongs());
    }
  }
}
