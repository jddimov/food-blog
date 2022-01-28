import React from 'react';
import CardInfo from '../../components/Card/CardInfo'
import Card from '../../components/Card/Card'

const Appetizer = () => {
  return <div>
  <div>1   </div>
  <div>2  </div>
  <div>3   </div>

  <div className='cards-container'>
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
    

            </div>
  
  </div>;
}

export default Appetizer;
