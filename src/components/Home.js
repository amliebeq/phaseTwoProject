import React from 'react'
import Card from './Card'


function Home( { sayingObjs } ) {
    const randomNumber=Math.floor(Math.random() * sayingObjs.length)
    const randomCard= sayingObjs.find(card => card.id===randomNumber)

    if (!randomCard) {
        return <h2>Loading...</h2>
    }
    
    return (
        <div>
            <h1>Welcome to the home of corporate jargon</h1>
            <div className='randomCard' >
            <Card key={randomCard.id} jargon={randomCard.jargon} definition={randomCard.definition} sentence={randomCard.sentence} image={randomCard.image} id={randomCard.id}/>
            </div>
        </div>
    )
}

export default Home