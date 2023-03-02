import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dictionary from './Dictionary'
import NavBar from './NavBar'
import Home from './Home'
import Form from './Form'


function App() {
    const [sayingObjs, setsayingObjs] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/doubleSpeak')
            .then((r)=>r.json())
            .then((data)=>setsayingObjs(data))
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
                    <Form setsayingObj={setsayingObjs} sayingObj={sayingObjs} />
                </Route>
            </Switch>
        </div>
    )
}
export default App