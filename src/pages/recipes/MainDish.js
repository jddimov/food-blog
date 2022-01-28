import React from 'react';
import CardInfo from '../../components/Card/CardInfo'
import Card from '../../components/Card/Card'

const MainDish = () => {
  return <div>
  <div>1   </div>
  <div>2  </div>
  <div>3   </div>

  <div className='cards-container'>
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
    id=         {CardInfo[15].id}
    imgMain=    {CardInfo[15].imgMain}
    url=        {CardInfo[15].url}
    title=      {CardInfo[15].title}
    minutes=    {CardInfo[15].minutes}
    ingredients={CardInfo[15].ingredients}
    servings=   {CardInfo[15].servings}  
    category=   {CardInfo[15].category}
    />
            
            
            </div>
            
  </div>;
}

export default MainDish;
