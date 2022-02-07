import React from 'react';
import CardInfo from '../../components/Card/CardInfo'
import CreateCard from '../../components/Card/CreateCard';

const Salad = () => {

  const filterSalad = CardInfo.filter(card => card.category == "salad")

  return <div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <h1 style={{
  marginTop: "2rem", 
  color:'#600000', 
  borderBottom: '1.5px solid currentColor', 
  display: 'inline-block',
  position:'relative',
  left:'50%',
  transform: 'translateX(-50%)'}}>Салати</h1>
  <div className='cards-container'>

    {filterSalad.map(CreateCard)}

  </div>

  </div>;
}

export default Salad;