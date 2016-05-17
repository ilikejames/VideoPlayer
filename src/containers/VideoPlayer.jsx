import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchSongsIfNeeded } from '../actions/'


class VideoPlayer extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(fetchSongsIfNeeded());
		this.timer = setInterval(this.onTick.bind(this),3000);
	}

	componentWillUnMount() {
		clearInterval(this.timer);
	}

	onTick() {
		this.props.dispatch(fetchSongsIfNeeded());
	}

	render() {
		console.log('props', this.props);
		return (
			<div>
				<h1>Songs</h1>
				<h4>isFetching: { '' + this.props.isFetching }</h4>
				<h4>Length : { this.props.items.length }</h4>
				<ul>
					{this.props.items.map((item, i) =>
						<li key={i}>{item.title}</li>
					)}
				</ul>
			</div>
		)
	}

}


VideoPlayer.propTypes = {
	items: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	lastUpdated: PropTypes.number,
	dispatch: PropTypes.func.isRequired
}


function mapStateToProps(state) {

	const {
		isFetching,
		lastUpdate,
		items
	} = state.songs;/* || {
			isFetching: false,
			items: [],
			lastUpdate : 0
		}*/

	return {
		items,
		isFetching,
		lastUpdate
	}
}

export default connect(mapStateToProps)(VideoPlayer);


