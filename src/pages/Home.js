import React from 'react'
import CardInfo from '../components/Card/CardInfo'
import Card from '../components/Card/Card'
import "./Home.css"



const Home = () => {
    return (
        <div style={{ background: "#ffeeed" }}>
            <h1>Home</h1>
            {/* <div >
            <AllCards /> 
            </div> */}
            
            v
            v <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            {CardInfo[1].ingredients}
            
            <div className='cards-container'>
            <Card
            imgMain={CardInfo[1].imgMain}
            title={CardInfo[1].title}
            description={CardInfo[1].description}
            minutes={CardInfo[1].minutes}
            ingredients={CardInfo[1].ingredients}
            servings={CardInfo[1].servings} 

            />

            <Card
            imgMain={CardInfo[0].imgMain}
            title={CardInfo[0].title}
            description={CardInfo[0].description}
            minutes={CardInfo[0].minutes}
            ingredients={CardInfo[0].ingredients}
            servings={CardInfo[0].servings} 
            />
            </div>

        </div>
        
    )
}

export default Home
