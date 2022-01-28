import React from 'react';
import CardInfo from '../../components/Card/CardInfo'
import Card from '../../components/Card/Card'

const Pastry = () => {
  return <div>
  <div>1</div>
  <div>2</div>
  <div>3</div>

  <div className='cards-container'>
  <Card
  imgMain=    {CardInfo[3].imgMain}
  title=      {CardInfo[3].title}
  minutes=    {CardInfo[3].minutes}
  ingredients={CardInfo[3].ingredients}
  servings=   {CardInfo[3].servings} 
  category=   {CardInfo[3].category}
  /></div>
  </div>;
}

export default Pastry;