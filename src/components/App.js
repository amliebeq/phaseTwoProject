import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dictionary from './Dictionary'
import NavBar from './NavBar'
import Home from './Home'
import Form from './Form'

function App() {
    const [sayingObjs, setSayingObjs] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/doubleSpeak')
            .then((r)=>r.json())
            .then((data)=>setSayingObjs(data))
    }, [])

    return(
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/'>
                    <Home sayingObjs={sayingObjs}/>
                </Route>
                <Route exact path='/dictionary'>
                    <Dictionary sayingObjs={sayingObjs}/>
                </Route>
                <Route exact path='/add-new'>
                    <Form setsayingObjs={setSayingObjs} sayingObjs={sayingObjs} />
                </Route>
            </Switch>
        </div>
    )
}
export default App