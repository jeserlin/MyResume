import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Navbar,Nav, Image } from 'react-bootstrap';
import './NavBar.css';
import logo from '../img/yuan.png';

class NavBar extends Component {
	render() {
		return(
			<Navbar fixedTop className="bg-dustyPink">
				<Navbar.Header>
			    	<Navbar.Brand>
			      	<a className="navbar-brand" href="#brand">
			      		<Col xs={3}>
			      			<img className="logo" src={logo} alt="logo"/>
			      		</Col>
			      		<Col xs={6}>
			      			<div className="logo-text">Jeserlin</div>
			      		</Col>
			      	</a>
			    	</Navbar.Brand>
			  	</Navbar.Header>
			</Navbar>
		);
	}
}

export default NavBar;