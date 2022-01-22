import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import { FaAngleDown } from "react-icons/fa";

import logoClean from "./logo-clean.png";
// color: "#8c0608" -> logo color

const Navbar = ( { toggle } ) => {

    return (
        <>
            <Nav >

                <NavLink to="/" >
                <div style={{ margin: "40px 100px 10px 10px"}}>
                <img src={logoClean} activeStyle style={{height: "90px", width: "90px", color: "#8c0608"}} />
                <span style={{ color: "#8c0608", fontSize: "30px" , underline: "none"}}>Food Inspiration</span>
                </div>
                </NavLink>


                <NavMenu>
                    <div><NavLink to="/recipes"  activeStyle>Рецепти&nbsp;        <FaAngleDown /></NavLink></div>
                    <div><NavLink to="/inspire"  activeStyle>Вдъхнови се тук&nbsp;<FaAngleDown /></NavLink></div>
                    <div><NavLink to="/about"    activeStyle>За мен&nbsp;         <FaAngleDown /></NavLink></div>
                    <div><NavLink to="/contacts" activeStyle>Контакт&nbsp;        <FaAngleDown /></NavLink> </div>
                </NavMenu>
                
                <Bars onClick={toggle}/>
            </Nav>
            
        </>
    )
}

export default Navbar;
