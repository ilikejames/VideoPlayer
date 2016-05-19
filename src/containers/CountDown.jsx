import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleCounter } from '../actions/'
import Count from 'components/Count'


class CountDown extends Component {

	constructor(props) {
		super(props);
	}

    toggleCounter() {
    	this.props.dispatch(toggleCounter());
    }

	render() {
		return (
			<Count
				value={ this.props.value }
				running={ this.props.isRunning }
				toggleCounter={ this.toggleCounter.bind(this) } />
		)
	}
}


CountDown.propTypes = {
	value : React.PropTypes.number,
	isRunning : React.PropTypes.bool
}

CountDown.defaultProps = {
	value : 0,
	isRunning : false
}


function mapStateToProps(state) {

	const {
		isRunning,
		value
	} = state.counter;

	return {
		isRunning,
		value
	}
}

export default connect(mapStateToProps)(CountDown)
export {CountDown as CountDown}	// for tests



