import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import { FaAngleDown } from "react-icons/fa";
import "./Navbar.css"

import logoClean from "./logo-clean.png";
// color: "#8c0608" -> logo color

const Navbar = ( { toggle } ) => {

    return (
        <>
            <Nav >
            
                <NavLink to="/" >
                <div style={{ margin: "40px 100px 10px 10px"}}>
                <img src={logoClean}  style={{height: "90px", width: "90px", color: "#8c0608"}} />
                <span className='foodInspiration' >Food Inspiration</span>
                </div>
                </NavLink>

                <NavMenu>
                    <div className='menu'><NavLink  to="/recipes"  activeStyle>Рецепти&nbsp;       <FaAngleDown /></NavLink></div>
                    <div className='menu'><NavLink to="/inspire"  activeStyle>Вдъхнови се тук&nbsp;<FaAngleDown /></NavLink></div>
                    <div className='menu'><NavLink to="/about"    activeStyle>За мен&nbsp;         <FaAngleDown /></NavLink></div>
                    <div className='menu'><NavLink to="/contacts" activeStyle>Контакт&nbsp;        <FaAngleDown /></NavLink></div>
                </NavMenu>
                <Bars onClick={toggle} />
            </Nav>
        </>
    )
}

export default Navbar;
