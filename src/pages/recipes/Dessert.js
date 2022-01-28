import React from 'react';
import CardInfo from '../../components/Card/CardInfo'
import Card from '../../components/Card/Card'

const Dessert = () => {
  return <div>
  <div>1   </div>
  <div>2  </div>
  <div>3   </div>

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

  </div>;
}

export default Dessert;
