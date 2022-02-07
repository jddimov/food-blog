import React from 'react';
import CreateCard from '../../components/Card/CreateCard';
import CardInfo from '../../components/Card/CardInfo';

const Soup = () => {

  const filterSoup = CardInfo.filter(card => card.category == "soup")

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
  transform: 'translateX(-50%)'}}>Супи</h1>
  <div className='cards-container'>

    {filterSoup.map(CreateCard)}

  </div>

  </div>;
}

export default Soup;