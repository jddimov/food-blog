import React from 'react';
import CardInfo from '../../components/Card/CardInfo'
import CreateCard from '../../components/Card/CreateCard';

const Pastry = () => {

  const filterPastry = CardInfo.filter(card => card.category == "pastry")

  return <div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>

  <div className='cards-container'>

    {filterPastry.map(CreateCard)}

  </div>
  
  </div>;
}

export default Pastry;