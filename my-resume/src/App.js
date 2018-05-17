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

// Projects
const projects = [
    {type:'site', name: 'My Family Tree', img:'myFamilyTree.png', github: 'https://github.com/jeserlin/MyFamilyTree', githubIo: 'https://jeserlin.github.io/MyFamilyTree/myFamilyTree.html', skills:['javascript', 'SVG'], description: 'My Family Tree is a site that you can upload your family members photos to make a svg family tree.'},
    {type:'site',name: 'Real-time YouBike Info.', img:'youBike.png', github: 'https://github.com/jeserlin/Realtime-YouBikeInfo', githubIo: '', skills:[], description: 'Realtime- YouBike Info. uses Google Map as base. It shows real-time Youbike data from Data.Taipei.(open data from Taipei government, Taiwan)'},
    {type:'site',name: 'Trip Helper', img:'tripHelper.png', github: '', githubIo: '', skills:[], description: 'Trip Helper is a site that you can easily arrange your trip (Base on google map).It has two major parts : Travel Arrangements and Direction Service.'},
    {type:'work',name: '107年戶役政綠色便民及資安強化計畫案', img:'green.png', github: '', githubIo: '', skills:[], description: '新版戶役政RWD頁面製作,新版幸福小站RWD頁面製作,新版內政部兒童版RWD網站製作,空白國民身分證及膠膜安全控管系統,教育程度通報作業系統,線上兵籍調查,司長信箱,107年單身聯誼活動,我的家族(SVG)'},
    {type:'work',name: '台61線西濱快速公路交通資訊蒐集及顯示系統建置', img:'t61.png', github: '', githubIo: '', skills:[], description: '交通資料收集軟體,自動車輛辨識資料收集軟體,旅行時間推估軟體,能見度資料收集軟體,雨量資料收集軟體'},
    {type:'work',name: '交通部公路總局蘇花公路改善工程處', img:'t9.png', github: '', githubIo: '', skills:[], description: '交通資料收集軟體,自動車輛辨識資料收集軟體,旅行時間推估軟體,能見度資料收集軟體,雨量資料收集軟體,事件影響分析'},
    {type:'work',name: '105省道即時路況交通資訊蒐集及控制系統功能擴充與維護工作', img:'motc.png', github: '', githubIo: '', skills:[], description: '動態地圖(Google Maps API)'},
    {type:'work',name: '104區域交通控制中心雲端化計畫', img:'sit.png', github: '', githubIo: '', skills:[], description: '報表產生軟體,動態地圖(Google Maps API)'},
    {type:'work',name: '非洲史瓦濟蘭MR3高速公路子第一期交控系統', img:'swaziland.png', github: '', githubIo: '', skills:[], description: '動態地圖(Google Maps API),協助程式移植'},
    {type:'work',name: '104臺北市交通控制監控及資料蒐集系統工程', img:'taipei.png', github: '', githubIo: '', skills:[], description: '旅行時間資料收集軟體'},
    {type:'work',name: '104宜蘭縣Etag系統建置暨交控系統擴充計畫 （已改版）', img:'yilan.png', github: '', githubIo: '', skills:[], description: '手機版網頁開發'},
    {type:'work',name: '104桃園市易壅塞道路改善暨交通系統系統功能提升服務工作', img:'taoyuan.png', github: '', githubIo: '', skills:[], description: '動態地圖(Google Maps API）,協助桃園市交通資訊中心網站取得無障礙標章'},
    {type:'work',name: '104桃園市交通管制設施管理系統功能擴充建置服務工作', img:'taoyuan.png', github: '', githubIo: '', skills:[], description: '備品管理系統'},
    {type:'site',name: 'My Github', img:'github.png', github: '', githubIo: '', skills:[], description: 'Check here to see more!'}
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
            <Project projects={projects}/>
			<Footer />
    	</div>
    );
  }
}

export default App;
