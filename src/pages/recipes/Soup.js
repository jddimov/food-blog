import React from 'react';
import Card from '../../components/Card/Card';
import CardInfo from '../../components/Card/CardInfo';

const Soup = () => {

  return <div>
  <div>1</div>
  <div>2</div>
  <div>3</div>

  <div className='cards-container'>
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
  id=         {CardInfo[11].id}
  imgMain=    {CardInfo[11].imgMain}
  url=        {CardInfo[11].url}
  title=      {CardInfo[11].title}
  minutes=    {CardInfo[11].minutes}
  ingredients={CardInfo[11].ingredients}
  servings=   {CardInfo[11].servings} 
  category=   {CardInfo[11].category}
  />
  
  </div>

  </div>;
}

export default Soup;