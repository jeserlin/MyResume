import React, { Component } from 'react';
import './Header.css';

// My Components
import CirclePhoto from '../circlePhoto/CirclePhoto';

class Header extends Component {
	render() {
		return (
			<header className="bg-dustyPink border-bottom-5-grey">
				<div className="container">
					<div className="down">
						<CirclePhoto />
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
