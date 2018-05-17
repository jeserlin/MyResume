import React, { Component } from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';

// Icons
import FaBriefcase from 'react-icons/lib/fa/briefcase';
import MdWork from 'react-icons/lib/md/work';
import MdSchool from 'react-icons/lib/md/school';

class Experience extends Component {

	render() {

		const getIcon = (type) => {
			switch(type) {
				case 'school':
					return <MdSchool />
				case 'work':
					return <MdWork />
				default:
					return <MdWork />
			}
		}

		const experience = this.props.experience.map((experience, index) =>
			<TimelineEvent
				key={index}
				title={experience.place}
				titleStyle={{fontWeight: "bold", color: "#6c757d", fontSize: "1.1em"}}
				subtitle={experience.startTime + " - " + experience.endTime}
				icon={getIcon(experience.type)}
				iconColor="#fd6766"
				contentStyle={{boxShadow: "none", color: "#6c757d"}}>
				{experience.description}
			</TimelineEvent>
		);

		return (
			<div className="container pt3">
				<div className="topic1 em2 pb">
    				<FaBriefcase className="em2"/> 學歷／工作經驗
    				<Timeline>{experience}</Timeline>
    			</div>
    			
			</div>
		);
	}
}

export default Experience;