import React, { useRef } from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElement'
import { Link } from 'react-router-dom'
import { useDetectOutsideClick } from "../Navbar/useDetectOutsideClick";
import logoClean from "../Navbar/logo-clean.png";
import { FaAngleDown } from "react-icons/fa";
import "./Sidebar.css"

const Sidebar = ({isOpen, toggle}) => {
    const dropdownRef = useRef(null);
    const [sidebarDropIsActive, setSidebarDropIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setSidebarDropIsActive(!sidebarDropIsActive);

    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

                

            <SidebarWrapper>   
                <SidebarMenu>
                
                    <div style={{marginTop: "60px"}}> 
                    <SidebarLink to="/food-blog">
                    <img src={logoClean} activeStyle style={{height: "90px", width: "90px"}} />
                    </SidebarLink>
                    <span style={{color:"#8c0608", fontSize: '30px'}} class='textLogo'>Food Inspiration</span>
                    </div>
                 

                    <div className="container">
                          <div className="menudd-container">
                            <button onClick={onClick} className="menudd-trigger">
                              <span style={{fontSize: '150%', color: '#700000'}}>Рецепти&nbsp; <FaAngleDown /></span> 
                            </button>
          
                            <nav ref={dropdownRef} className={`menudd ${sidebarDropIsActive ? "active" : "inactive"}`} >
                              <ul>
                                <li><Link onClick={toggle} to="/food-blog/recipes/salad" >Салати</Link></li>
                                <li><Link onClick={toggle} to="/food-blog/recipes/soup" >Супи</Link></li>
                                <li><Link onClick={toggle} to="/food-blog/recipes/appetizer" >Предястия</Link></li>
                                <li><Link onClick={toggle} to="/food-blog/recipes/main-dish" >Основни ястия</Link></li>
                                <li><Link onClick={toggle} to="/food-blog/recipes/dessert" >Десерти</Link></li>
                                <li><Link onClick={toggle} to="/food-blog/recipes/pastry" >Тестени изделия</Link></li>
                              </ul>
                            </nav>
                          </div>
                      </div>


                    {/* <SidebarLink to="/food-blog/recipes"><div>Рецепти&nbsp;<FaAngleDown /></div></SidebarLink> */}
                    <SidebarLink to="/food-blog/inspire">Вдъхнови се тук</SidebarLink>
                    <SidebarLink to="/food-blog/about">За мен</SidebarLink>
                    <SidebarLink to="/food-blog/contacts">Контакт</SidebarLink>

                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
