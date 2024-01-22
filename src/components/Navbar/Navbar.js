import React, { useRef, useState } from 'react'
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import { Link } from 'react-router-dom'
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import "./Navbar.css"
import { useDetectOutsideClick } from "./useDetectOutsideClick";

import logoClean from "./logo-clean.png";
// color: "#8c0608" -> logo color



const Navbar = ( { toggle } ) => {
    const dropdownRef = useRef(null);
    const [dropDownIsActive, setDropDownIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => {setDropDownIsActive(!dropDownIsActive) 
      if (!dropDownIsActive) {
        setStyle("cont2");
      }  if (dropDownIsActive){ setStyle("cont");}
    } 
    
    const [style, setStyle] = useState("cont");
    

    return (
        <>
            <Nav >
            
                <NavLink to="/" onClick={() => window.reload()}>
                <div style={{ margin: "10px 100px 10px 10px"}}>
                <img src={logoClean}  style={{height: "60px", width: "60px", color: "#8c0608"}} alt="logo"/>
                <span className='foodInspiration' >Food Inspiration</span>
                </div>
                </NavLink>

                <NavMenu>
                
                    <div className='menu' >                  
                      <div className="container">
                          <div className="menudd-container">
                            <button onClick={onClick} className="menudd-trigger">
                              <span style={{fontSize: '150%', color: '#700000'}}>Рецепти&nbsp; <FaAngleDown className={style}  /></span> 
                            </button>
          
                            <nav ref={dropdownRef} className={`menudd ${dropDownIsActive ? "active" : "inactive"}`} >
                              <ul>
                                <li><Link onClick={onClick} to="/recipes/salad" ><FaAngleRight />Салати</Link></li>
                                <li><Link onClick={onClick} to="/recipes/soup" ><FaAngleRight />Супи</Link></li>
                                <li><Link onClick={onClick} to="/recipes/appetizer" ><FaAngleRight />Предястия</Link></li>
                                <li><Link onClick={onClick} to="/recipes/main-dish" ><FaAngleRight />Основни ястия</Link></li>
                                <li><Link onClick={onClick} to="/recipes/dessert" ><FaAngleRight />Десерти</Link></li>
                                <li><Link onClick={onClick} to="/recipes/pastry" ><FaAngleRight />Тестени изделия</Link></li>
                              </ul>
                            </nav>
                          </div>
                      </div>
                         
                    </div>
                    <div className='menu' ><NavLink to="/inspire"  >Вдъхнови се тук&nbsp;<FaAngleDown /></NavLink></div>
                    <div className='menu' ><NavLink to="/about"    >За мен&nbsp;                        </NavLink></div>
                    <div className='menu' ><NavLink to="/contacts" >Контакт&nbsp;                       </NavLink></div>
                </NavMenu>
                <Bars onClick={toggle} />
            </Nav>
        </>
    )
}

export default Navbar;
