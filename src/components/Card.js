import React from 'react'

function Card({ jargon, definition, sentence, image }) {
    return (
        <div className="card">
            <h3>Term: {jargon}</h3>
            <p>Definition: {definition}</p>
            <p>Used in a sentence: {sentence}</p>
            <iframe src={image} height='auto' width='200' frameBorder='0'></iframe>
        </div>
    )
}

export default Card