import React from 'react'
import "./Card.css"
import { FaRegClock, FaRegStar, FaStar  } from "react-icons/fa";
import serving from "./serving.png";
import { Link } from "react-router-dom";
import CreateDifficulty from './CreateDifficulty';
import CreateDiffNumbers from './CreateDiffNumbers';


function Card(props) {
    return (
        <div className="card-container">
            
            <div >
             <Link to={`/food-blog/recipes/${props.category}/${props.url}/`}>
             <img src={props.imgMain} className='cardImage'></img></Link>
            </div>

            <div className='cardContent'>
                <div className='cardTitleMain'>{props.title}</div>
                <div className='iconsCard'>
                    <div><FaRegClock        style={{ height: "26px", width: "26px" }}/> </div>
                    <div>
                        {CreateDifficulty(props.difficulty)}
                    </div>

                    <div><img src={serving} style={{ height: "26px", width: "26px" }} /></div>
             
                    <div style={{fontSize: '12px'}}>ВРЕМЕ   </div>
                    <div style={{fontSize: '12px'}}>ТРУДНОСТ</div>
                    <div style={{fontSize: '12px'}}>ПОРЦИИ  </div>
                    <div style={{fontSize: '20px'}}>{props.minutes}</div>
                    {CreateDiffNumbers(props.difficulty)}
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
