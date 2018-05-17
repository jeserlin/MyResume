import React, { Component } from 'react';
import './App.css';

// My Components
import Header from './header/Header';
import Skill from './skill/Skill';
import Experience from './experience/Experience';
import Project from './project/Project';
import Footer from './footer/Footer';

// Icons
import FaGithub from 'react-icons/lib/fa/github';
import FaEnvelope from 'react-icons/lib/fa/envelope-o';

// Skills
import { skills } from './data/SkillFile';

// Experience
import { experience } from './data/ExperienceFile';

// Projects
import { projects } from './data/ProjectsFile';

class App extends Component {
  render() {
    return (
    	<div className="app">
    		<Header />
    		<div className="myInfo">
    			<div className="text-bold em3">邱宇瑨 ／ Jeserlin Chiu</div>
    			<div className="text-secondary em2">Software Engineer</div>
    			<div className="text-secondary em2">
    				<FaEnvelope />
    				<a className="text-secondary em1" href="mailto:jeserlin@me.com"> jeserlin@me.com</a>
    			</div>
    			<div className="text-secondary em2">
    				<FaGithub />
    				<a className="text-secondary em1" href="https://github.com/jeserlin"> github.com/jeserlin</a>
    			</div>
    		</div>
    		<Skill skills={skills} />
            <Experience experience={experience} />
            <Project projects={projects}/>
			<Footer />
    	</div>
    );
  }
}

export default App;
