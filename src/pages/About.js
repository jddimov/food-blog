import React from 'react'
import CardInfo from '../components/Card/CardInfo'

import Card from '../components/Card/Card'

const About = () => {
    return (
        <div>
            <h1>About</h1>
            About
            <h1>About</h1>
            <h1>About</h1>
            <h1>About</h1>
            <h1>About</h1>
            
            {CardInfo[1].ingredients}
            <Card
            imgMain={CardInfo[1].imgMain}
            title={CardInfo[1].title}
            description={CardInfo[1].description}
            minutes={CardInfo[1].minutes}
            ingredients={CardInfo[1].ingredients}
            servings={CardInfo[1].servings} 

            />
            
        </div>
    )
}

export default About
