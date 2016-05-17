
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetch from 'isomorphic-fetch'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import simple from 'simple-mock'
import * as actions from './songs'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)


describe('songs', () => {

	afterEach(() => {
		fetchMock.restore();
	});


	it('Creates FETCH_SONGS_COMPLETE when fetching songs has been done', () => {

		fetchMock.mock('/src/test_data/songs_response.json', [1,2,3]);
		simple.mock(Date,'now').returnWith(1234567890);

		const expectedActions = [
			{ type : actions.FETCH_SONGS_INPROGRESS },
			{ type: actions.FETCH_SONGS_COMPLETE, items: [1,2,3], receivedAt : 1234567890 }
		];
		const store = mockStore({ songs : {} });

		return store.dispatch(actions.fetchSongsIfNeeded())
		.then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});

	});

});
