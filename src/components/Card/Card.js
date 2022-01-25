import React from 'react'
import "./Card.css"
import { FaRegClock  } from "react-icons/fa";
import serving from "./serving.png";
import book from "./book-outline.svg";
import { Link } from "react-router-dom";


function Card(props) {
    return (
        <div className="card-container">
            
                

                <div >
                {/* <Link to="/recipes/salad/"> */}
                <Link to={`/recipes/${props.category}/${props.url}/`}>
                <img src={props.imgMain} className='card-image'></img></Link>
                </div>

                <div className='card-content'>
                <div className='card-title'><h2>{props.title}</h2></div>
                
                
                <div className='icons'>
                <div><FaRegClock style={{height: "25px", width: "25px" }}/> </div>
                <div><img src={book} style={{ height: "25px", width: "25px"}} /></div>
                <div><img src={serving} style={{ height: "25px", width: "25px"}} /></div>
                

                
                <div>{props.minutes}</div>
                <div>{props.ingredients}</div>
                <div>{props.servings}</div>
                
                </div>

                <div className='button'><Link to={`/recipes/${props.category}/${props.url}/`}>
                <button className='card-btn'>Виж рецептата</button></Link>
                </div>

                </div>
            
                
        </div>
    );
}

export default   Card 
