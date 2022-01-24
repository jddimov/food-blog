import React, { useRef } from 'react'
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import { Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";
import "./Navbar.css"
import { useDetectOutsideClick } from "./useDetectOutsideClick";

import logoClean from "./logo-clean.png";
// color: "#8c0608" -> logo color



const Navbar = ( { toggle } ) => {
    const dropdownRef = useRef(null);
    const [dropDownIsActive, setDropDownIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setDropDownIsActive(!dropDownIsActive);
    
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
                
                    <div className='menu'>
                    {/* <NavLink  to="/recipes"  activeStyle> */}
                    

                    <div className="container">
                        <div className="menudd-container">
                          <button onClick={onClick} className="menudd-trigger">
                            <span style={{fontSize: '150%', color: '#700000'}}>Рецепти&nbsp; <FaAngleDown /></span> 
                          </button>
        
                          <nav ref={dropdownRef} className={`menudd ${dropDownIsActive ? "active" : "inactive"}`} >
                            <ul>
                              <li><Link to="/recipes/salad" >Салати</Link></li>
                              <li><Link to="/recipes/soup" >Супи</Link></li>
                              <li><Link to="/recipes/appetizer" >Предястия</Link></li>
                              <li><Link to="/recipes/main-dish" >Основни ястия</Link></li>
                              <li><Link to="/recipes/dessert" >Десерти</Link></li>
                              <li><Link to="/recipes/pastry" >Тестени изделия</Link></li>
                              
                              
                            </ul>
                          </nav>
                        </div>
                    </div>
                         {/* </NavLink> */}
                         
                    </div>
                    <div className='menu'><NavLink to="/inspire"  activeStyle>Вдъхнови се тук&nbsp;<FaAngleDown /></NavLink></div>
                    <div className='menu'><NavLink to="/about"    activeStyle>За мен&nbsp;                        </NavLink></div>
                    <div className='menu'><NavLink to="/contacts" activeStyle>Контакт&nbsp;                       </NavLink></div>
                </NavMenu>
                <Bars onClick={toggle} />
            </Nav>
        </>
    )
}

export default Navbar;
