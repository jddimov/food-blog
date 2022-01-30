import React from 'react';
import Card from './Card';

function CreateCard(cardComponent) {
    return (
        <Card
        id=         {cardComponent.id}
        imgMain=    {cardComponent.imgMain}
        url=        {cardComponent.url}
        title=      {cardComponent.title}
        minutes=    {cardComponent.minutes}
        ingredients={cardComponent.ingredients}
        servings=   {cardComponent.servings} 
        category=   {cardComponent.category}
        />
        );
}

export default CreateCard;
