import React from 'react'
import "./Card.css"
import { FaRegClock  } from "react-icons/fa";
import serving from "./serving.png";
import book from "./book-outline.svg";


function Card(props) {
    return (
        <div className="card-container">
            
                <p>{props.id}</p>

                <div className="card-image"><img src={props.imgMain}></img></div>


                <div className='card-content'>
                <div className='card-title'><h2>{props.title}</h2></div>
                <div className='card-description'><p>{props.description}</p></div>
                
                <div className='icons'>
                <div><FaRegClock style={{height: "25px", width: "25px" }}/> </div>
                <div><img src={book} style={{ height: "25px", width: "25px"}} /></div>
                <div><img src={serving} style={{ height: "25px", width: "25px"}} /></div>
                

                
                <div>{props.minutes}</div>
                <div>{props.ingredients}</div>
                <div>{props.servings}</div>
                </div>

                </div>
            
                <div ><button className='card-btn'>Виж рецептата</button></div>
        </div>
    );
}

export default   Card 
