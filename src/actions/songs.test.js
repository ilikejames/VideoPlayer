
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './songs'
import nock from 'nock'
import expect from 'expect';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('songs', () => {

	afterEach(() => {
		nock.cleanAll()
	});


	it('Creates FETCH_SONGS_COMPLETE when fetching songs has been done', () => {

		//console.log('API_HOST', process.env.API_HOST);

		console.log(`${process.env.API_HOST}/src/test_data/songs_response.json`);

		debugger;

		nock(process.env.API_HOST + '/')
		.get('/src/test_data/songs_response.json')
		.reply(200, { body : [1,2,3 ] });

		const expectedActions = [
			{
				type : actions.FETCH_SONGS_INPROGRESS
			},
			{
				type: actions.FETCH_SONGS_COMPLETE,
			    items: [1,2,3],
			    receivedAt: Date.now()
			}
		];

		const store = mockStore({ songs : {} });

		return store.dispatch(actions.fetchSongsIfNeeded())
			.then(() => {
				console.log(store.getActions());
				expect(store.getActions()).toEqual(expectedActions);
			});

	});

});
