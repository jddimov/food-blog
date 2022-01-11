import React from 'react'
import CardInfo from '../components/Card/CardInfo'
import Card from '../components/Card/Card'
import "./Home.css"
import Test from '../components/Carousel/Test'
import ShowTest from '../components/slideshow/ShowTest'



const Home = () => {
    return (
        <div style={{ background: "#ffeeed" }}>
            <h1>Home</h1>
            <h1>Home</h1>


            <div style={{marginTop: "100px", marginBottom: "100px"}}>
            <ShowTest /></div>
            {/* <Test  /> */}

            <div className='cards-container'>
            <Card
            imgMain={CardInfo[1].imgMain}
            title={CardInfo[1].title}
            minutes={CardInfo[1].minutes}
            ingredients={CardInfo[1].ingredients}
            servings={CardInfo[1].servings} 
            />

            <Card
            imgMain={CardInfo[0].imgMain}
            title={CardInfo[0].title}
            minutes={CardInfo[0].minutes}
            ingredients={CardInfo[0].ingredients}
            servings={CardInfo[0].servings} 
            />

            <Card
            imgMain={CardInfo[2].imgMain}
            title={CardInfo[2].title}
            minutes={CardInfo[2].minutes}
            ingredients={CardInfo[2].ingredients}
            servings={CardInfo[2].servings} 
            />
             <Card
            imgMain={CardInfo[3].imgMain}
            title={CardInfo[3].title}
            minutes={CardInfo[3].minutes}
            ingredients={CardInfo[3].ingredients}
            servings={CardInfo[3].servings} 
            />
             <Card
            imgMain={CardInfo[4].imgMain}
            title={CardInfo[4].title}
            minutes={CardInfo[4].minutes}
            ingredients={CardInfo[4].ingredients}
            servings={CardInfo[4].servings} 
            />
            <Card
            imgMain={CardInfo[5].imgMain}
            title={CardInfo[5].title}
            minutes={CardInfo[5].minutes}
            ingredients={CardInfo[5].ingredients}
            servings={CardInfo[5].servings} 
            />
            <Card
            imgMain=    {CardInfo[6].imgMain}
            title=      {CardInfo[6].title}
            minutes=    {CardInfo[6].minutes}
            ingredients={CardInfo[6].ingredients}
            servings=   {CardInfo[6].servings} 
            />
            <Card
            imgMain=    {CardInfo[7].imgMain}
            title=      {CardInfo[7].title}
            minutes=    {CardInfo[7].minutes}
            ingredients={CardInfo[7].ingredients}
            servings=   {CardInfo[7].servings} 
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
