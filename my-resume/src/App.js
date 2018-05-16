import React, { Component } from 'react';
import './App.css';

// My Components
import Header from './header/Header';
import Skill from './skill/Skill';
import Footer from './footer/Footer';

// Icons
import FaGithub from 'react-icons/lib/fa/github';
import FaEnvelope from 'react-icons/lib/fa/envelope-o';
import FaLight from 'react-icons/lib/fa/lightbulb-o';

// Skills
const skills = [
    {name: 'Web Backend', skill: ['java7','java8']},
    {name: 'Web Frontend', skill: ['RWD','HTML5','CSS3','ES5/ES6']},
    {name: 'API / Plugins', skill: ['Bootstrap 3/4', 'react-bootstrap','jQuery', 'Google Maps API', 'Highcharts', 'font-awesome']},
    {name: 'Database', skill:['SQL Server', 'MySQL', 'PostgreSQL', 'infomix']},
    {name: 'Framework/Others', skill:['Spring MVC', 'Hibernate', 'React', 'github / git', 'SVN', 'webSocket', 'Regular expression', 'i18n']},
    {name: 'Language', skill:['English - TOEIC 850', 'French - DELF B2']}
];

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
    		<div className="container pt3">
    			<div className="topic1 em2 pb">
    				<FaLight className="em2"/> 技能
    			</div>
    			<Skill skills={skills} />
    		</div>
			<Footer />
    	</div>
    );
  }
}

export default App;
