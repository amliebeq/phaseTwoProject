import React from 'react'

function Card({ jargon, definition, sentence, image, id }) {
    return (
        <div key={id}>
            <h3 key={jargon}>{jargon}</h3>
            <p key={definition}>{definition}</p>
            <p key={sentence}>{sentence}</p>
            <iframe key={image} src={image} height='240' width='240' frameBorder='0'></iframe>
        </div>
    )
}

export default Card