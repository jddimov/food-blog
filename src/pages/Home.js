import React from 'react'
import CardInfo from '../components/Card/CardInfo'
import Card from '../components/Card/Card'
import "./Home.css"
import Slider from '../components/Slider/Slider'
import CreateCard from '../components/Card/CreateCard'



const Home = () => {

    return (
        <div style={{ background: "#ffeeed" }} >
            <h1 style={{marginBottom: "30px"}}>&nbsp;</h1>

            <Slider />

            <div className='cards-container'>
            {CardInfo.map(CreateCard)}
            </div>

        </div>
        
    )
}

export default Home
