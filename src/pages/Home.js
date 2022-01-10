import React from 'react'
import CardInfo from '../components/Card/CardInfo'
import Card from '../components/Card/Card'
import "./Home.css"



const Home = () => {
    return (
        <div style={{ background: "#ffeeed" }}>
            <h1>Home</h1>
            <h1>Home</h1>
            
            
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

            <Card
            imgMain={CardInfo[2].imgMain}
            title={CardInfo[2].title}
            description={CardInfo[2].description}
            minutes={CardInfo[2].minutes}
            ingredients={CardInfo[2].ingredients}
            servings={CardInfo[2].servings} 
            />
             <Card
            imgMain={CardInfo[3].imgMain}
            title={CardInfo[3].title}
            description={CardInfo[3].description}
            minutes={CardInfo[3].minutes}
            ingredients={CardInfo[3].ingredients}
            servings={CardInfo[3].servings} 
            />
             <Card
            imgMain={CardInfo[4].imgMain}
            title={CardInfo[4].title}
            description={CardInfo[4].description}
            minutes={CardInfo[4].minutes}
            ingredients={CardInfo[4].ingredients}
            servings={CardInfo[4].servings} 
            />
            <Card
            imgMain={CardInfo[5].imgMain}
            title={CardInfo[5].title}
            description={CardInfo[5].description}
            minutes={CardInfo[5].minutes}
            ingredients={CardInfo[5].ingredients}
            servings={CardInfo[5].servings} 
            />
            <Card
            imgMain=    {CardInfo[6].imgMain}
            title=      {CardInfo[6].title}
            description={CardInfo[6].description}
            minutes=    {CardInfo[6].minutes}
            ingredients={CardInfo[6].ingredients}
            servings=   {CardInfo[6].servings} 
            />
            <Card
            imgMain=    {CardInfo[7].imgMain}
            title=      {CardInfo[7].title}
            description={CardInfo[7].description}
            minutes=    {CardInfo[7].minutes}
            ingredients={CardInfo[7].ingredients}
            servings=   {CardInfo[7].servings} 
            />
            <Card
            imgMain=    {CardInfo[8].imgMain}
            title=      {CardInfo[8].title}
            description={CardInfo[8].description}
            minutes=    {CardInfo[8].minutes}
            ingredients={CardInfo[8].ingredients}
            servings=   {CardInfo[8].servings} 
            />
            <Card
            imgMain=    {CardInfo[9].imgMain}
            title=      {CardInfo[9].title}
            description={CardInfo[9].description}
            minutes=    {CardInfo[9].minutes}
            ingredients={CardInfo[9].ingredients}
            servings=   {CardInfo[9].servings} 
            />
            <Card
            imgMain=    {CardInfo[10].imgMain}
            title=      {CardInfo[10].title}
            description={CardInfo[10].description}
            minutes=    {CardInfo[10].minutes}
            ingredients={CardInfo[10].ingredients}
            servings=   {CardInfo[10].servings} 
            />
            <Card
            imgMain=    {CardInfo[11].imgMain}
            title=      {CardInfo[11].title}
            description={CardInfo[11].description}
            minutes=    {CardInfo[11].minutes}
            ingredients={CardInfo[11].ingredients}
            servings=   {CardInfo[11].servings} 
            />
        
            </div>

        </div>
        
    )
}

export default Home
