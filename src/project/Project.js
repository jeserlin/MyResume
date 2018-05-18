import React, { Component } from 'react';
import { Image, Badge } from 'react-bootstrap';
import './Project.css';
// Icons
import FaCode from 'react-icons/lib/fa/code';
import FaGithub from 'react-icons/lib/fa/github';

class Project extends Component {

	render() {
		
		const SiteHead = (props) => {
			const data = props.data;
			return (
				<a href={data.githubIo}>
					<Image src={require('../img/portfolio/' + data.img)} responsive />
				</a>
			);
		}

		const SiteContent = (props) => {
			const data = props.data;
			return (
				<div className="card-body">
					<a className="text-secondary" href={data.githubIo}>
						<h4 className="card-title text-secondary">
							{data.name}
						</h4>
					</a>
					<p className="card-text">
						{data.description}
				    </p>
				     <p className="card-text">
				      	<FaGithub className="text-secondary em2"/>
				      	<a className="text-secondary" href={data.github}>
							<span> see in Github</span>
				      	</a>
					</p>
				</div>
			);
		}

		const WorkHead = (props) => {
			const data = props.data;
			return (
				<center className="pt1">
					<Image className="width150" src={require('../img/portfolio/' + data.img)} responsive />
				</center>
			);
		}

		const WorkContent = (props) => {
			const data = props.data;
			const funcList = data.description.split(",").map((element, index) => 
				<li key={index}>{element}</li>
			);
			return (
				<div className="card-body">
					<h4 className="card-title text-secondary">
						{data.name}
					</h4>
					<ul className="text-secondary">
						{funcList}
					</ul>
				</div>
			);
		}

		const Footer = (props) => {
			const data = props.data;
			const badges = data.skills.map((element, index) =>
				<Badge key={index} className="margin">#{element}</Badge>
			);
			return (
				<div className="card-footer border-dustyPink">
					<small className="text-secondary">
						{badges}
					</small>
				</div>
			);
		}

		const projects = this.props.projects.map((project, index) => {
			if(project.type === "site") {
				return	(
					<div key={index} className="card border-dustyPink">
						<SiteHead data={project} />
						<SiteContent data={project} />
						<Footer data={project} />
					</div>
				);
			} else {
				return (
					<div key={index} className="card border-dustyPink">
						<WorkHead data={project} />
						<WorkContent data={project} />
						<Footer data={project} />
					</div>
				);
			}
		});

		return (
			<div className="container pt3">
				<div className="topic1 em2 pb">
			 		<FaCode className="em2" /> 作品
				</div>
				<div className="card-columns">
					{projects}
				</div>
			</div> 
		);
	}
}

export default Project;