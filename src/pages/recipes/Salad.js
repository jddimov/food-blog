import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardInfo from '../../components/Card/CardInfo'
import Card from '../../components/Card/Card'

const Salad = () => {
  return <div>
  <div>1   </div>
  <div>2  </div>
  <div>3   </div>

  <div className='cards-container'>
            <Card
            imgMain={CardInfo[1].imgMain}
            title={CardInfo[1].title}
            minutes={CardInfo[1].minutes}
            ingredients={CardInfo[1].ingredients}
            servings={CardInfo[1].servings} 
            category={CardInfo[1].category}
            />

            <Card
            imgMain={CardInfo[0].imgMain}
            title={CardInfo[0].title}
            minutes={CardInfo[0].minutes}
            ingredients={CardInfo[0].ingredients}
            servings={CardInfo[0].servings} 
            category={CardInfo[0].category}
            />

            </div>
  </div>;
}

export default Salad;