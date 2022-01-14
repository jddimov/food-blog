import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import { FaAngleDown } from "react-icons/fa";

import logoClean from "./logo-clean.png";

const Navbar = ( { toggle } ) => {

    return (
        <>
            <Nav >

                <NavLink to="/">
                <img src={logoClean} activeStyle style={{height: "90px", width: "290px", margin: "40px 100px 10px 10px"}} />
                </NavLink>


                <NavMenu>

                    <div><NavLink to="/recipes" activeStyle>Рецепти&nbsp;<FaAngleDown /></NavLink></div>
                    

                    <div><NavLink to="/inspire" activeStyle>Вдъхнови се тук&nbsp;<FaAngleDown /></NavLink></div>
                    

                    <div><NavLink to="/about" activeStyle>За мен&nbsp;<FaAngleDown /></NavLink></div>
                    

                    <div><NavLink to="/contacts" activeStyle>Контакт&nbsp;<FaAngleDown /></NavLink> </div>
                    
                </NavMenu>
                
                <Bars onClick={toggle}/>
            </Nav>
            
        </>
    )
}

export default Navbar;
