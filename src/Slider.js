import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import one from './images/(1).jpg'
import two from './images/(2).jpg'
import three from './images/(3).jpg'
import four from './images/(4).jpg'
import "./Slider.css"

export default function Slider() {
return (
	<div >
	<Carousel>
		<Carousel.Item interval={2500} className='item'>
		<img
			className="d-block w-100 imgg"
			src={one}
			alt="Image One"
		/>
		<Carousel.Caption className='text'>
			<h3>Т-боун стек от блек ангъс</h3>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={2500} className='item'>
		<img
			className="d-block w-100 imgg"
			src={two}
			alt="Image Two"
		/>
		<Carousel.Caption className='text'>
			<h3>Лава кейк с белгийски шоколад</h3>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={2500} className='item'>
		<img
			className="d-block w-100 imgg"
			src={three}
			alt="Image Two"
		/>
		<Carousel.Caption className='text'>
			<h3>Хрупкава дърпана баница</h3>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={2500} className='item'>
		<img
			className="d-block w-100 imgg"
			src={four}
			alt="Image Two"
		/>
		<Carousel.Caption className='text'>
			<h3>Печено пиле по китайски</h3>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
);
}
