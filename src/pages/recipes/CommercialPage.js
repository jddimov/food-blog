import React from 'react';
import { useParams } from "react-router-dom"
import CardInfo from '../../components/Card/CardInfo';
import "./CommercialPage.css"


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

  <div className='infoContainer'>
    <div className='infoBox'>
    <div>{CardInfo     [id].minutes}</div>
    <div>|</div>
    <div>{CardInfo [id].ingredients} съставки</div>
    <div>|</div>
    <div>{CardInfo    [id].servings} порции</div>
    </div>
  </div>

<div className='productsAndImage'>
  <div className='imageContainerProduct'><img src={CardInfo     [id].imgMain} className='commCardImageProduct'></img></div>
  <div className='dangerousProduct' dangerouslySetInnerHTML={{__html: `${CardInfo[id].products}` }} />
</div>

<div style={{ marginLeft: '5%', fontSize: '25px'}}><u>ПРИГОТВЯНЕ:</u></div>
<div className='detailDescription' dangerouslySetInnerHTML={{__html: `${CardInfo[id].description}` }} />

  </div>;
}

export default CommercialPage;