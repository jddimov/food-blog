import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

import logoClean from "./logo-clean.png";

const Navbar = () => {
    return (
        <>
            <Nav style={{position: "fixed", width: "100%" }}>
                <NavLink to="/">
                <img src={logoClean} activeStyle style={{height: "90px", width: "290px", margin: "40px 50px 10px 10px"}} />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/recipes" activeStyle>Рецепти</NavLink>


                    <NavLink to="/inspire" activeStyle>
                        Вдъхнови се тук
                    </NavLink>
                    
                    <NavLink to="/about" activeStyle>
                        За мен
                    </NavLink>


                    <NavLink to="/contacts" activeStyle>
                        Контакт
                    </NavLink>
                    
                </NavMenu>
                
            </Nav>
            
        </>
    )
}

export default Navbar;
