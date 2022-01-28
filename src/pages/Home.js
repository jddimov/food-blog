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
            <Card
            id=         {CardInfo[6].id}
            imgMain=    {CardInfo[6].imgMain}
            url=        {CardInfo[6].url}
            title=      {CardInfo[6].title}
            minutes=    {CardInfo[6].minutes}
            ingredients={CardInfo[6].ingredients}
            servings=   {CardInfo[6].servings} 
            category=   {CardInfo[6].category}
            />
            <Card
            id=         {CardInfo[7].id}
            imgMain=    {CardInfo[7].imgMain}
            url=        {CardInfo[7].url}
            title=      {CardInfo[7].title}
            minutes=    {CardInfo[7].minutes}
            ingredients={CardInfo[7].ingredients}
            servings=   {CardInfo[7].servings} 
            category=   {CardInfo[7].category}
            />
            <Card
            id=         {CardInfo[8].id}
            imgMain=    {CardInfo[8].imgMain}
            url=        {CardInfo[8].url}
            title=      {CardInfo[8].title}
            minutes=    {CardInfo[8].minutes}
            ingredients={CardInfo[8].ingredients}
            servings=   {CardInfo[8].servings} 
            category=   {CardInfo[8].category}
            />
             <Card
            id=         {CardInfo[9].id}
            imgMain=    {CardInfo[9].imgMain}
            url=        {CardInfo[9].url}
            title=      {CardInfo[9].title}
            minutes=    {CardInfo[9].minutes}
            ingredients={CardInfo[9].ingredients}
            servings=   {CardInfo[9].servings} 
            category=   {CardInfo[9].category}
            />
             <Card
            id=         {CardInfo[10].id}
            imgMain=    {CardInfo[10].imgMain}
            url=        {CardInfo[10].url}
            title=      {CardInfo[10].title}
            minutes=    {CardInfo[10].minutes}
            ingredients={CardInfo[10].ingredients}
            servings=   {CardInfo[10].servings} 
            category=   {CardInfo[10].category}
            />
             <Card
            id=         {CardInfo[11].id}
            imgMain=    {CardInfo[11].imgMain}
            url=        {CardInfo[11].url}
            title=      {CardInfo[11].title}
            minutes=    {CardInfo[11].minutes}
            ingredients={CardInfo[11].ingredients}
            servings=   {CardInfo[11].servings} 
            category=   {CardInfo[11].category}
            />
             <Card
            id=         {CardInfo[12].id}
            imgMain=    {CardInfo[12].imgMain}
            url=        {CardInfo[12].url}
            title=      {CardInfo[12].title}
            minutes=    {CardInfo[12].minutes}
            ingredients={CardInfo[12].ingredients}
            servings=   {CardInfo[12].servings} 
            category=   {CardInfo[12].category}
            />
             <Card
            id=         {CardInfo[13].id}
            imgMain=    {CardInfo[13].imgMain}
            url=        {CardInfo[13].url}
            title=      {CardInfo[13].title}
            minutes=    {CardInfo[13].minutes}
            ingredients={CardInfo[13].ingredients}
            servings=   {CardInfo[13].servings} 
            category=   {CardInfo[13].category}
            />
             <Card
            id=         {CardInfo[14].id}
            imgMain=    {CardInfo[14].imgMain}
            url=        {CardInfo[14].url}
            title=      {CardInfo[14].title}
            minutes=    {CardInfo[14].minutes}
            ingredients={CardInfo[14].ingredients}
            servings=   {CardInfo[14].servings} 
            category=   {CardInfo[14].category}
            />
             <Card
            id=         {CardInfo[15].id}
            imgMain=    {CardInfo[15].imgMain}
            url=        {CardInfo[15].url}
            title=      {CardInfo[15].title}
            minutes=    {CardInfo[15].minutes}
            ingredients={CardInfo[15].ingredients}
            servings=   {CardInfo[15].servings} 
            category=   {CardInfo[15].category}
            />
             <Card
            id=         {CardInfo[16].id}
            imgMain=    {CardInfo[16].imgMain}
            url=        {CardInfo[16].url}
            title=      {CardInfo[16].title}
            minutes=    {CardInfo[16].minutes}
            ingredients={CardInfo[16].ingredients}
            servings=   {CardInfo[16].servings} 
            category=   {CardInfo[16].category}
            />

            
        
            </div>

        </div>
        
    )
}

export default Home
