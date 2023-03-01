import React from 'react'
import Card from './Card'


function Home( { info } ) {
    const randomNumber=Math.floor(Math.random() * info.length)
    const randomCard= info.filter(card => card.id===randomNumber)
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