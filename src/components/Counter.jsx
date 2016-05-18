import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { startCounter, toggleCounter } from '../actions/'

class Counter extends Component {

	constructor(props) {
		super(props);
	}

    toggleCounter() {
    	this.props.dispatch(toggleCounter());
    }

	render() {

		var startStopButton;
		if(this.props.isRunning) {
			startStopButton = (<button onClick={this.toggleCounter.bind(this)}>stop</button>);
		}
		else {
			startStopButton = (<button onClick={this.toggleCounter.bind(this)}>start</button>);
		}

		return (
			<header>
				<h2>Running: { '' + this.props.isRunning }. At {this.props.value} seconds. {startStopButton}</h2>
			</header>
		)
	}
}


Counter.propTypes = {
	value : React.PropTypes.number,
	isRunning : React.PropTypes.bool
}

Counter.defaultProps = {
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

export default connect(mapStateToProps)(Counter);


