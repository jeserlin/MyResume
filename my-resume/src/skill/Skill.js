import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './Skill.css';

class Skill extends Component {
	render() {

		function SkillDetails(props) {
			const content = props.data.skill.map((skill, index) => 
				<li key={index}>{skill}</li>
			);
			return (<ul>{content}</ul>);
		}

		const skillPabel = this.props.skills.map((skill, index) =>
			<div key={index} className="text-secondary col-xs-12 col-sm-6 col-md-4">
				<Panel className="panel-pink em1">
				    <Panel.Heading>
						<Panel.Title componentClass="h3">{skill.name}</Panel.Title>
				    </Panel.Heading>
				    <Panel.Body>
				    	<SkillDetails data={skill} />
				   	</Panel.Body>
			  	</Panel>
			</div>
		);

		return (
			<div className="container">
				{skillPabel}
			</div>
		);
	}
}

export default Skill;