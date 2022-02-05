import React from 'react';
import CardInfo from '../../components/Card/CardInfo'
import CreateCard from '../../components/Card/CreateCard';

const Appetizer = () => {

  const filterAppetizer = CardInfo.filter(card => card.category == "appetizer")
  return <div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>

  <div className='cards-container'>
    
    {filterAppetizer.map(CreateCard)}

  </div>
  
  
  </div>;
}

export default Appetizer;
