// Create a filter element on the top of the controlled form that allows a user to filter the contents of the dictionary as they type based on the phrase
//Child component of my dictionary
//put together a form for input
//on change funtction that updates the dictionary as we type

import React from "react";

function Filter ({ onFilterChange }) {

    return (
        <form>
            <input type='Text' onChange={onFilterChange} placeholder='Filter by term' />
        </form>
    )
}

export default Filter