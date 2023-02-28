import React from 'react'
import Card from './Card'

function Dictionary({ info }) {
    const makeList= info.map((item) => {
        return(
            <Card jargon={item.jargon} definition={item.definition} sentence={item.sentence} image={item.image} />
        )
    })

    return (
        <div id='items'>
            <h1>Master corporate jargon dictionary</h1>
            <div id='item list'>
                {makeList}
            </div>
        </div>
    )
}

export default Dictionary