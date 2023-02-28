import React from 'react'
import Random from './Random'


function Home( { info } ) {
    
    return (
        <div>
            <h1>Welcome to the home of corporate jargon</h1>
            <Random info={info}/>
        </div>
    )
}

export default Home