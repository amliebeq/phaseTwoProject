import React from 'react'
import Card from './Card'

function Dictionary({ sayingObjs }) {
    const makeList= sayingObjs.map((saying) => {
        return(
            <Card key={saying.id} jargon={saying.jargon} definition={saying.definition} sentence={saying.sentence} image={saying.image} id={saying.id}/>
        )
    })

    return (
        <div id='items'>
            <h1>Master corporate jargon dictionary</h1>
            <div id='item list' className='row'>
                {makeList}
            </div>
        </div>
    )
}

export default Dictionary