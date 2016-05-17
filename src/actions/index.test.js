
import expect from 'expect'
import * as songs from './index.js'


describe('index', () => {

	it('Should expose the action names from songs', () => {
		expect(songs.FETCH_SONGS).toExist();
		expect(songs.FETCH_SONGS_COMPLETE).toExist();
		expect(songs.FETCH_SONGS_INPROGRESS).toExist();
		expect(songs.fetchSongsIfNeeded).toExist;
	});

});
