import React, { useState } from 'react'
import Card from './Card'
import Filter from './Filter'

function Dictionary({ sayingObjs }) {
    const [filterValue, setFilterValue] = useState('')

    function handleFilterChange (e) {
        setFilterValue(e.target.value.toLowerCase())
    }

    let filterList = sayingObjs.filter((obj) => obj.jargon.toLowerCase().includes(filterValue))

    const makeList= filterList.map((saying) => {
        return(
            <Card key={saying.id} jargon={saying.jargon} definition={saying.definition} sentence={saying.sentence} image={saying.image} id={saying.id}/>
        )
    })

    return (
        <div id='items'>
            <h1>Master corporate jargon dictionary</h1>
            <Filter onFilterChange={handleFilterChange}/>
            <div id='item list' className='row'>
                {makeList}
            </div>
        </div>
    )
}

export default Dictionary