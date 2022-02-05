import React from 'react'
import CardInfo from '../components/Card/CardInfo'
import "./Home.css"
import Slider from '../components/Slider/Slider'
import CreateCard from '../components/Card/CreateCard'



const Home = () => {

    return (
        <div style={{ background: "#ffeaea" }} >
            <h1 style={{marginBottom: "30px"}}>&nbsp;</h1>

            <Slider />
            <h1 style={{margin: "2rem", color:'#600000'}}>Най-новите ни рецепти:</h1>
            <div className='cards-container'>
            {CardInfo.slice(-4).reverse().map(CreateCard)}
            </div>

        </div>
        
    )
}

export default Home
