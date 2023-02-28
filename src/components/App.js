import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import List from './List'
import NavBar from './NavBar'

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
                    <List info={info}/>
                </Route>
            </Switch>
        </div>
    )
}
export default App