import React from 'react'

function Card(props) {
    return (
        <div>
            <div >
                <p>{props.id}</p>
                <img src={props.imgMain}></img>
                <h2>{props.title}</h2>
                <p >{props.description}</p>

                {/* <img src={props.imgMinutes}></img> */}
                <p className='cardMinutes'>{props.minutes}</p>
                {/* <img src={props.imgIngredients}></img> */}
                <p className='cardIngredients'>{props.ingredients}</p>
                {/* <img src={props.imgServings}></img> */}
                <p className='cardNumServings'>{props.servings}</p>

            </div>
            <button className='cardButton'>виж рецептата</button>
        </div>
    );
}

export default   Card 
