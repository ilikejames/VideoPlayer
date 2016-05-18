
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class MainLayout extends Component {

	constructor(props) {
		super(props);
		this.state = {...props};
	}

	render() {
		return (
			<div>
				<h1>Logo</h1>
				<nav>
					<Link to="/" activeClassName="selected">home</Link>..
					<Link to="/counter"  activeClassName="selected">counter</Link>..
					<Link to="/missing"  activeClassName="selected">404</Link>
				</nav>
				<article>
					{this.props.children}
				</article>
			</div>
		)
	}
}
