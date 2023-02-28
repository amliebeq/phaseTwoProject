import React from 'react'

function Card({ jargon, definition, sentence, image }) {
    return (
        <div id='jargon-card'>
            <h3>{jargon}</h3>
            <p>{definition}</p>
            <p>{sentence}</p>
            <iframe src={image}></iframe>
        </div>
    )
}

export default Card