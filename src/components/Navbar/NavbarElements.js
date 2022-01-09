import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";


export const Nav = styled.div`
    background: white;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    position: fixed;
    width: 100%;
    
`

export const NavLink = styled(Link)`
    background: white;
    color: #700000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 150%;


    &:hover {
        text-decoration: underline;
    }
`
export const Bars = styled(FaBars)`
    display: none;
    color: #700000;
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
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        display: none;
    }
`