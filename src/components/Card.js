import React from 'react'

function Card({ jargon, definition, sentence, image, id }) {
    return (
        <div key={id} className="card">
            <h3 key={jargon}>Term: {jargon}</h3>
            <p key={definition}>Definition: {definition}</p>
            <p key={sentence}>Used in a sentence: {sentence}</p>
            <iframe key={image} src={image} height='auto' width='200' frameBorder='0'></iframe>
        </div>
    )
}

export default Card