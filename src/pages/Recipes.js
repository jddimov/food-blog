import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Appetizer from './recipes/Appetizer';
import Dessert from './recipes/Dessert';
import { NavLink } from "react-router-dom";

const Recipes = () => {
    return (
        <div>
            <h1>receptiiii</h1>
            <h1>receptiiii</h1>
            <h1>receptiiii</h1>
            <h1>receptiiii</h1>
            <h1>receptiiii</h1>
            <h1>receptiiii</h1>
            <div><NavLink to="/recipes/dessert">dessert</NavLink></div>
            <div>menu</div>
            <div><NavLink to="/recipes/appetizer">appetizer</NavLink></div>

        </div>
    )
}

export default Recipes
