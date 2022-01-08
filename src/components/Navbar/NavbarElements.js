import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";


export const Nav = styled.nav`
    background: white;
    height: 80px;
    display: flex;
    justify-content: space-between;
    
`

export const NavLink = styled(Link)`
    background: white;
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;

    }
`
export const Bars = styled(FaBars)`
    display: none;
    color: black;
    margin-top: 15px;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;


    @media screen and (max-width: 768px) {
        display: none;
    }
`