import React, { Component } from 'react';
import './App.css';

// My Components
import Header from './header/Header';
import Skill from './skill/Skill';
import Experience from './experience/Experience';
import Footer from './footer/Footer';

// Icons
import FaGithub from 'react-icons/lib/fa/github';
import FaEnvelope from 'react-icons/lib/fa/envelope-o';


// Skills
const skills = [
    {name: 'Web Backend', skill: ['java7','java8']},
    {name: 'Web Frontend', skill: ['RWD','HTML5','CSS3','ES5/ES6']},
    {name: 'API / Plugins', skill: ['Bootstrap 3/4', 'react-bootstrap','jQuery', 'Google Maps API', 'Highcharts', 'font-awesome']},
    {name: 'Database', skill:['SQL Server', 'MySQL', 'PostgreSQL', 'infomix']},
    {name: 'Framework/Others', skill:['Spring MVC', 'Hibernate', 'React', 'github / git', 'SVN', 'webSocket', 'Regular expression', 'i18n']},
    {name: 'Language', skill:['English - TOEIC 850', 'French - DELF B2']}
];

// Experience
const experience = [
    {type:'work', place: '資拓宏宇國際股份有限公司', startTime:'2015年7月', endTime:'現在', description:'主要負責智慧交通控制系統及戶役政系統'},
    {type:'school', place: '系統開發實務專班', startTime:'2014年9月', endTime:'2015年6月', description:'資拓宏宇國際股份有限公司 與 輔仁大學數學系 合辦系統開發實務專班'},
    {type:'school', place: '輔仁大學', startTime:'2011年9月', endTime:'2015年6月', description:'法國語文學系'}
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
    		<Skill skills={skills} />
            <Experience experience={experience} />
			<Footer />
    	</div>
    );
  }
}

export default App;
