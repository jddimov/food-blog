import React from 'react';
import CardInfo from '../../components/Card/CardInfo'
import CreateCard from '../../components/Card/CreateCard';

const MainDish = () => {

  const filterMainDish = CardInfo.filter(card => card.category == "main-dish")

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
  transform: 'translateX(-50%)'}}>Основни ястия</h1>
  <div className='cards-container'>
  
    {filterMainDish.map(CreateCard)}
            
  </div>
            
  </div>;
}

export default MainDish;
