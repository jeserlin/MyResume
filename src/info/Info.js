import React, { Component } from 'react';
import './Info.css';

// Icons
import FaGithub from 'react-icons/lib/fa/github';
import FaEnvelope from 'react-icons/lib/fa/envelope-o';

class Info extends Component {

	render() {
		const data = this.props.info;
		return (
			<div className="myInfo">
    			<div className="name">{data.name}</div>
    			<div>{data.job}</div>
    			<div>
    				<FaEnvelope />
    				<a href={"mailto:https://" + data.email}> {data.email} </a>
    			</div>
    			<div>
    				<FaGithub />
    				<a href={"https://" + data.github}> {data.github} </a>
    			</div>
    			<div className="pt">{data.welcome}</div>
    		</div>
		);
	}
}
export default Info;