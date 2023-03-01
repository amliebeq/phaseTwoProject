import React from 'react'

function Form({ jargon, definition, sentence, image, handleJargonChange, handleDefinitionChange, handleSentenceChange, handleImageChange, handleSubmit }) {

    return (
        <div>
            <h1>Add your new term here</h1>
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
        </div>
    )
}

export default Form