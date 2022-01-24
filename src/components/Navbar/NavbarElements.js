import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";


export const Nav = styled.div`
    height: 80px;
    display: flex;
    justify-content: flex-start;
    position: fixed;
    width: 100%;
    z-index: 999;
    background-image: linear-gradient(to right, #ffedf6 ,  #ffdfb9, #ffc8c8);
`

export const NavLink = styled(Link)`
    color: #700000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 150%;

    &:hover {
        color: #700000;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #700000;
    margin-top: 15px;    

    @media screen and (max-width: 1050px) {
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
    
    border-radius: 25px;
    @media screen and (max-width: 1050px) {
        display: none;
    }
`