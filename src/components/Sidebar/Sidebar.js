import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElement'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    
                    <SidebarLink to="recipes">recipes</SidebarLink>
                    <SidebarLink to="inspire">inspire</SidebarLink>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="contacts">contacts</SidebarLink>
                    
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
