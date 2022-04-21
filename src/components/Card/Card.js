import React  from 'react'
import "./Card.css"
import { FaRegClock } from "react-icons/fa";
import serving from "./serving.png";
import { Link } from "react-router-dom";
import CreateDifficulty from './CreateDifficulty';
import CreateDiffNumbers from './CreateDiffNumbers';


function Card(props) {
    return (
        <div className="card-container">
            
            <div >
             <Link to={`/recipes/${props.category}/${props.url}/`} >
             <img src={props.imgMain} className='cardImage' alt='food'></img></Link>
            </div>

            <div className='cardContent'>
                <div className='cardTitleMain'>{props.title}</div>
                <div className='iconsCard'>
                    <div><FaRegClock        style={{ height: "26px", width: "26px" }}/> </div>
                    <div>
                        {CreateDifficulty(props.difficulty)}
                    </div>

                    <div><img src={serving} style={{ height: "26px", width: "26px" }} alt='serving' /></div>
             
                    <div style={{fontSize: '12px'}}>ВРЕМЕ   </div>
                    <div style={{fontSize: '12px'}}>СЛОЖНОСТ</div>
                    <div style={{fontSize: '12px'}}>ПОРЦИИ  </div>
                    <div style={{fontSize: '20px'}}>{props.minutes}</div>
                    <div style={{fontSize: '20px'}}>{CreateDiffNumbers(props.difficulty)}</div>
                    <div style={{fontSize: '20px'}}>{props.servings}</div>
             
                </div>

                <div className='button'><Link to={`/recipes/${props.category}/${props.url}/`}>
                    <button className='card-btn'>Виж рецептата</button></Link>
                </div>
           </div>   
        </div>
    );
}

export default   Card 
