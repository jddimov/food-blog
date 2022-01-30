import React from 'react';
import CardInfo from '../../components/Card/CardInfo'
import CreateCard from '../../components/Card/CreateCard';

const Salad = () => {

  const filterSalad = CardInfo.filter(card => card.category == "salad")

  return <div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>

  <div className='cards-container'>

    {filterSalad.map(CreateCard)}

  </div>

  </div>;
}

export default Salad;