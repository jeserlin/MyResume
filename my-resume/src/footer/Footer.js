import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

//Icons
import FaGithub from 'react-icons/lib/fa/github'
import FaWordPress from 'react-icons/lib/fa/wordpress'
import FaEnvelope from 'react-icons/lib/fa/envelope-o'
// My Components
import CirclePhoto from '../circlePhoto/CirclePhoto';

class Footer extends Component {
	render() {
		return (
			<footer className="bg-darkGray border-top-5-dustyPink">
				<div className="container">
					<div className="circlePhoto">
						<CirclePhoto/>
					</div>
					<p>Jeserlin Chiu</p>
					<p>Software Developer</p>
					<p>Thanks for visiting my website!</p>
					<dl className="row">
						<dt className="col-xs-6"><FaGithub /> Github</dt>
						<dd className="col-xs-6"><a href="https://github.com/jeserlin">github.com/jeserlin</a></dd>
						<dt className="col-xs-6"><FaWordPress /> WordPress</dt>
						<dd className="col-xs-6"><a href="https://jeserlin.wordpress.com">jeserlin.wordpress.com</a></dd>
						<dt className="col-xs-6"><FaEnvelope /> Email</dt>
						<dd className="col-xs-6"><a href="mailto:jeserlin@me.com">jeserlin@me.com</a></dd>
					</dl>
				</div>
			</footer>
		);
	}
}

export default Footer;