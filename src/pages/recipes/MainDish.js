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
            imgMain=    {CardInfo[4].imgMain}
            title=      {CardInfo[4].title}
            minutes=    {CardInfo[4].minutes}
            ingredients={CardInfo[4].ingredients}
            servings=   {CardInfo[4].servings} 
            category=   {CardInfo[4].category}
            /></div>
            
  </div>;
}

export default MainDish;
