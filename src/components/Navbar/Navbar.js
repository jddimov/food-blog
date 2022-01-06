import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavbarElements";
import red from "./red-arrow.png";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo img</h1>
                </NavLink>
                
                <NavMenu>
                    <NavLink to="/recipes" activeStyle>
                        Рецепти
                    </NavLink>
                    <img src={red} style={{height: "15px", width: "15px", background: "white"}}></img>
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
                <NavBtn>
                    <NavBtnLink to="/signin>">Sign in</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;
