import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'
import { NavLink as Links } from "react-router-dom";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #ffedf6 ,  #ffdfb9);
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: black;

    &:hover {
        color: #8c0608;
        transition: 0.2s ease-in-out;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: red;
`

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-items: flex-start;
    gap: 30px;
`

export const SidebarLink = styled(Links)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.5rem;
    text-decoration: none;
    line-style: none;
    transition: 0.2s ease-in-out;
    color: black;
    cursor: pointer;

    &:hover {
        color: #8c0608;
        text-decoration: underline;
        transition: 0.2s ease-in-out;
        
    }
`
