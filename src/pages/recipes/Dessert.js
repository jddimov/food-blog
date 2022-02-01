import React from 'react';
import CardInfo from '../../components/Card/CardInfo'
import CreateCard from '../../components/Card/CreateCard';
import { Outlet } from 'react-router-dom';

const Dessert = () => {

  const filterSalad = CardInfo.filter(card => card.category == "dessert")

  return <div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>

  <div className='cards-container'>

    {filterSalad.map(CreateCard)}

  </div>
<Outlet />
  </div>;
}

export default Dessert;
