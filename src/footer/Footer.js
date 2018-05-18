import React, { Component } from 'react';
import './Footer.css';

//Icons
import FaGithub from 'react-icons/lib/fa/github'
import FaWordPress from 'react-icons/lib/fa/wordpress'
import FaEnvelope from 'react-icons/lib/fa/envelope-o'

// My Components
import CirclePhoto from '../circlePhoto/CirclePhoto';

class Footer extends Component {

	render() {
		const data = this.props.info;
		return (
			<footer className="bg-darkGray border-top-5-dustyPink">
				<div className="container">
					<div className="top">
						<CirclePhoto/>
					</div>
					<p>{data.name}</p>
					<p>{data.job}</p>
					<p>{data.bye}</p>
					<dl className="row">
						<dt className="col-xs-5 col-sm-6"><FaGithub /> Github </dt>
						<dd className="col-xs-7 col-sm-6">
							<a className="text-white" href={"https://" + data.github}> {data.github} </a>
						</dd>
						<dt className="col-xs-5 col-sm-6"><FaWordPress /> WordPress</dt>
						<dd className="col-xs-7 col-sm-6">
							<a className="text-white" href={"https://" + data.wordPress}> {data.wordPress} </a>
						</dd>
						<dt className="col-xs-5 col-sm-6"><FaEnvelope /> Email</dt>
						<dd className="col-xs-7 col-sm-6">
							<a className="text-white" href={"mailto:https://" + data.email}> {data.email} </a>
						</dd>
					</dl>
				</div>
			</footer>
		);
	}
}

export default Footer;