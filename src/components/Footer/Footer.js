import React from 'react';
import "./Footer.css"
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return <div>
<div className='footerContainer'>
<div></div>
  <div className='socialIcons'>
    <FaInstagram size={40}/>
    <FaFacebook size={40}/>
    <FaEnvelope size={40}/>
  </div>

<div className='trademarkFooter'>&copy;{(new Date().getFullYear())} Food Inspiration | All Rights Reserved</div>
</div>


  </div>;
}

export default Footer;
