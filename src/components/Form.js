import React, { useState } from 'react'

function Form() {
    const [jargon, setJargon] = useState('')
    const [definition, setDefinition] = useState('')
    const [sentence, setSentence] = useState('')
    const [image, setImage] = useState('')

    function handleJargonChange(e) {
        setJargon(e.target.value)
    }

    function handleDefinitionChange(e) {
        setDefinition(e.target.value)
    }

    function handleSentenceChange(e) {
        setSentence(e.target.value)
    }

    function handleImageChange(e) {
        setImage(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            jargon: jargon,
            definition: definition,
            sentence: sentence,
            image: image,
        }
        fetch('http://localhost:4000/doubleSpeak', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then ((r) => r.json())
        .then((newItem) => console.log(newItem))
        setJargon('')
        setDefinition('')
        setSentence('')
        setImage('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Doublespeak Phrase</label>
            <input type='text' value={jargon} onChange={handleJargonChange}/>
            <label>Definition</label>
            <input type='text' value={definition} onChange={handleDefinitionChange}/>
            <label>Use the phrase in a sentence</label>
            <input type='text' value={sentence} onChange={handleSentenceChange} />
            <label>Gif or image link</label>
            <input type='text' value={image} onChange={handleImageChange} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form