
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
				<hr/>
				<pre>{JSON.stringify(this.state.location)}</pre>
				<article>
					<nav>
						<Link to="/" activeClassName="selected">home</Link> |
						<Link to="/counter"  activeClassName="selected">counter</Link> |
						<Link to="/missing"  activeClassName="selected">missing</Link>
					</nav>

					{this.props.children}
				</article>
			</div>
		)
	}
}
