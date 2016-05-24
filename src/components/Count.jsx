import React, { Component, PropTypes } from 'react'
import './Count.scss'

export default class Count extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		let label = this.props.running ? 'stop' : 'start';

		return (
			<h2>
				<span class="count_status">Running: {'' + this.props.running }. </span>
				<span class="count_value">At {this.props.value} seconds. </span>
				<button onClick={this.props.toggleCounter}>{label}</button>
			</h2>
		)
	}
}


Count.propTypes = {
	value : PropTypes.number,
	running : PropTypes.bool,
	toggleCounter : PropTypes.func.isRequired
}


Count.defaultProps = {
	value : 0,
	running : false
}





