import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Form({sayingObjs, setsayingObjs}) {
    const history=useHistory()
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
        .then((newItem) => setsayingObjs([...sayingObjs, newItem]))
        setJargon('')
        setDefinition('')
        setSentence('')
        setImage('')
        history.push('/dictionary')
    }

    return (
        <div>
            <h1>Add your new term here</h1>
            <form onSubmit={handleSubmit}>
                <label>Doublespeak Phrase</label>
                <input type='text' value={jargon} onChange={handleJargonChange} placeholder='Type your new phrase here' />
                <label>Definition</label>
                <input type='text' value={definition} onChange={handleDefinitionChange} placeholder='Type the definition here' />
                <label>Use the phrase in a sentence</label>
                <input type='text' value={sentence} onChange={handleSentenceChange} placeholder='Use the phrase in the most creative and corporate way possible' />
                <label>Gif or image link</label>
                <input type='text' value={image} onChange={handleImageChange} placeholder='Use an embed link here'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form