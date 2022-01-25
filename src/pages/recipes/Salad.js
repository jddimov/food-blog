import React from 'react';
import { useParams } from "react-router-dom"
import Card from '../../components/Card/Card';
import CardInfo from '../../components/Card/CardInfo';

const Salad = () => {
  const { id } = useParams();
  return <div>
  <div>salatki cezat grycka tui onui   </div>
  <div>salatki cezat grycka tui onui   </div>
  <div>salatki cezat grycka tui onui   </div>
  <div>salatki cezat grycka tui onui   </div>
  <div>salatki cezat grycka tui onui    5</div>
  <div>salatki cezat grycka tui onui   </div>
  <div>salatki cezat grycka tui onui   </div>
  <div>salatki cezat grycka tui onui   </div>
  <div>salatki cezat grycka tui onui   </div>
  <div>salatki cezat grycka tui onui    10</div>
  <div>{id}</div>
  <div>{id}</div>
  <div>{id}</div>
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

export default Salad;