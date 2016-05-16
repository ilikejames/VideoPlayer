import React, {Component, PropTypes} from 'react';


export default class Counter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items : [1,2,3,4],
			...props
		};
	}

	componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

	tick() {
		this.setState({count: this.state.count + 1});
	}

	onClick(e) {
		console.log(this);
	}

	onItemClick(index, o, some, e) {
		console.log('onItemClick', this, index, o, some, e);
	}

	render() {
		return (
			<header>
				<h2>Counter {this.state.count} seconds.</h2>
				<div>Something after. <a onClick={this.onClick.bind(this)}>CLICK ME</a></div>
				{
					this.state.items.map(x=>(
					<div key={x} onClick={this.onItemClick.bind(this, x)}>item : {x}</div>
					))
				}
				<hr/>
			</header>
		)
	}
}

Counter.propTypes = {
	count : React.PropTypes.number,
	align : React.PropTypes.oneOf(['left', 'center', 'right']).isRequired
}

Counter.defaultProps = {
	count : 1000,
	align : 'left'
}


