import React from 'react'
import CardInfo from '../components/Card/CardInfo'
import Card from '../components/Card/Card'
import "./Home.css"
import Slider from '../components/Slider/Slider'



const Home = () => {
    return (
        <div style={{ background: "#ffeeed" }}>
            <h1 style={{marginBottom: "30px"}}>Home</h1>

            <Slider />

            <div className='cards-container'>
            <Card
            id={CardInfo[1].id}
            imgMain={CardInfo[1].imgMain}
            url={CardInfo[1].url}
            title={CardInfo[1].title}
            minutes={CardInfo[1].minutes}
            ingredients={CardInfo[1].ingredients}
            servings={CardInfo[1].servings} 
            category={CardInfo[1].category}
            />

            <Card
            id={CardInfo[0].id}
            imgMain={CardInfo[0].imgMain}
            url={CardInfo[0].url}
            title={CardInfo[0].title}
            minutes={CardInfo[0].minutes}
            ingredients={CardInfo[0].ingredients}
            servings={CardInfo[0].servings} 
            category={CardInfo[0].category}
            />

            <Card
            imgMain={CardInfo[2].imgMain}
            title={CardInfo[2].title}
            minutes={CardInfo[2].minutes}
            ingredients={CardInfo[2].ingredients}
            servings={CardInfo[2].servings} 
            category={CardInfo[2].category}
            />
             <Card
            imgMain={CardInfo[3].imgMain}
            title={CardInfo[3].title}
            minutes={CardInfo[3].minutes}
            ingredients={CardInfo[3].ingredients}
            servings={CardInfo[3].servings} 
            category={CardInfo[3].category}
            />
             <Card
            imgMain={CardInfo[4].imgMain}
            title={CardInfo[4].title}
            minutes={CardInfo[4].minutes}
            ingredients={CardInfo[4].ingredients}
            servings={CardInfo[4].servings} 
            category={CardInfo[4].category}
            />
            <Card
            imgMain={CardInfo[5].imgMain}
            title={CardInfo[5].title}
            minutes={CardInfo[5].minutes}
            ingredients={CardInfo[5].ingredients}
            servings={CardInfo[5].servings} 
            category={CardInfo[5].category}
            />
            <Card
            imgMain=    {CardInfo[6].imgMain}
            title=      {CardInfo[6].title}
            minutes=    {CardInfo[6].minutes}
            ingredients={CardInfo[6].ingredients}
            servings=   {CardInfo[6].servings} 
            category={CardInfo[6].category}
            />
            <Card
            imgMain=    {CardInfo[7].imgMain}
            title=      {CardInfo[7].title}
            minutes=    {CardInfo[7].minutes}
            ingredients={CardInfo[7].ingredients}
            servings=   {CardInfo[7].servings} 
            category={CardInfo[7].category}
            />
            <Card
            imgMain=    {CardInfo[8].imgMain}
            title=      {CardInfo[8].title}
            minutes=    {CardInfo[8].minutes}
            ingredients={CardInfo[8].ingredients}
            servings=   {CardInfo[8].servings} 
            />
            <Card
            imgMain=    {CardInfo[9].imgMain}
            title=      {CardInfo[9].title}
            minutes=    {CardInfo[9].minutes}
            ingredients={CardInfo[9].ingredients}
            servings=   {CardInfo[9].servings} 
            />
            <Card
            imgMain=    {CardInfo[10].imgMain}
            title=      {CardInfo[10].title}
            minutes=    {CardInfo[10].minutes}
            ingredients={CardInfo[10].ingredients}
            servings=   {CardInfo[10].servings} 
            />
            <Card
            imgMain=    {CardInfo[11].imgMain}
            title=      {CardInfo[11].title}
            minutes=    {CardInfo[11].minutes}
            ingredients={CardInfo[11].ingredients}
            servings=   {CardInfo[11].servings} 
            />
        
            </div>

        </div>
        
    )
}

export default Home
