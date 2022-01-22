import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElement'
import logoClean from "../Navbar/logo-clean.png";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

                <SidebarLink to="/" >
                    <img src={logoClean} activeStyle style={{height: "90px", width: "90px", margin: "40px 250px 10px 10px"}} />
                 </SidebarLink>

            <SidebarWrapper>
                    
                <SidebarMenu>
                    
                    
                   
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
