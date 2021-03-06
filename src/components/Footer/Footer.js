import React from 'react';
import "./Footer.css"
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return <div>
<div className='footerContainer'>
<div></div>
  <div className='socialIconsContainer'>
    <a className='socialIcons' href='https://www.instagram.com/lori_plamenova/'><FaInstagram size={40}/></a>
    <a className='socialIcons' href='https://www.facebook.com/lori.plamenova/'><FaFacebook size={40}/></a>
    <a className='socialIcons' href="loriplamenova93@gmail.com"><FaEnvelope  size={40}/></a>
  </div>

<div className='trademarkFooter'><b>Copyright &copy;{(new Date().getFullYear())} Food Inspiration | All Rights Reserved</b></div>
</div>

  </div>;
}

export default Footer;
