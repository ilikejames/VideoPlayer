
import reducer from './songs';
import expect from 'expect';
import { FETCH_SONGS, FETCH_SONGS_INPROGRESS, FETCH_SONGS_COMPLETE } from '../actions/';


describe('songs', () => {

	it('Should return default state when no existing state', () => {

		let state = reducer(undefined, {});

		expect(state).toEqual({
			currentPlaying : null,
			isFetching : false,
			items : []
		});

	});

	it('Should return the state when action is FETCH_SONGS', () => {

		let state = {
			currentPlaying : null,
			isFetching : false,
			item : [1,2,3]
		};

		let newState = reducer(state, { type : FETCH_SONGS });

		expect(newState).toEqual(state, 'Should be equal in value');

	});

	it('Should append new songs onto the state, and isFetching should be false when FETCH_SONGS_COMPLETE', () => {

		let state = {
			currentPlaying : null,
			isFetching : true,
			items : [1,2,3]
		};

		let action = {
			type : FETCH_SONGS_COMPLETE,
			items : [4,5,6],
			receivedAt : 1234
		};

		let newState = reducer(state, action);

		let expectedState = {
			currentPlaying : null,
			isFetching : false,
			items : [1,2,3,4,5,6],
			lastUpdate : 1234
		}

		expect(newState).toEqual(expectedState, 'Should be equal');


	});

	it('Should update isFetching when FETCH_SONGS_INPROGRESS is triggered', () => {

		let state = {
			currentPlaying : null,
			isFetching : false,
			items : []
		};

		let action = {
			type : FETCH_SONGS_INPROGRESS
		};

		let newState = reducer(state, action);

		expect(newState).toEqual({
			currentPlaying : null,
			isFetching : true,
			items : []
		});

	});

});



