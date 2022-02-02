import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import one from './(1).jpg'
import two from './(2).jpg'
import three from './(3).jpg'
import four from './(4).jpg'
import "./Slider.css"

export default function Slider() {
return (
	<div >
	<Carousel>
		<Carousel.Item interval={3500} className='item'>
		<Link to="/recipes/salad/summer-mint-salad/" >
		<img
			className="d-block w-100 imgg"
			src={one}
			alt="Image One"
		/></Link>
		<Carousel.Caption className='textCarousel'>
			<h3>Лятна салата с мента</h3>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={3500} className='item'>
		<Link to="/recipes/dessert/banana-bread" >
		<img
			className="d-block w-100 imgg"
			src={two}
			alt="Image Two"
		/></Link>
		<Carousel.Caption className='textCarousel'>
			<h3>Бананов хляб</h3>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={3500} className='item'>
		<Link to="/recipes/dessert/pancakes-with-yoghurt" >
		<img
			className="d-block w-100 imgg"
			src={three}
			alt="Image Two"
		/></Link>
		<Carousel.Caption className='textCarousel'>
			<h3>Катми със сладко</h3>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={3500} className='item'>
		<Link to="/recipes/pastry/sweet-bread" >
		<img
			className="d-block w-100 imgg"
			src={four}
			alt="Image Two"
		/></Link>
		<Carousel.Caption className='textCarousel' style={{fontSize: '100px'}}>
			<h3>Великденски козунак</h3>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
);
}