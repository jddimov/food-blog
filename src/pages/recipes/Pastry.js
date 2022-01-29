import React from 'react';
import CardInfo from '../../components/Card/CardInfo'
import Card from '../../components/Card/Card'

const Pastry = () => {
  return <div>
  <div>1</div>
  <div>2</div>
  <div>3</div>

  <div className='cards-container'>
  <Card
            id=         {CardInfo[3].id}
            imgMain=    {CardInfo[3].imgMain}
            url=        {CardInfo[3].url}
            title=      {CardInfo[3].title}
            minutes=    {CardInfo[3].minutes}
            ingredients={CardInfo[3].ingredients}
            servings=   {CardInfo[3].servings} 
            category=   {CardInfo[3].category}
            />
            <Card
            id=         {CardInfo[8].id}
            imgMain=    {CardInfo[8].imgMain}
            url=        {CardInfo[8].url}
            title=      {CardInfo[8].title}
            minutes=    {CardInfo[8].minutes}
            ingredients={CardInfo[8].ingredients}
            servings=   {CardInfo[8].servings} 
            category=   {CardInfo[8].category}
            />
            <Card
            id=         {CardInfo[10].id}
            imgMain=    {CardInfo[10].imgMain}
            url=        {CardInfo[10].url}
            title=      {CardInfo[10].title}
            minutes=    {CardInfo[10].minutes}
            ingredients={CardInfo[10].ingredients}
            servings=   {CardInfo[10].servings} 
            category=   {CardInfo[10].category}
            />
              <Card
  id=         {CardInfo[11].id}
  imgMain=    {CardInfo[11].imgMain}
  url=        {CardInfo[11].url}
  title=      {CardInfo[11].title}
  minutes=    {CardInfo[11].minutes}
  ingredients={CardInfo[11].ingredients}
  servings=   {CardInfo[11].servings} 
  category=   {CardInfo[11].category}
  />
  </div>
  </div>;
}

export default Pastry;