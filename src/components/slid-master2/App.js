import './App.css';

import { Slide, Slider } from './Slider';

import image1 from './assets/image_1.jpg';
import image2 from './assets/image_2.jpg';
import image3 from './assets/image_3.jpg';
import image4 from './assets/image_4.jpg';
import image5 from './assets/image_5.jpg';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>React Slider</h1>
      </header>
      <div className="container">
        <Slider startFrom={2} showNav>
          <Slide>1</Slide>
          <Slide>2</Slide>
          <Slide>3</Slide>
          <Slide>4</Slide>
          <Slide>5</Slide>
          <Slide>6</Slide>
          <Slide>7</Slide>
          <Slide>8</Slide>
        </Slider>
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

export default App;
