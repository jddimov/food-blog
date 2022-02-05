import React, { useRef } from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink } from './SidebarElement'
import { useDetectOutsideClick } from "../Navbar/useDetectOutsideClick";
import logoClean from "../Navbar/logo-clean.png";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import "./Sidebar.css"
import { Link } from "react-router-dom"

const Sidebar = ({isOpen, toggle}) => {
    const dropdownRef = useRef(null);
    const [sidebarDropIsActive, setSidebarDropIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setSidebarDropIsActive(!sidebarDropIsActive);

    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
               
                <SidebarMenu>
                  
                    <div style={{marginTop: "60px"}}> 
                    <SidebarLink  onClick={() => { {toggle()}; window.reload(); }} to="/">
                    <img src={logoClean} activeStyle style={{height: "90px", width: "90px"}} />
                    </SidebarLink>
                    
                    <Link to="/" style={{ textDecoration: 'none' }} onClick={() => { {toggle()}; window.reload(); }}><span class='textLogo'>Food Inspiration</span></Link>
                    </div>
                          <div className="menusb-cont">
                            <button onClick={onClick} className='dropbtn'>
                              <span style={{fontSize: '150%', color: 'black'}}>Рецепти&nbsp; <FaAngleDown /></span> 
                            </button>
                          </div>
            
                            <div ref={dropdownRef} className={`menusb ${sidebarDropIsActive ? "active" : "inactive"}`}> 
                            
                            <SidebarLink onClick={toggle} to="/recipes/salad" >     <FaAngleRight />Салати</SidebarLink>
                            <SidebarLink onClick={toggle} to="/recipes/soup" >      <FaAngleRight />Супи</SidebarLink>
                            <SidebarLink onClick={toggle} to="/recipes/appetizer" > <FaAngleRight />Предястия</SidebarLink>
                            <SidebarLink onClick={toggle} to="/recipes/main-dish" > <FaAngleRight />Основни ястия</SidebarLink>
                            <SidebarLink onClick={toggle} to="/recipes/dessert" >   <FaAngleRight />Десерти</SidebarLink>
                            <SidebarLink onClick={toggle} to="/recipes/pastry" >    <FaAngleRight />Тестени изделия</SidebarLink>
                            </div>
                    <SidebarLink onClick={toggle} to="/inspire">Вдъхнови се тук</SidebarLink>
                    <SidebarLink onClick={toggle} to="/about">За мен</SidebarLink>
                    <SidebarLink onClick={toggle} to="/contacts">Контакт</SidebarLink>

                </SidebarMenu>
         
        </SidebarContainer>
    )
}

export default Sidebar
