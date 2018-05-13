import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CirclePhoto.css';
import { Image } from 'react-bootstrap';
import myPic from '../img/myPic.jpg';

class CirclePhoto extends Component {
	render() {
		return (
			<Image className="img-thumbnail-dustyPink img" src={myPic} circle />
		);
	}
}

export default CirclePhoto;