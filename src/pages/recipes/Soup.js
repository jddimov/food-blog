import React from 'react';
import CreateCard from '../../components/Card/CreateCard';
import CardInfo from '../../components/Card/CardInfo';

const Soup = () => {

  const filterSoup = CardInfo.filter(card => card.category == "soup")

  return <div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>

  <div className='cards-container'>

    {filterSoup.map(CreateCard)}

  </div>

  </div>;
}

export default Soup;