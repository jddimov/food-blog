import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

import logoClean from "./logo-clean.png";

const Navbar = ( { toggle } ) => {

    return (
        <>
            <Nav >

                <NavLink to="/">
                <img src={logoClean} activeStyle style={{height: "90px", width: "290px", margin: "40px 250px 10px 10px"}} />
                </NavLink>


                <NavMenu>
                    <NavLink to="/recipes" activeStyle>Рецепти</NavLink>

                    <NavLink to="/inspire" activeStyle>Вдъхнови се тук</NavLink>
                    
                    <NavLink to="/about" activeStyle>За мен</NavLink>

                    <NavLink to="/contacts" activeStyle>Контакт</NavLink> 
                </NavMenu>
                
                <Bars onClick={toggle}/>
            </Nav>
            
        </>
    )
}

export default Navbar;
