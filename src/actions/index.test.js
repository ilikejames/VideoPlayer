
import expect from 'expect'
import * as actions from './index.js'


describe('index', () => {

	it('Should expose the action names from songs', () => {
		expect(actions.FETCH_SONGS).toExist();
		expect(actions.FETCH_SONGS_COMPLETE).toExist();
		expect(actions.FETCH_SONGS_INPROGRESS).toExist();
		expect(actions.fetchSongsIfNeeded).toExist;
	});

});
