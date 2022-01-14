import './App.css';

import { Slider, Slide } from './Slider';

import image1 from './assets/image_1.jpg';
import image2 from './assets/image_2.jpg';
import image3 from './assets/image_3.jpg';
import image4 from './assets/image_4.jpg';
import image5 from './assets/image_5.jpg';

const Master = () => {
  return (
    <div className="App">
      
      <div className="container">
        
        <Slider showNav>
          <Slide bg={image1}></Slide>
          <Slide>test</Slide>
          <Slide bg={image2}></Slide>
          <Slide bg={image3}></Slide>
          <Slide bg={image4}></Slide>
          <Slide bg={image5}></Slide>
        </Slider>
      </div>
    </div>
  );
}

export default Master;
