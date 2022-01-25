import React from 'react';
import { useParams } from "react-router-dom"
import Card from '../../components/Card/Card';
import CardInfo from '../../components/Card/CardInfo';

const Soup = () => {
  const { id } = useParams();
  return <div>
  <div>bobec leshta   </div>
  <div>bobec leshta   </div>
  <div>bobec leshta   </div>
  <div>bobec leshta   </div>
  <div>bobec leshta    5</div>
  <div>bobec leshta   </div>
  <div>bobec leshta   </div>
  <div>bobec leshta   </div>
  <div>bobec leshta   </div>
  <div>bobec leshta    10</div>
  <Card
            imgMain={CardInfo     [id].imgMain}
            title={CardInfo       [id].title}
            minutes={CardInfo     [id].minutes}
            ingredients={CardInfo [id].ingredients}
            servings={CardInfo    [id].servings} 
            category={CardInfo    [id].category}
            />
  </div>;
}

export default Soup;