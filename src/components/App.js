import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Dictionary from './Dictionary'
import NavBar from './NavBar'
import Home from './Home'
import Form from './Form'


function App() {
    const [info, setInfo] = useState([])
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
        history.push('/dictionary')
    }

    useEffect(() => {
        fetch('http://localhost:4000/doubleSpeak')
            .then((r)=>r.json())
            .then((stuff)=>setInfo(stuff))
    }, [])

    return(
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/'>
                    <Home info={info}/>
                </Route>
                <Route exact path='/dictionary'>
                    <Dictionary info={info}/>
                </Route>
                <Route exact path='/add-new'>
                    <Form jargon={jargon} definition={definition} sentence={sentence} image={image} handleJargonChange={handleJargonChange} handleDefinitionChange={handleDefinitionChange} handleSentenceChange={handleSentenceChange} handleImageChange={handleImageChange} handleSubmit={handleSubmit} />
                </Route>
            </Switch>
        </div>
    )
}
export default App