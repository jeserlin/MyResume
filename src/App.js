import React, { Component } from 'react';
import './App.css';

// My Components
import Header from './header/Header';
import Info from './info/Info';
import Skill from './skill/Skill';
import Experience from './experience/Experience';
import Project from './project/Project';
import Footer from './footer/Footer';

// Info
import { info } from './data/InfoFile';
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
    		<Info info={info} />
    		<Skill skills={skills} />
            <Experience experience={experience} />
            <Project projects={projects}/>
			<Footer info={info}/>
    	</div>
    );
  }
}

export default App;
