import React, { useState, useEffect } from 'react'

function App() {
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/tacos')
            .then((r)=>r.json())
            .then((stuff)=>setInfo(stuff))
    }, [])

    console.log(info)

    return(
        info.map(i=><h1>{i.title}</h1>)
    )
}
export default App