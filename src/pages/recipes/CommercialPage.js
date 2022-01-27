import React from 'react';
import { useParams } from "react-router-dom"
import Card from '../../components/Card/Card';
import CardInfo from '../../components/Card/CardInfo';
import "./CommercialPage.css"
import { Link } from 'react-router-dom'

const CommercialPage = () => {
    const { category } = useParams();
    const { url } = useParams();
    const id = CardInfo.findIndex(x => x.category === category && x.url === url )

  return <div>

  <div>1</div>
  <div>2</div>
  <div>3</div>

  <div className='imageContainer'><img src={CardInfo     [id].imgMain} className='commCardImage'></img></div>

  <div><p className='cardTitle'>{CardInfo[id].title}</p></div>

  <div dangerouslySetInnerHTML={{__html: `${CardInfo[id].description}` }} />

  <div className='infoContainer'>
    <div className='infoBox'>
    <div>{CardInfo     [id].minutes}</div>
    <div>|</div>
    <div>{CardInfo [id].ingredients}</div>
    <div>|</div>
    <div>{CardInfo    [id].servings}</div>
    </div>
  </div>


  <div className='fullDescription'>{CardInfo    [id].description}</div>
  

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