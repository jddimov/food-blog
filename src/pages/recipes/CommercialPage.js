import React from 'react';
import { useParams } from "react-router-dom"
import CardInfo from '../../components/Card/CardInfo';
import CreateCard from '../../components/Card/CreateCard';
import CreateDifficulty from '../../components/Card/CreateDifficulty';
import "./CommercialPage.css"


const CommercialPage = () => {
  function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

    const shuffledArray = shuffleArray(CardInfo);

    const { category } = useParams();
    const { url } = useParams();
    const id = CardInfo.findIndex(x => x.category === category && x.url === url )
    const filterByCategory = shuffledArray.filter(card => card.category == category && card.url != url )

    

  return <div className='commercialPageContainer' style={{color:'#500000'}}>
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

<h2 style={{marginLeft: "5%"}}>Може да разгледате още:</h2>
<div className='cards-container' style={{color:'black'}}>
    {filterByCategory.slice(0,4).map(CreateCard)}
  </div>
  </div>;
}

export default CommercialPage;