import React, {useState} from 'react';
import {FaArrowCircleUp, FaCaretSquareUp , FaRegCaretSquareUp, FaChevronCircleUp} from 'react-icons/fa';
import './ScrollButton.css';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return ( <div className='scrollArrowContainer'>
  <FaChevronCircleUp className='scrollArrow' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}/>
          </div>
  );
}
  
export default ScrollButton;