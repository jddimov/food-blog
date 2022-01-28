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
                <Link to={`/food-blog/recipes/${props.category}/${props.url}/`}>
                <img src={props.imgMain} className='cardImage'></img></Link>
                </div>

                <div className='cardContent'>
                <div className='cardTitleMain'>{props.title}</div>

                
                
                <div className='icons'>
                <div><FaRegClock        style={{ height: "26px", width: "26px" }}/> </div>
                <div><img src={book}    style={{ height: "26px", width: "26px" }} /></div>
                <div><img src={serving} style={{ height: "26px", width: "26px" }} /></div>
                

                
                <div style={{fontSize: '20px'}}>{props.minutes}</div>
                <div style={{fontSize: '20px'}}>{props.ingredients}</div>
                <div style={{fontSize: '20px'}}>{props.servings}</div>
                
                </div>

                <div className='button'><Link to={`/food-blog/recipes/${props.category}/${props.url}/`}>
                <button className='card-btn'>Виж рецептата</button></Link>
                </div>

                </div>
            
                
        </div>
    );
}

export default   Card 
