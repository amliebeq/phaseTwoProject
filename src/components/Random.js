import React, { useState }from 'react'

function Random ({ info }) {
    const randomNumber=Math.floor(Math.random() * 9)
    const randomCard= info.filter(card => card.id===randomNumber)
    console.log(randomCard[0])

    return (
        <div>
            {/* <h3 key={randomCard[0].jargon}>{randomCard[0].jargon}</h3>
            <p key={randomCard[0].definition}>{randomCard[0].definition}</p>
            <p key={randomCard[0].sentence}>{randomCard[0].sentence}</p>
            <iframe key={randomCard[0].image} src={randomCard[0].image} height='240' width='240' frameBorder='0'></iframe> */}
        </div>
    )    
}

export default Random