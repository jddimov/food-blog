import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElement'
import logoClean from "../Navbar/logo-clean.png";
import "./Sidebar.css"

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

                

            <SidebarWrapper>   
                <SidebarMenu>
                
                    <div style={{marginTop: "60px"}}> 
                    <SidebarLink to="/">
                    <img src={logoClean} activeStyle style={{height: "90px", width: "90px"}} />
                    </SidebarLink>
                    <span style={{color:"#8c0608", fontSize: '30px'}} class='textLogo'>Food Inspiration</span>
                    </div>
                 

                    <SidebarLink to="/recipes">Рецепти</SidebarLink>
                    <SidebarLink to="/inspire">Вдъхнови се тук</SidebarLink>
                    <SidebarLink to="/about">За мен</SidebarLink>
                    <SidebarLink to="/contacts">Контакт</SidebarLink>

                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
