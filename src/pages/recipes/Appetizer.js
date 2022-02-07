import React from 'react';
import CardInfo from '../../components/Card/CardInfo'
import CreateCard from '../../components/Card/CreateCard';

const Appetizer = () => {

  const filterAppetizer = CardInfo.filter(card => card.category == "appetizer")
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
  transform: 'translateX(-50%)'}}>Предястия</h1>  
  <div className='cards-container'>
    
    {filterAppetizer.map(CreateCard)}

  </div>
  
  
  </div>;
}

export default Appetizer;
