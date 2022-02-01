import React from 'react';
import { useParams } from "react-router-dom"
import CardInfo from '../../components/Card/CardInfo';
import CreateDifficulty from '../../components/Card/CreateDifficulty';
import "./CommercialPage.css"


const CommercialPage = () => {
    const { category } = useParams();
    const { url } = useParams();
    const id = CardInfo.findIndex(x => x.category === category && x.url === url )

  return <div className='commercialPageContainer'>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>

  <div><p className='cardTitle'><u style={{ textDecorationThickness: '3px' }}>{CardInfo[id].title}</u></p></div>

  <div className='infoContainer'>
    <div className='infoBox'>
    <div>{CardInfo     [id].minutes}</div>
    <div className='testOfBorders'>&nbsp;</div>
    <div>сложност</div>
    <div>{CreateDifficulty( CardInfo[id].difficulty)}</div>
    <div className='testOfBorders'>&nbsp;</div>
    <div>{CardInfo    [id].servings} порции</div>
    </div>
  </div>

<div className='productsAndImage'>
  <div className='imageContainerProduct'><img src={CardInfo     [id].imgMain} className='commCardImageProduct'></img></div>
  
  <div className='dangerousProduct' dangerouslySetInnerHTML={{__html: `${CardInfo[id].products}` }} />
</div>

<div style={{ marginLeft: '5%', fontSize: '28px', marginTop: '5%'}}><u>Приготвяне:</u></div>
<div className='detailDescription' dangerouslySetInnerHTML={{__html: `${CardInfo[id].description}` }} />



  </div>;
}

export default CommercialPage;