import React from 'react';
import CardInfo from '../../components/Card/CardInfo'
import CreateCard from '../../components/Card/CreateCard';

const MainDish = () => {

  const filterMainDish = CardInfo.filter(card => card.category == "main-dish")

  return <div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>

  <div className='cards-container'>
  
    {filterMainDish.map(CreateCard)}
            
  </div>
            
  </div>;
}

export default MainDish;
