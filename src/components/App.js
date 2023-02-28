import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dictionary from './Dictionary'
import NavBar from './NavBar'
import Home from './Home'
import Form from './Form'


function App() {
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/doubleSpeak')
            .then((r)=>r.json())
            .then((stuff)=>setInfo(stuff))
    }, [])

    return(
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/dictionary'>
                    <Dictionary info={info}/>
                </Route>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/add-new'>
                    <Form />
                </Route>
            </Switch>
        </div>
    )
}
export default App