import React from 'react';
import { useParams } from "react-router-dom"
import Card from '../../components/Card/Card';
import CardInfo from '../../components/Card/CardInfo';
import "./CommercialPage.css"

const CommercialPage = () => {
    const { category } = useParams();
    const { url } = useParams();
    const id = CardInfo.findIndex(x => x.category === category && x.url === url )



  return <div>

  <div>appetizer</div>
  <div>appetizer</div>
  <div>appetizer</div>
  
  <div><h1>{CardInfo[id].title}</h1></div>


  <div><img src={CardInfo     [id].imgMain} className='card-image'></img></div>

  <div className='infoContainer'>
    <div className='information'>
    <div>{CardInfo     [id].minutes}</div>
    <div>{CardInfo [id].ingredients}</div>
    <div>{CardInfo    [id].servings} </div>
    </div>
  </div>
  

  {/* <Card
            imgMain={CardInfo     [id].imgMain}
            title={CardInfo       [id].title}
            minutes={CardInfo     [id].minutes}
            ingredients={CardInfo [id].ingredients}
            servings={CardInfo    [id].servings} 
            category={CardInfo    [id].category}
            /> */}
  </div>;
}

export default CommercialPage;