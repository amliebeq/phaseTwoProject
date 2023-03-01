import React from 'react'
import Card from './Card'


function Home( { sayingObj } ) {
    const randomNumber=Math.floor(Math.random() * sayingObj.length)
    const randomCard= sayingObj.filter(card => card.id===randomNumber)
    let makeRandom=randomCard.map((item) => {
        return (
        <Card key={item.id} jargon={item.jargon} definition={item.definition} sentence={item.sentence} image={item.image} id={item.id}/>
        )
    })
    
    return (
        <div>
            <h1>Welcome to the home of corporate jargon</h1>
            <div className='randomCard'>{makeRandom}</div>
        </div>
    )
}

export default Home