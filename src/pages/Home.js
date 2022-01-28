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
            id=         {CardInfo[0].id}
            imgMain=    {CardInfo[0].imgMain}
            url=        {CardInfo[0].url}
            title=      {CardInfo[0].title}
            minutes=    {CardInfo[0].minutes}
            ingredients={CardInfo[0].ingredients}
            servings=   {CardInfo[0].servings} 
            category=   {CardInfo[0].category}
            />
            <Card
            id=         {CardInfo[1].id}
            imgMain=    {CardInfo[1].imgMain}
            url=        {CardInfo[1].url}
            title=      {CardInfo[1].title}
            minutes=    {CardInfo[1].minutes}
            ingredients={CardInfo[1].ingredients}
            servings=   {CardInfo[1].servings} 
            category=   {CardInfo[1].category}
            />
            <Card
            id=         {CardInfo[2].id}
            imgMain=    {CardInfo[2].imgMain}
            url=        {CardInfo[2].url}
            title=      {CardInfo[2].title}
            minutes=    {CardInfo[2].minutes}
            ingredients={CardInfo[2].ingredients}
            servings=   {CardInfo[2].servings} 
            category=   {CardInfo[2].category}
            />
            <Card
            id=         {CardInfo[3].id}
            imgMain=    {CardInfo[3].imgMain}
            url=        {CardInfo[3].url}
            title=      {CardInfo[3].title}
            minutes=    {CardInfo[3].minutes}
            ingredients={CardInfo[3].ingredients}
            servings=   {CardInfo[3].servings} 
            category=   {CardInfo[3].category}
            />
            <Card
            id=         {CardInfo[4].id}
            imgMain=    {CardInfo[4].imgMain}
            url=        {CardInfo[4].url}
            title=      {CardInfo[4].title}
            minutes=    {CardInfo[4].minutes}
            ingredients={CardInfo[4].ingredients}
            servings=   {CardInfo[4].servings} 
            category=   {CardInfo[4].category}
            />
            <Card
            id=         {CardInfo[5].id}
            imgMain=    {CardInfo[5].imgMain}
            url=        {CardInfo[5].url}
            title=      {CardInfo[5].title}
            minutes=    {CardInfo[5].minutes}
            ingredients={CardInfo[5].ingredients}
            servings=   {CardInfo[5].servings} 
            category=   {CardInfo[5].category}
            />

            
        
            </div>

        </div>
        
    )
}

export default Home
