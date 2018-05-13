import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// My Components
import NavBar from './navBar/NavBar';
import CirclePhoto from './circlePhoto/CirclePhoto';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
    	<div className="app">
    		<NavBar />
			<center>
				<CirclePhoto />
			</center>
			<Footer />
    	</div>
    );
  }
}

export default App;
