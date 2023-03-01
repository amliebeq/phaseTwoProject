import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dictionary from './Dictionary'
import NavBar from './NavBar'
import Home from './Home'
import Form from './Form'


function App() {
    const [sayingObj, setsayingObj] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/doubleSpeak')
            .then((r)=>r.json())
            .then((data)=>setsayingObj(data))
    }, [])

    return(
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/'>
                    <Home sayingObj={sayingObj}/>
                </Route>
                <Route exact path='/dictionary'>
                    <Dictionary sayingObj={sayingObj}/>
                </Route>
                <Route exact path='/add-new'>
                    <Form setsayingObj={setsayingObj} sayingObj={sayingObj} />
                </Route>
            </Switch>
        </div>
    )
}
export default App