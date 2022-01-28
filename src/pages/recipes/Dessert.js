import React from 'react';
import CardInfo from '../../components/Card/CardInfo'
import Card from '../../components/Card/Card'

const Dessert = () => {
  return <div>
  <div>1   </div>
  <div>2  </div>
  <div>3   </div>

  <div className='cards-container'>
    <Card
    id=         {CardInfo[0].id}
    imgMain=    {CardInfo[0].imgMain}
    url=        {CardInfo[0].url}
    title=      {CardInfo[0].title}
    minutes=    {CardInfo[0].minutes}
    ingredients={CardInfo[0].ingredients}
    servings=   {CardInfo[0].servings}  
    category=   {CardInfo[0].category}
    />
    <Card
    id=         {CardInfo[2].id}
    imgMain=    {CardInfo[2].imgMain}
    url=        {CardInfo[2].url}
    title=      {CardInfo[2].title}
    minutes=    {CardInfo[2].minutes}
    ingredients={CardInfo[2].ingredients}
    servings=   {CardInfo[2].servings} 
    category=   {CardInfo[2].category}
    />
    <Card
    id=         {CardInfo[5].id}
    imgMain=    {CardInfo[5].imgMain}
    url=        {CardInfo[5].url}
    title=      {CardInfo[5].title}
    minutes=    {CardInfo[5].minutes}
    ingredients={CardInfo[5].ingredients}
    servings=   {CardInfo[5].servings} 
    category=   {CardInfo[5].category}
    />
    <Card
    id=         {CardInfo[6].id}
    imgMain=    {CardInfo[6].imgMain}
    url=        {CardInfo[6].url}
    title=      {CardInfo[6].title}
    minutes=    {CardInfo[6].minutes}
    ingredients={CardInfo[6].ingredients}
    servings=   {CardInfo[6].servings} 
    category=   {CardInfo[6].category}
    />
    <Card
    id=         {CardInfo[7].id}
    imgMain=    {CardInfo[7].imgMain}
    url=        {CardInfo[7].url}
    title=      {CardInfo[7].title}
    minutes=    {CardInfo[7].minutes}
    ingredients={CardInfo[7].ingredients}
    servings=   {CardInfo[7].servings} 
    category=   {CardInfo[7].category}
    />
    <Card
    id=         {CardInfo[12].id}
    imgMain=    {CardInfo[12].imgMain}
    url=        {CardInfo[12].url}
    title=      {CardInfo[12].title}
    minutes=    {CardInfo[12].minutes}
    ingredients={CardInfo[12].ingredients}
    servings=   {CardInfo[12].servings} 
    category=   {CardInfo[12].category}
    />
    <Card
    id=         {CardInfo[13].id}
    imgMain=    {CardInfo[13].imgMain}
    url=        {CardInfo[13].url}
    title=      {CardInfo[13].title}
    minutes=    {CardInfo[13].minutes}
    ingredients={CardInfo[13].ingredients}
    servings=   {CardInfo[13].servings} 
    category=   {CardInfo[13].category}
    />
    <Card
    id=         {CardInfo[14].id}
    imgMain=    {CardInfo[14].imgMain}
    url=        {CardInfo[14].url}
    title=      {CardInfo[14].title}
    minutes=    {CardInfo[14].minutes}
    ingredients={CardInfo[14].ingredients}
    servings=   {CardInfo[14].servings} 
    category=   {CardInfo[14].category}
    />
    <Card
    id=         {CardInfo[16].id}
    imgMain=    {CardInfo[16].imgMain}
    url=        {CardInfo[16].url}
    title=      {CardInfo[16].title}
    minutes=    {CardInfo[16].minutes}
    ingredients={CardInfo[16].ingredients}
    servings=   {CardInfo[16].servings} 
    category=   {CardInfo[16].category}
    />
    

            </div>

  </div>;
}

export default Dessert;
